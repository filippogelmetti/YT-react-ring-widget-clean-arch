import { LoadWifiNodesUseCase } from "@/application/usecases/LoadWifiNodesUseCase";

export const makeLoadWifiNodesUseCase = (): LoadWifiNodesUseCase => {
  return new LoadWifiNodesUseCase();
};
