import { WifiDevice } from "@/domain/models/WifiDevice";

export class LoadWifiDevicesUseCase {
  constructor() {}

  async execute(bssid: string): Promise<WifiDevice[]> {
    try {
      // Fetch the WiFi devices from the API
      const response = await fetch(
        `http://192.168.1.96:8989/scan_devices?bssid=${encodeURIComponent(
          bssid
        )}`
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      // Map API data to WifiDevice format
      const wifiDevices: WifiDevice[] = data.map((device: any) => {
        return {
          Hostname: device.Hostname,
          IP: device.IP,
          MAC: device.MAC,
          Vendor: device.Vendor || "Unknown", // Default to "Unknown" if vendor is missing
        };
      });

      return wifiDevices;
    } catch (error) {
      console.error("Error fetching WiFi devices:", error);
      return []; // Return an empty array in case of error
    }
  }
}
