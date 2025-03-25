import { DevicesContext } from "@/presentation/contexts/DevicesContext";
import { useContext } from "react";
import "./DevicesList.scss";

const DevicesList = () => {
  const { wifiDevices, setSelectedDevice } = useContext(DevicesContext);

  return (
    <>
      DevicesList
      <div className="devices-list">
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
