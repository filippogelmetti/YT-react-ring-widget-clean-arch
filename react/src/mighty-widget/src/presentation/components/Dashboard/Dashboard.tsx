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
        </div>{" "}
        |
        <div className="second-cell">
          <NodeDetail />
        </div>
        <div className="third-cell">
          <h2>List of devices: 💻🖥️⌨️🖨️</h2>
        </div>
        <div className="forth-cell">
          <h2>Device details:</h2>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
