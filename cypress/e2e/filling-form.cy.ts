import {Login} from "../page/index-demoqa";
import {PersonalInformation} from "../page/index-demoqa";

const login = new Login();
const personalinformation = new PersonalInformation();


describe("Personal Information", () => {
  it("then information is entered ", () => {
    // Arrange
    login.visitLoginPage();
    // Action
    personalinformation.firstName("Holmes");
    personalinformation.lastN("Salazar");
    personalinformation.emailData("test@email.com");
    personalinformation.genderData();
    personalinformation.birthday("27 Jul 2016");
    personalinformation.mobile("3656589156");
    personalinformation.hobby();
    personalinformation.otherHobby();
    personalinformation.address("Av siempreViva # 123");
    personalinformation.sub();     
    // Assertion    
    cy.get(".table-responsive .table-dark tr:nth-child(1) td:nth-child(2)").should("have.text", "Holmes Salazar");
    cy.get(".table-responsive .table-dark tr:nth-child(2)").should("have.text", "Student Emailtest@email.com");
    cy.get(".table-responsive .table-dark tr:nth-child(3)").should("have.text", "GenderMale");
    cy.get(".table-responsive .table-dark tr:nth-child(4)").should("have.text", "Mobile3656589156");
    cy.get(".table-responsive .table-dark tr:nth-child(5)").should("have.text", "Date of Birth30 July,202327");
    cy.get(".table-responsive .table-dark tr:nth-child(7)").should("have.text", "HobbiesReading, Music");
    cy.get(".table-responsive .table-dark tr:nth-child(9)").should("have.text", "AddressAv siempreViva # 123");
    cy.get(".table-responsive .table-dark tr:nth-child(10)").should("have.text", "State and City");
  });
});
