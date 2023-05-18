it("can click a link to a page with text/html content-type", () => {
  cy.visit("/");
  cy.get("a").contains("Has content type").click();
  cy.url().should("contain", "/has-content-type");
});
