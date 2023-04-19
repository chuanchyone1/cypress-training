import {LoginDownload} from "../page/index";

const loginDownload = new LoginDownload();

describe("Dowload a file", () => {
  it("Then the file should de dowload", () => {
    // Arrange
    loginDownload.visitPage();
    // Action
    loginDownload.dowloandButton();
    // Aseert
    cy.readFile(
        "home/runner/work/cypress-training/cypress-training/C:/Users/juan.torresh/Documents/cypress-training-main/chrome/downloads/sampleFile.jpeg").should(
        "exist");
  });
});
