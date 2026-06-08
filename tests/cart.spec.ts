import {test,expect} from '@playwright/test';
import {users} from "../test-data/users";
import { products } from '../test-data/product';

test.beforeEach(async({page})=>{
  
    await page.goto('https://www.saucedemo.com');

    await page.locator('[data-test="username"]').fill(users[0].username);

    await page.locator('[data-test="password"]').fill(users[0].password);

    await page.locator('[data-test="login-button"]').click();

});

test('TC006:Add one product to cart',async({page})=>{

   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

   await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
});


test('TC007:Remove product from the cart',async({page})=>{

    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
})


