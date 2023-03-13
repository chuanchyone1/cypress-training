describe("Buy a black t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit("https://www.saucedemo.com/"); // (1)
    cy.get("#user-name").type("standard_user"); // (2)
    cy.get("#password").type("secret_sauce"); // (2)
    cy.get("#login-button").click(); // (2)
    cy.get("#item_1_title_link").click();
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.get("#shopping_cart_container").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type("Cypress");
    cy.get("#last-name").type("Workshop");
    cy.get("#postal-code").type("00000");
    cy.get("#continue").click();
    cy.get("#finish").click();


    // Debes completar la prueba con los puntos 3 al 11 del flujo

    cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
        "have.text",
        "Thank you for your order!",
    ); // (12)
  });
});
