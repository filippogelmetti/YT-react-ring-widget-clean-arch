import { LoadWifiNodesUseCase } from "@/application/usecases/LoadWifiNodesUseCase";
import * as fs from "fs";
import { expect } from "@jest/globals";

describe("LoadWifiNodesUseCase", () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, "fetch");
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  const mockFetchForWifiNodes = () => {
    const fixturePath = "src/__tests__/__fixtures__/wifinodes.json";

    if (fs.existsSync(fixturePath)) {
      const fileContents = fs.readFileSync(fixturePath, "utf-8");
      const fixtureData = JSON.parse(fileContents);

      fetchSpy.mockResolvedValueOnce({
        json: () => Promise.resolve(fixtureData),
        ok: true,
      } as Response);
    } else {
      fetchSpy.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: "Not Found",
      } as Response);
    }
  };

  test("should return an array of WiFi nodes", async () => {
    mockFetchForWifiNodes();
    const useCase = new LoadWifiNodesUseCase();
    const result = await useCase.execute();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toEqual(
      expect.objectContaining({
        BSSID: expect.any(String),
        Band: expect.any(String),
        Encryption: expect.arrayContaining([expect.any(String)]),
        SSID: expect.any(String),
        SignalStrength: expect.any(Number),
        devices: expect.any(Array),
      })
    );
  });

  test("should throw an error if API returns a 500 status", async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    } as Response);

    const useCase = new LoadWifiNodesUseCase();
    await expect(useCase.execute()).rejects.toThrowError(
      "API request failed with status 500"
    );
  });
});
