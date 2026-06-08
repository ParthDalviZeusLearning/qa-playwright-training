import {test,expect} from "@playwright/test";
import {users} from "../test-data/users";
import { products } from "../test-data/product";


test('TC005:Product list visible after login',async({page})=>{
  
  await page.goto("https://www.saucedemo.com/");

  await page.locator('[data-test="username"]').fill(users[0].username);

  await page.locator('[data-test="password"]').fill(users[0].password);

  await page.locator('[data-test="login-button"]').click();
  
  //Checks the product list displays 6 items after 
  await expect(page.locator('.inventory_item')).toHaveCount(6);

});


test('TC016:Product page is displaye',async({page})=>{
  
  await page.goto("https://www.saucedemo.com/");

  await page.locator('[data-test="username"]').fill(users[0].username);

  await page.locator('[data-test="password"]').fill(users[0].password);

  await page.locator('[data-test="login-button"]').click();

  await page.getByText(products[0].name).click();

  await expect(page).toHaveURL(/inventory-item/);
  
  await expect(page.getByText(products[0].name)).toBeVisible();
});