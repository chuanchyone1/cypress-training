import {Login} from "../page/index";

const login = new Login();

describe("Upload a file", () => {
  it("then the file should be upload", () => {
    // Arrange
    login.visitLoginPage();
    // Action
    login.selectFile();
    login.uploadButton();
    // Assert
    cy.get("#content").contains("File Uploaded!");
  });
});
