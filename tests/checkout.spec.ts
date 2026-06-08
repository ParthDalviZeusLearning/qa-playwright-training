import {test,expect} from "@playwright/test";
import {users} from  "../test-data/users";
import { products } from "../test-data/product";


test.beforeEach(async({page})=>{

    await page.goto('https://www.saucedemo.com');

    await page.locator('[data-test="username"]').fill(users[0].username);

    await page.locator('[data-test="password"]').fill(users[0].password);

    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

     await page.locator('[data-test="shopping-cart-link"]').click();

     await page.locator('[data-test="checkout"]').click();
});



test('TC010:Checkout with valid details',async({page})=>{

    await page.locator('[data-test="firstName"]').fill(users[0].firstName!);
    
    await page.locator('[data-test="lastName"]').fill(users[0].lastName!);

    await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);

    await page.locator('[data-test="continue"]').click();

    await expect(page).toHaveURL(/checkout-step-two/);
});


test('TC011:Checkout with missing First Name',async({page})=>{
   
    
    await page.locator('[data-test="lastName"]').fill(users[0].lastName!);

    await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);

    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');

});

test('TC012:Checkout with missing Last Name',async({page})=>{
   
    
    await page.locator('[data-test="firstName"]').fill(users[0].firstName!);

    await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);

    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('Last Name is required');

});


test('TC013:Checkout with missing Postal Code',async({page})=>{
   
    
    await page.locator('[data-test="firstName"]').fill(users[0].firstName!);
    
    await page.locator('[data-test="lastName"]').fill(users[0].lastName!);
   
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('Postal Code is required');

});


test('TC014:Checkout with all fields empty',async({page})=>{
   

    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');

});


test('TC015:Complete order successfully',async({page})=>{

    
    await page.locator('[data-test="firstName"]').fill(users[0].firstName!);
    
    await page.locator('[data-test="lastName"]').fill(users[0].lastName!);

    await page.locator('[data-test="postalCode"]').fill(users[0].postalCode!);

    await page.locator('[data-test="continue"]').click();

    await page.locator('[data-test="finish"]').click();

    await expect(page).toHaveURL(/checkout-complete/);

    await expect(page.getByText('Thank you for your order!')).toBeVisible();
})

