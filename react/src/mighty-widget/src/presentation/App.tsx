import Ring from "@/presentation/components/Ring/Ring";
import { NodesProvider } from "@/presentation/contexts/NodeContext";

function App() {
  return (
    <>
      <NodesProvider>
        <Ring />
      </NodesProvider>
    </>
  );
}

export default App;
