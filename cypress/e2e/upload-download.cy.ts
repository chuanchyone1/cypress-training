import {Login} from "../page/index";

const login = new Login();

describe("Upload a file", () => {
  it("then the file should be upload", () => {
    // Arrange
    login.visitLoginPage();
    // Action
    login.selectFile();
    cy.wait(2000);
    login.uploadButton();
    /* cy.fixture("EAWeekly.png", "base64").then((fileContent) => {      
    }); */
    
    // Debes completar la prueba con los puntos 3 al 11 del flujo
    // Assertion
    /* cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
        "have.text",
        "Thank you for your order!",
    ); // (12) */
  });
});
