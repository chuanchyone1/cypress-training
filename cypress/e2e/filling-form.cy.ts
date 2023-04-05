import {Login} from "../page/index-demoqa";
import {PersonalInformation} from "../page/index-demoqa";

const login = new Login();
const personalinformation = new PersonalInformation();

describe("Personal Information", () => {
  it("then information is entered ", () => {
    // Arrange
    login.visitLoginPage();
    // Action
    const userdata = {name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      mobileNumber: "3656589156",
      month: "July",
      year: "2016",
      music: "Music",
      reading: "Reading",
      currentAddress: "Av siempreViva # 123"};
    personalinformation.fillForm(userdata);
    personalinformation.selectDayOfBirth();
    // personalinformation.selectMonth();
    // personalinformation.selectYear();
    personalinformation.selectDay();
    personalinformation.sub();
    // Assertion
    cy.get("table > tbody > tr:nth-child(1)").should("have.text", "Student NameHolmes Salazar");
    cy.get("table > tbody > tr:nth-child(2)").should("have.text", "Student Emailtest@email.com");
    cy.get("table > tbody > tr:nth-child(3)").should("have.text", "GenderMale");
    cy.get("table > tbody > tr:nth-child(4)").should("have.text", "Mobile3656589156");
    cy.get("table > tbody > tr:nth-child(5)").should("have.text", "Date of Birth27 July,2016");
    cy.get("table > tbody > tr:nth-child(7)").should("have.text", "HobbiesReading, Music");
    cy.get("table > tbody > tr:nth-child(9)").should("have.text", "AddressAv siempreViva # 123");
    cy.get("table > tbody > tr:nth-child(10)").should("have.text", "State and City");
  });
});
