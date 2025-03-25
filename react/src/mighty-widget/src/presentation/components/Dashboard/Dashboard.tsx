import NodeDetail from "@/presentation/components/NodeDetail/NodeDetail";
import Ring from "@/presentation/components/Ring/Ring";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <div className="dashboard-container">
        <div className="first-cell">
          <Ring />
        </div>
        |
        <div className="second-cell">
          <NodeDetail />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
