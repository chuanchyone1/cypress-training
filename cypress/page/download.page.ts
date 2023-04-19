class LoginDownload {
    private Url: string;
    private Download: string;

    constructor() {
        this.Url = "https://demoqa.com/upload-download";
        this.Download = "#downloadButton";
    }

    public visitPage(): void {
        cy.visit(this.Url);
    }

    public dowloandButton(): void {        
        cy.get(this.Download).click();
    }
}

export { LoginDownload };
