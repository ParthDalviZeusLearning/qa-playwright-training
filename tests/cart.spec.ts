import {test,expect} from '@playwright/test';
import {users} from "../test-data/users";
import { products } from '../test-data/product';
import { CartPage } from '../pages/CartPage';
import { loginAsStandardUser } from '../utils/testHelpers';
import { ProductsPage } from '../pages/ProductsPage';


test.beforeEach(async({page})=>{
   /*
    await page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill(users[0].username);
    await page.locator('[data-test="password"]').fill(users[0].password);
    await page.locator('[data-test="login-button"]').click();*/
 
 await loginAsStandardUser(page);

});

test('TC006:Add one product to cart @regression',async({page})=>{
 /*
   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');*/

   const productsPage=new ProductsPage(page);
   await productsPage.addProductToCart(products[0].name);
   await productsPage.verifyCartCount(1);

});


test('TC007:Remove product from the cart @regression',async({page})=>{
 
    /*
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();*/

    const productsPage=new ProductsPage(page);
    await productsPage.addProductToCart(products[0].name);
    await productsPage.removeProductFromCart(products[0].name);
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
});


test('TC008:Add multiple product from the cart @regression',async({page})=>{
   /*
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');*/

    
   const productsPage=new ProductsPage(page);
   await productsPage.addProductToCart(products[0].name);
   await productsPage.addProductToCart(products[1].name);
   await productsPage.verifyCartCount(2);



});

test('TC009:Cart Page shows selected products @regression',async({page})=>{
    /*
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL(/cart/);
    await expect(page.getByText(products[0].name)).toBeVisible();*/
   const  productsPage=new ProductsPage(page);
   await productsPage.addProductToCart(products[0].name);
   const cartPage= new CartPage(page);
   await cartPage.verifyProductInCart(products[0].name);


})


