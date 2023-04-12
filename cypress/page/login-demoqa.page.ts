class Login {
    private loginURL: string;   
  
    constructor() {
      this.loginURL = "http://demoqa.com/automation-practice-form";    
    }
  
    public visitLoginPage(): void {
      cy.visit(this.loginURL);
    }    
  }
  
  export { Login };
