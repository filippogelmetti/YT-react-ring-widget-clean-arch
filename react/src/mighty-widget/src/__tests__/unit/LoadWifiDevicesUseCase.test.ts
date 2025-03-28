import { LoadWifiDevicesUseCase } from "@/application/usecases/LoadWifiDevicesUseCase";
import * as fs from "fs";
import { expect } from "@jest/globals";

describe("LoadWifiDevicesUseCase", () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, "fetch");
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  const mockFetchForBSSID = (bssid: string) => {
    const fixturePath = `src/__tests__/__fixtures__/wifidevices_${bssid}.json`;
    if (fs.existsSync(fixturePath)) {
      const fileContents = fs.readFileSync(fixturePath, "utf-8");
      const fixtureData = JSON.parse(fileContents);
      fetchSpy.mockResolvedValueOnce({
        json: () => Promise.resolve(fixtureData),
        ok: true,
      } as Response);
    } else {
      console.warn(`Fixture not found: ${fixturePath}`);
      fetchSpy.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: "Not Found",
      } as Response);
    }
  };

  test.each(["28:87:ba:5e:7d:61:", "28:87:ba:5e:7d:63:"])(
    "should return an array of WiFi devices for BSSID %s",
    async (bssid) => {
      mockFetchForBSSID(bssid);
      const useCase = new LoadWifiDevicesUseCase();
      const result = await useCase.execute(bssid);
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toEqual(
        expect.objectContaining({
          MAC: expect.any(String),
          Hostname: expect.any(String),
          IP: expect.any(String),
          Vendor: expect.any(String),
        })
      );
    }
  );

  test("should throw an error if API returns an error", async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "API request failed with status 500",
    } as Response);
    const useCase = new LoadWifiDevicesUseCase();
    await expect(useCase.execute("invalid:bssid")).rejects.toThrowError(
      "API request failed with status 500"
    );
  });
});
