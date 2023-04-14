export { Login } from "./login-demoqa.page";
export { PersonalInformation, UserInformation } from "./personal-information.page";
import "./commands";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })