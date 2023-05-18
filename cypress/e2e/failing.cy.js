it("can click a link to a page with no content-type", () => {
  cy.visit("/");
  cy.get("a").contains("No content type").click();
  cy.url().should("contain", "/no-content-type");
});
