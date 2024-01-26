describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.visit(
      "http://www.automationpractice.pl/index.php?id_category=8&controller=category"
    );
  });
});
