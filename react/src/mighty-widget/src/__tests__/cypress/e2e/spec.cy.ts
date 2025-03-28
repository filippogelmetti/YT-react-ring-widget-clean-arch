// @ts-ignore
import { Chainable } from "cypress";

const API_URL = "http://192.168.1.96:8989";
const APP_URL = "http://localhost:5173";
const WIFI_IDS = ["28:87:ba:5e:7d:61:", "28:87:ba:5e:7d:63:"];

describe("Dashboard", () => {
  beforeEach(() => {
    cy.intercept("GET", `${API_URL}/scan_wifis`, { fixture: "wifinodes.json" });
    WIFI_IDS.forEach((wifiId) => {
      cy.intercept("GET", `${API_URL}/scan_devices?bssid=${wifiId}`, {
        fixture: `wifidevices_${wifiId}.json`,
      });
    });
    cy.visit(APP_URL);
  });

  it("should display the dashboard title", () => {
    cy.contains("Dashboard").should("be.visible");
  });

  it("should display all 3 ring nodes", () => {
    cy.get(".ring-node").should("have.length", 3);
    cy.get(".ring-node").each(($el) => {
      cy.wrap($el).should("be.visible");
    });
  });

  it("should display correct empty messages", () => {
    cy.get(".node-details-cell").should("contain", "No node selected");
    cy.get(".devices-list-cell").should("contain", "No devices");
    cy.get(".device-details-cell").should(
      "contain",
      "Select a device to view details"
    );
  });

  it("should display node details when a node is selected", () => {
    cy.get(".ring-node").first().click();
    cy.get(".node-details-cell").should("contain", "WiFi-5E7D61");
  });
});
