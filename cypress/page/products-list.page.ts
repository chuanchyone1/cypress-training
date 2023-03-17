class ProductListPage {
    private sauceLabsBolt: string;

    constructor() {
        this.sauceLabsBolt = "#item_1_title_link";
    }

    public selectSauceLabsBolt(): void {
        cy.get(this.sauceLabsBolt).click();
    }
}

export { ProductListPage };
