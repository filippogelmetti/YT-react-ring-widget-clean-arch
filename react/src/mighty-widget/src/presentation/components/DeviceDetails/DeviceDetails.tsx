import { DevicesContext } from "@/presentation/contexts/DevicesContext";
import { useContext } from "react";

const DeviceDetails = () => {
  const { selectedDevice } = useContext(DevicesContext);
  return (
    <>
      {selectedDevice ? (
        <div>
          <p>Hostname: {selectedDevice.Hostname}</p>
          <p>IP Address: {selectedDevice.IP}</p>
          <p>MAC Address: {selectedDevice.MAC}</p>
        </div>
      ) : (
        <div>
          <p>Select a device to view details</p>
        </div>
      )}
    </>
  );
};

export default DeviceDetails;
