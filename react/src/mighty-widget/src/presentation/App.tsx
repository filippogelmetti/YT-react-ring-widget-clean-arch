import Ring from "@/presentation/components/Ring/Ring";
import { NodesProvider } from "@/presentation/contexts/NodeContext";
import { makeLoadWifiNodesUseCase } from "./factories/makeLoadWifiNodesUseCase";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <NodesProvider loadWifiNodesUseCase={makeLoadWifiNodesUseCase()}>
        <Dashboard />
      </NodesProvider>
    </>
  );
}

export default App;
