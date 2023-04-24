class Iframe {
    private Url: string;    

    constructor() {
        this.Url = "https://www.w3schools.com/html/default.asp";        
    }

    public visit(): void {
        cy.visit(this.Url);
    }   
}

export { Iframe };
