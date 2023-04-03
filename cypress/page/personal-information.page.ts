export type UserInformation = {
    name: string;
    lastName: string;
    email: string;   
    mobileNumber: string;
    currentAddress: string;   
}

class PersonalInformation {
    private name: string;
    private lastName: string;
    private email: string;
    private gender: string;    
    private dateOfBirth: string;
    private month: string;
    private year: string;
    private day: string;
    private mobileNumber: string;
    private hobbies: string;
    private other: string;
    private currentAddress: string;
    private submit: string;  
    
    constructor() {
        this.name = "#firstName";
        this.lastName = "#lastName";
        this.email = "#userEmail";
        this.gender = "#gender-radio-1";
        this.dateOfBirth = "#dateOfBirthInput";
        this.month = ".react-datepicker__month-select";
        this.year = ".react-datepicker__year-select";
        this.day = ":nth-child(5) > .react-datepicker__day--027";
        this.mobileNumber = "#userNumber";
        this.hobbies = "#hobbies-checkbox-2";
        this.other = "#hobbies-checkbox-3";
        this.currentAddress = "#currentAddress";
        this.submit = "#submit";      

    }   

    public fillForm(userInformation: UserInformation){
        cy.get(this.name).type(userInformation.name);  
        cy.get(this.lastName).type(userInformation.lastName);
        cy.get(this.email).type(userInformation.email);       
        cy.get(this.mobileNumber).type(userInformation.mobileNumber);             
        cy.get(this.currentAddress).type(userInformation.currentAddress);      
    }

    public genderData(): void {
        cy.get(this.gender).check({force: true});
    }
    
    public selectDayOfBirth(): void {
        cy.get(this.dateOfBirth).click({force: true});
    }

    public selectMonth(): void {        
        cy.get(this.month).select('July');
    }

    public selectYear(): void {
        cy.get(this.year).select('2016');
    }

    public selectDay(): void {
        cy.get(this.day).click({force: true});
    }    

    public hobby(): void {
        cy.get(this.hobbies).check({force: true});
    }
    
    public otherHobby(): void {
        cy.get(this.other).check({force: true});
    }

    public sub(): void {
        cy.get(this.submit).click({force: true});
    }   
}

export { PersonalInformation };
