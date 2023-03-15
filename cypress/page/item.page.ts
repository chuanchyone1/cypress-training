class ItemPages {
    private addToCart: string;

    constructor() {
        this.addToCart = "#add-to-cart-sauce-labs-bolt-t-shirt";
    }

    public clickAddToCart(): void {
        cy.get(this.addToCart).click();
    }
}

export { ItemPages };
