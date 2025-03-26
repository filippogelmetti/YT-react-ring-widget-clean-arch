import { DevicesContext } from "@/presentation/contexts/DevicesContext";
import { useContext } from "react";
import "./DevicesList.scss";

const DevicesList = () => {
  const { wifiDevices, setSelectedDevice } = useContext(DevicesContext);

  return (
    <>
      <div className="devices-list">
        {wifiDevices.length === 0 && <div>No devices</div>}
        {wifiDevices.map((device, i) => (
          <div
            className="device-item"
            onMouseEnter={() => setSelectedDevice(device)}
            key={i}
          >
            {device?.Hostname}
          </div>
        ))}
      </div>
    </>
  );
};

export default DevicesList;
