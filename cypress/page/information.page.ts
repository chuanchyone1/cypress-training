class InformationPage {
    private page: string;

    constructor() {
        this.page = "#checkout";
    }

    public selectCheckout(): void {
        cy.get(this.page).click();
    }
}

export { InformationPage };
