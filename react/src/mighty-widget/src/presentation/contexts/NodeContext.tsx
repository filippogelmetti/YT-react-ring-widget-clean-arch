import { LoadWifiNodesUseCase } from "@/application/usecases/LoadWifiNodesUseCase";
import { WifiNode } from "@/domain/models/WifiNode";
import { createContext, useEffect, useState } from "react";

interface NodesContextType {
  wifiNodes: WifiNode[];
}

export const NodesContext = createContext<NodesContextType>({
  wifiNodes: [],
});

export const NodesProvider: React.FC<any> = ({ children }) => {
  const [wifiNodes, setWifiNodes] = useState<WifiNode[]>([]);

  useEffect(() => {
    const loadWifiNodes = async () => {
      const nodes = await new LoadWifiNodesUseCase().execute();
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
