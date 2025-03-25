import { DevicesContext } from "@/presentation/contexts/DevicesContext";
import { useContext } from "react";

const DevicesList = () => {
  const { wifiDevices } = useContext(DevicesContext);

  console.log(wifiDevices);

  return (
    <>
      DevicesList
      {wifiDevices.map((device, i) => (
        <div key={i}>{device?.Hostname}</div>
      ))}
    </>
  );
};

export default DevicesList;
