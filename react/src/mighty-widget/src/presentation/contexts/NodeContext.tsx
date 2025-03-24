import { LoadWifiNodesUseCase } from "@/application/usecases/LoadWifiNodesUseCase";
import { WifiNode } from "@/domain/models/WifiNode";
import { createContext, useEffect, useState } from "react";

interface NodesProviderProps {
  children: React.ReactNode;
  loadWifiNodesUseCase: LoadWifiNodesUseCase;
}

interface NodesContextType {
  wifiNodes: WifiNode[];
  selectedNode: WifiNode | undefined;
  setSelectedNode: (node: WifiNode) => void;
}

export const NodesContext = createContext<NodesContextType>({
  wifiNodes: [],
  selectedNode: undefined,
  setSelectedNode: () => {},
});

export const NodesProvider: React.FC<NodesProviderProps> = ({
  children,
  loadWifiNodesUseCase,
}) => {
  const [selectedNode, setSelectedNode] = useState<WifiNode>();
  const [wifiNodes, setWifiNodes] = useState<WifiNode[]>([]);

  useEffect(() => {
    const loadWifiNodes = async () => {
      const nodes = await loadWifiNodesUseCase.execute();
      setWifiNodes(nodes);
    };

    loadWifiNodes();
  }, []);

  return (
    <NodesContext.Provider
      value={{
        wifiNodes,
        selectedNode,
        setSelectedNode,
      }}
    >
      {children}
    </NodesContext.Provider>
  );
};
