class CartPage {
    private cart: string;

    constructor() {
        this.cart = "#shopping_cart_container";
    }

    public selectCart(): void {
        cy.get(this.cart).click();
    }
}

export { CartPage };
