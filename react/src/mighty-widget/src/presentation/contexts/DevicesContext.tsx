import { WifiDevice } from "@/domain/models/WifiDevice";
import React, { createContext, useContext, useEffect, useState } from "react";
import { NodesContext } from "./NodeContext";

interface DevicesContextType {
  wifiDevices: WifiDevice[];
  selectedDevice: WifiDevice | undefined;
  setSelectedDevice: (device: any) => void;
}

export const DevicesContext = createContext<DevicesContextType>({
  wifiDevices: [],
  selectedDevice: undefined,
  setSelectedDevice: () => {},
});

export const DevicesProvider: React.FC<any> = ({
  children,
  loadWifiDevicesUseCase,
}) => {
  const [selectedDevice, setSelectedDevice] = useState();
  const [wifiDevices, setWifiDevices] = useState([]);
  const { selectedNode } = useContext(NodesContext);

  useEffect(() => {
    if (selectedNode?.BSSID) {
      const loadWifiDevices = async () => {
        const devices = await loadWifiDevicesUseCase.execute(
          selectedNode?.BSSID
        );
        setWifiDevices(devices);
      };
      loadWifiDevices();
    }
  }, [selectedNode]);

  return (
    <DevicesContext.Provider
      value={{
        wifiDevices,
        selectedDevice,
        setSelectedDevice,
      }}
    >
      {children}
    </DevicesContext.Provider>
  );
};
