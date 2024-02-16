beforeEach(() => {
  cy.visit("http://www.automationpractice.pl/index.php");
  cy.login();
});

describe("HomePageNavigation", () => {
  it("Verify if it is possible to access Contact Us", () => {
    cy.get("#contact-link > a").click();

    cy.url().should("include", "contact");

    cy.get(".page-heading").should("be.visible", "Contact Us");
  });

  it("Verify if it is possible to access the user section by clicking on your username", () => {
    cy.get(".account").click();

    cy.url().should("include", "my-account");

    cy.get(".page-heading").should("be.visible", "My account");
  });

  it("Verify if it is possible to access Women through the menu", () => {
    cy.get("#block_top_menu > ul > li").eq(0).click();

    cy.get(".page-heading").should("be.visible", "Women");
  });

  it("Verify if it is possible to access T-shirts in the Women submenu", () => {
    cy.get("#block_top_menu > ul > li").eq(0).trigger("mouseover");
    cy.wait(1000);

    cy.get(
      "#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > ul > li:nth-child(1) > a"
    ).click({ force: true });

    cy.get(".page-heading").should("be.visible", "T-shirts");
  });

  it("Verify if it is possible to access the options in the Dresses submen", () => {
    cy.get("#block_top_menu > ul > li").eq(1).trigger("mouseover");
    cy.wait(1000);

    cy.get(
      "#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(1) > a"
    ).click({ force: true });

    cy.get('[class="category-name"]').should("be.visible", "Casual Dresses");
  });

  it("Verify if it is possible to navigate to the Blog from the home page", () => {
    cy.get("#block_top_menu > ul > li:nth-child(4) > a")
      .invoke("removeAttr", "onclick")
      .click();
  });

  it("Verify that it is possible to access social networks in the footer", () => {
    cy.get("#social_block > ul > li.twitter  > a")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(4000);
  });

  it("Verify that you can navigate to the My account options in the footer", () => {
    cy.get("#footer > div > section:nth-child(7) > h4 > a").click();

    cy.get(".page-heading").should("be.visible", "My account");
  });
});
