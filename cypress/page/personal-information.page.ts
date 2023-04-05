export type UserInformation = {
    name: string;
    lastName: string;
    email: string;
    gender: string;
    music: string;
    reading: string;
    mobileNumber: string;   
    month: string;
    year: string;
    day: string;
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
    private music: string;
    private reading: string;
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
        this.day = ":nth-child(5) > .react-datepicker__day--0";
        this.mobileNumber = "#userNumber";
        this.music = "#hobbies-checkbox-2";
        this.reading = "#hobbies-checkbox-3";
        this.currentAddress = "#currentAddress";
        this.submit = "#submit";      

    }   

    public fillForm(userInformation: UserInformation){
        cy.get(this.name).type(userInformation.name);  
        cy.get(this.lastName).type(userInformation.lastName);
        cy.get(this.email).type(userInformation.email);
        cy.get(this.gender).click({force: true});       
        cy.get(this.mobileNumber).type(userInformation.mobileNumber);
        cy.get(this.dateOfBirth).click({force: true});
        cy.get(this.month).select(userInformation.month);
        cy.get(this.year).select(userInformation.year);
        cy.get(this.day + userInformation.day).click({force: true});
        cy.get(this.music).click({force: true}); 
        cy.get(this.reading).click({force: true});             
        cy.get(this.currentAddress).type(userInformation.currentAddress);     
    }       
    
    public sub(): void {
        cy.get(this.submit).click({force: true});
    }   
}

export { PersonalInformation };
