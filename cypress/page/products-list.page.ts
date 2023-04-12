class ProductListPage {
    private sauceLabsBolt: string;

    constructor() {
        this.sauceLabsBolt = ".inventory_list .inventory_item";
    }

    public findProductByName(nombre_producto: string): void {
        cy.get(this.sauceLabsBolt).filter(`:contains(${nombre_producto})`).click();   
    }
}

export { ProductListPage };
