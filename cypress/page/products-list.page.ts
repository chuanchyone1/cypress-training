class ProductListPage {
    private sauceLabsBolt: string;

    constructor() {
        this.sauceLabsBolt = ".inventory_list .inventory_item";
    }

    public findProductByName(): void {
        cy.get(this.sauceLabsBolt).filter(':contains("Sauce Labs Bolt T-Shirt")').click();       
    }
}

export { ProductListPage };
