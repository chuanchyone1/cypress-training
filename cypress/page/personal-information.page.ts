class PersonalInformation {
    private name: string;
    private lastName: string;
    private email: string;
    private gender: string;
    private dateOfBirth: string;
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
        this.mobileNumber = "#userNumber";
        this.hobbies = "#hobbies-checkbox-2";
        this.other = "#hobbies-checkbox-3";
        this.currentAddress = "#currentAddress";
        this.submit = "#submit";      

    }

    public firstName(nameData: string): void  {
        cy.get(this.name).type(nameData);        
    }

    public lastN(lastNameData: string): void {
        cy.get(this.lastName).type(lastNameData);
    }

    public emailData(emailData: string): void {
        cy.get(this.email).type(emailData);
    }

    public genderData(): void {
        cy.get(this.gender).check({force: true});
    }

    public birthday(birth: string): void {
        cy.get(this.dateOfBirth).type(birth);
    }

    public mobile(mob: string): void {
        cy.get(this.mobileNumber).type(mob);
    }

    public hobby(): void {
        cy.get(this.hobbies).check({force: true});
    }
    
    public otherHobby(): void {
        cy.get(this.other).check({force: true});
    }
    public address(current: string): void {
        cy.get(this.currentAddress).type(current);
    }

    public sub(): void {
        cy.get(this.submit).click({force: true});
    }   
}


export { PersonalInformation };
