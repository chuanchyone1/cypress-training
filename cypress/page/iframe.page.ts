class Iframe {
    private Url: string;
    private Tutorial: string;
    private validateTutorial: string;
    private css: string;


    constructor() {
        this.Url = "https://www.w3schools.com/html/html_iframe.asp";       
        this.Tutorial = "[src='default.asp']"; 
        this.validateTutorial = "h1";
        this.css = "[title='CSS Tutorial']";

       
    }

    public visit(): void {
        cy.visit(this.Url);
    }   

    public getFrameTitle(): void {
        cy.iframe(this.Tutorial).find(this.validateTutorial).should("have.text", "HTML Tutorial");
    }

    public goToCssPageInFrame(): void {
        cy.iframe(this.Tutorial).find(this.css).click();
        cy.frameLoaded(this.Tutorial,{url:g"https://www.w3schools.com/css/default.asp"}).iframe(this.Tutorial).find(this.validateTutorial).should("have.text", "CSS Tutorial");       
    }
}

export { Iframe };
