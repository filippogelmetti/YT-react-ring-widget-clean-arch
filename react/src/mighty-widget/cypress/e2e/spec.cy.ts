describe("Dashboard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
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
