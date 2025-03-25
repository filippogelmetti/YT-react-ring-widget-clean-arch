import { WifiDevice } from "./WifiDevice";

export interface WifiNode {
  BSSID: string;
  Band: string;
  Encryption: [string];
  SSID: string;
  SignalStrength: number;
  devices?: WifiDevice[];
}
