import {LoginDownload} from "../page/index";

const loginDownload = new LoginDownload();

describe("Dowload a file", () => {
  it("Then the file should de dowload", () => {
    // Arrange
    loginDownload.visitPage();
    // Action
    loginDownload.dowloandButton();
    // Aseert
    cy.readFile("cypress/downloads/sampleFile.jpeg").should("exist");
  });
});
