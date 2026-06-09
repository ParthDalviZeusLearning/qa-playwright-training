import {test,expect} from "@playwright/test";
import {users} from  "../test-data/users";
import { products } from "../test-data/product";
import {CheckoutPage} from "../pages/CheckoutPage";
import {ProductsPage} from "../pages/ProductsPage";
import {loginAsStandardUser} from "../utils/testHelpers";
import { CartPage } from "../pages/CartPage";


test.beforeEach(async({page})=>{
   /*
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill(users[0].username);
    await page.locator('[data-test="password"]').fill(users[0].password);
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();*/
     
    await loginAsStandardUser(page);

});



test('TC010:Checkout with valid details @checkout',async({page})=>{
    /*
    await page.locator('[data-test="firstName"]').fill(users[0].firstName!);
    await page.locator('[data-test="lastName"]').fill(users[0].lastName!);
    await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);
    await page.locator('[data-test="continue"]').click();
   */
    const productsPage=new ProductsPage(page);
    const cartPage= new CartPage(page);
    const checkoutPage=new CheckoutPage(page);

    await productsPage.addProductToCart(products[0].name);
    await productsPage.goToCart();
    await cartPage.checkout();
    await checkoutPage.fillCheckoutDetails(users[0].firstName!,users[0].lastName!,users[0].postalCode!);
    await checkoutPage.continueCheckout();
    await expect(page).toHaveURL(/checkout-step-two/);
    await expect(page.getByText(products[0].name)).toBeVisible();
});


test('TC011:Checkout with missing First Name @negative @checkout',async({page})=>{
   
    /*
    await page.locator('[data-test="lastName"]').fill(users[0].lastName!);
    await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);
    await page.locator('[data-test="continue"]').click();
    */
    const productsPage=new ProductsPage(page);
    const cartPage= new CartPage(page);
    const checkoutPage=new CheckoutPage(page);   

    await productsPage.addProductToCart(products[0].name);
    await productsPage.goToCart();
    await cartPage.checkout();
    await checkoutPage.fillCheckoutDetails('',users[0].lastName!,users[0].postalCode!);
    await checkoutPage.continueCheckout();
    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
});

test('TC012:Checkout with missing Last Name @negative @checkout',async({page})=>{
   
    /*
    await page.locator('[data-test="firstName"]').fill(users[0].firstName!);
    await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);
    await page.locator('[data-test="continue"]').click();*/

    const productsPage=new ProductsPage(page);
    const cartPage= new CartPage(page);
    const checkoutPage=new CheckoutPage(page);

    await productsPage.addProductToCart(products[0].name);
    await productsPage.goToCart();
    await cartPage.checkout();
    await checkoutPage.fillCheckoutDetails(users[0].firstName!,'',users[0].postalCode!);
    await checkoutPage.continueCheckout();
    

    await expect(page.locator('[data-test="error"]')).toContainText('Last Name is required');

});


test('TC013:Checkout with missing Postal Code @negative @checkout',async({page})=>{
   
    /*
    await page.locator('[data-test="firstName"]').fill(users[0].firstName!); 
    await page.locator('[data-test="lastName"]').fill(users[0].lastName!);
    await page.locator('[data-test="continue"]').click();*/

    const productsPage=new ProductsPage(page);
    const cartPage= new CartPage(page);
    const checkoutPage=new CheckoutPage(page);

    await productsPage.addProductToCart(products[0].name);
    await productsPage.goToCart();
    await cartPage.checkout();
    await checkoutPage.fillCheckoutDetails(users[0].firstName!,users[0].lastName!,'');
    await checkoutPage.continueCheckout();
    await expect(page.locator('[data-test="error"]')).toContainText('Postal Code is required');

});


test('TC014:Checkout with all fields empty @negative @checkout',async({page})=>{
   
   
   // await page.locator('[data-test="continue"]').click();
    const productsPage=new ProductsPage(page);
    const cartPage= new CartPage(page);
    const checkoutPage=new CheckoutPage(page);

    await productsPage.addProductToCart(products[0].name);
    await productsPage.goToCart();
    await cartPage.checkout();
    await checkoutPage.fillCheckoutDetails('','','');
    await checkoutPage.continueCheckout();
    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');

});


test('TC015:Complete order successfully @regression',async({page})=>{

    /*
    await page.locator('[data-test="firstName"]').fill(users[0].firstName!);
    await page.locator('[data-test="lastName"]').fill(users[0].lastName!);
    await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL(/checkout-complete/);
    await expect(page.getByText('Thank you for your order!')).toBeVisible(); */

    const productsPage=new ProductsPage(page);
    const cartPage= new CartPage(page);
    const checkoutPage=new CheckoutPage(page);

    await productsPage.addProductToCart(products[0].name);
    await productsPage.goToCart();
    await cartPage.checkout();
    await checkoutPage.fillCheckoutDetails(users[0].firstName!,users[0].lastName!,users[0].postalCode!);
    await checkoutPage.continueCheckout();
    await checkoutPage.finishOrder();
    await checkoutPage.verifyOrderConfirmation();
})

