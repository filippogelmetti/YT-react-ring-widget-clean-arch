import Ring from "@/presentation/components/Ring/Ring";
import { NodesProvider } from "@/presentation/contexts/NodeContext";
import { makeLoadWifiNodesUseCase } from "./factories/makeLoadWifiNodesUseCase";

function App() {
  return (
    <>
      <NodesProvider loadWifiNodesUseCase={makeLoadWifiNodesUseCase()}>
        <Ring />
      </NodesProvider>
    </>
  );
}

export default App;
