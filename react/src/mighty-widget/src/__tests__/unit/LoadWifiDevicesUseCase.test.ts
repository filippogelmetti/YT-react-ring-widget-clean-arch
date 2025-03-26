import { LoadWifiDevicesUseCase } from "@/application/usecases/LoadWifiDevicesUseCase";

describe("LoadWifiDevicesUseCase", () => {
  let useCase: LoadWifiDevicesUseCase;

  beforeEach(() => {
    useCase = new LoadWifiDevicesUseCase();
  });

  test("should return an array", async () => {
    const result = await useCase.execute("WiFi-5E7D61");
    console.log(result);
    expect(Array.isArray(result)).toBe(true);
  });
});
