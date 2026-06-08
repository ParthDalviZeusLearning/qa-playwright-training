import {test,expect} from "@playwright/test";
import {users} from "../test-data/users";
import { products } from "../test-data/product";


test('TC005:Product list visible after login',async({page})=>{
  
  await page.goto("https://www.saucedemo.com/");

  await page.locator('[data-test="username"]').fill(users[0].username);

  await page.locator('[data-test="password"]').fill(users[0].password);

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('.inventory_item')).toHaveCount(6);

});


