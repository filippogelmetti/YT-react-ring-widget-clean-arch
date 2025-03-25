import { WifiDevice } from "@/domain/models/WifiDevice";

export class LoadWifiDevicesUseCase {
  constructor() {}

  async execute(wifiSsid: string): Promise<WifiDevice[]> {
    // Mocking api call

    if (wifiSsid === "WiFi-5E7D61") {
      return [
        {
          Hostname: "VX220-G2V",
          IP: "192.168.1.1",
          MAC: "22:87:2a:5e:7d:ff",
          Vendor: "TP-Link",
        },
        {
          Hostname: "host.docker.internal",
          IP: "192.168.1.96",
          MAC: "63:1d:e7:44:86:ef",
          Vendor: "Unknown",
        },
      ];
    }
    if (wifiSsid === "Vodafone5G-6FB60") {
      return [
        {
          Hostname: "NAS-RAMMSTEIN",
          IP: "192.168.1.104",
          MAC: "21:3e:43:7d:32:4c",
          Vendor: "Western Digital",
        },
        {
          Hostname: "aorus",
          IP: "192.168.1.106",
          MAC: "18:10:42:94:d4:27",
          Vendor: "AORUS",
        },
        {
          Hostname: "metabox",
          IP: "192.168.1.105",
          MAC: "b1:63:e5:73:3b:16",
          Vendor: "Metabox",
        },
      ];
    }
    return [];
  }
}
