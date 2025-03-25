import { NodesProvider } from "@/presentation/contexts/NodeContext";
import Dashboard from "@/presentation/components/Dashboard/Dashboard";
import { DevicesProvider } from "@/presentation/contexts/DevicesContext";
import { makeLoadWifiDevicesUseCase } from "./factories/makeLoadWifiDevicesUseCase";
import { makeLoadWifiNodesUseCase } from "./factories/makeLoadWifiNodesUseCase";

function App() {
  return (
    <>
      <NodesProvider loadWifiNodesUseCase={makeLoadWifiNodesUseCase()}>
        <DevicesProvider loadWifiDevicesUseCase={makeLoadWifiDevicesUseCase()}>
          <Dashboard />
        </DevicesProvider>
      </NodesProvider>
    </>
  );
}

export default App;
