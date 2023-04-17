class Login {
    private loginURL: string;
    private file: string;
    private upload: string;
  
    constructor() {
      this.loginURL = "https://the-internet.herokuapp.com/upload";
      this.file = "#file-upload";
      this.upload = "#file-submit";
    }
  
    public visitLoginPage(): void {
      cy.visit(this.loginURL);
    }
  
    public selectFile(): void {
      cy.get(this.file).selectFile("EAWeekly.png");
    }
  
    public uploadButton(): void {
      cy.get(this.upload).click({force:true});
    }
  }
  
  export { Login };
