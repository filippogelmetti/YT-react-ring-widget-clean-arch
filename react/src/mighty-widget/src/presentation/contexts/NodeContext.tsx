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
  isNodeSelected: (node: WifiNode) => boolean;
}

export const NodesContext = createContext<NodesContextType>({
  wifiNodes: [],
  selectedNode: undefined,
  setSelectedNode: () => {},
  isNodeSelected: () => false,
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

  const isNodeSelected = (node: WifiNode) => {
    return selectedNode ? selectedNode.BSSID === node.BSSID : false;
  };

  return (
    <NodesContext.Provider
      value={{
        wifiNodes,
        selectedNode,
        setSelectedNode,
        isNodeSelected,
      }}
    >
      {children}
    </NodesContext.Provider>
  );
};
