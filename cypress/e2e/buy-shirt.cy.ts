import {LoginPage} from "../page/index";
import {ProductListPage} from "../page/index";
import {ItemPages} from "../page/index";
import {CartPage} from "../page/index";
import {InformationPage} from "../page/index";
import {OverView} from "../page/index";
import {Finish} from "../page/index";

const loginPage = new LoginPage();
const productListPage = new ProductListPage();
const itemPage = new ItemPages();
const cartPage = new CartPage();
const informationPage = new InformationPage();
const overview = new OverView();
const finish = new Finish();


describe("Buy a black t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // Arrange
    loginPage.visitLoginPage();
    loginPage.signIn();
    // Action
    productListPage.findProductByName();
    itemPage.clickAddToCart();
    cartPage.selectCart();
    informationPage.selectCheckout();
    overview.selectContinue();
    finish.selectFinish();

    // Debes completar la prueba con los puntos 3 al 11 del flujo
    // Assertion
    cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
        "have.text",
        "Thank you for your order!",
    ); // (12)
  });
});
