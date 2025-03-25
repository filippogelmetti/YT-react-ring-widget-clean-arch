import { WifiDevice } from "@/domain/models/WifiDevice";
import React, { createContext, useEffect, useState } from "react";

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

  console.log("🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝");
  console.log(wifiDevices);

  useEffect(() => {
    const loadWifiDevices = async () => {
      const devices = await loadWifiDevicesUseCase.execute();
      setWifiDevices(devices);
    };

    loadWifiDevices();
  }, []);

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
