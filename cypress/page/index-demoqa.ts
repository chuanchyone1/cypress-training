export { Login } from "./login-demoqa.page";
export { PersonalInformation, UserInformation } from "./personal-information.page";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  