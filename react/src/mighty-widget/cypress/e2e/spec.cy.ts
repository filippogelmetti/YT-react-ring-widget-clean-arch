describe("Dashboard", () => {
  it("should display the dashboard title", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Dashboard").should("be.visible");
  });
});
