import NodeDetail from "@/presentation/components/NodeDetail/NodeDetail";
import Ring from "@/presentation/components/Ring/Ring";
import DevicesList from "@/presentation/components/DevicesList/DevicesList";
import DeviceDetails from "@/presentation/components/DeviceDetails/DeviceDetails";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <div className="dashboard-container">
        <div className="first-cell">
          <Ring />
        </div>
        <div className="second-cell">
          <NodeDetail />
        </div>
        <div className="third-cell">
          <h2>List of devices: 💻🖥️⌨️🖨️</h2>
          <DevicesList />
        </div>
        <div className="forth-cell">
          <h2>Device details:</h2>
          <DeviceDetails />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
