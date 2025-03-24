import { LoadWifiNodesUseCase } from "@/application/usecases/LoadWifiNodesUseCase";
import { WifiNode } from "@/domain/models/WifiNode";
import { createContext, useEffect, useState } from "react";

interface NodesProviderProps {
  children: React.ReactNode;
  loadWifiNodesUseCase: LoadWifiNodesUseCase;
}

interface NodesContextType {
  wifiNodes: WifiNode[];
}

export const NodesContext = createContext<NodesContextType>({
  wifiNodes: [],
});

export const NodesProvider: React.FC<NodesProviderProps> = ({
  children,
  loadWifiNodesUseCase,
}) => {
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
      }}
    >
      {children}
    </NodesContext.Provider>
  );
};
