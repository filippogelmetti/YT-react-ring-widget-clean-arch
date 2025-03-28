import { WifiNode } from "@/domain/models/WifiNode";

export class LoadWifiNodesUseCase {
  constructor() {}

  async execute(): Promise<WifiNode[]> {
    try {
      // Fetch the WiFi nodes from the API
      const response = await fetch("http://192.168.1.96:8989/scan_wifis");
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      // Map API data to WifiNode format
      const wifiNodes: WifiNode[] = data.map((network: any) => {
        const wifiNode: WifiNode = {
          BSSID: network.BSSID,
          Band: network.Band,
          Encryption: network.Encryption,
          SSID: network.SSID,
          SignalStrength: network["Signal Strength"],
          devices: [], // Empty devices array for now
        };

        return wifiNode;
      });

      return wifiNodes;
    } catch (error) {
      console.error("Error fetching WiFi nodes:", error);
      return []; // Return an empty array in case of error
    }
  }
}
