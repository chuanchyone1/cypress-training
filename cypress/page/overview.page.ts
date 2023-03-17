class OverView {
    private name: string;
    private lastName: string;
    private postalCode: string;
    private continue: string;

    constructor() {
        this.name = "#first-name";
        this.lastName = "#last-name";
        this.postalCode = "#postal-code";
        this.continue = "#continue";
    }

    public selectContinue(): void {
        cy.get(this.name).type("Cypress");
        cy.get(this.lastName).type("Workshop");
        cy.get(this.postalCode).type("00000");
        cy.get(this.continue).click();
    }
}

export { OverView };
