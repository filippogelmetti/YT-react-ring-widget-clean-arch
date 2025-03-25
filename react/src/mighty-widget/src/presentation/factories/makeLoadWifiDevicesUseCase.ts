import { LoadWifiDevicesUseCase } from "@/application/usecases/LoadWifiDevicesUseCase";

export const makeLoadWifiDevicesUseCase = (): LoadWifiDevicesUseCase => {
  return new LoadWifiDevicesUseCase();
};
