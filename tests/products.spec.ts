import {test,expect} from "@playwright/test";
import {users} from "../test-data/users";
import { products } from "../test-data/product";
import {ProductsPage} from "../pages/ProductsPage";
import { loginAsStandardUser } from "../utils/testHelpers";

test.beforeEach(async ({page}) => {

 await loginAsStandardUser(page);

});


test('TC005:Product list visible after login',async({page})=>{
  /*
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill(users[0].username);
  await page.locator('[data-test="password"]').fill(users[0].password);
  await page.locator('[data-test="login-button"]').click();
  //Checks the product list displays 6 items after 
  await expect(page.locator('.inventory_item')).toHaveCount(6);*/

  const productsPage=new ProductsPage(page);
  await productsPage.verifyProductsPageVisible();

});


test('TC016:Product page is displayed',async({page})=>{
  /*
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill(users[0].username);
  await page.locator('[data-test="password"]').fill(users[0].password);
  await page.locator('[data-test="login-button"]').click();
  */
  await page.getByText(products[0].name).click(); 
  await expect(page).toHaveURL(/inventory-item/);
  await expect(page.getByText(products[0].name)).toBeVisible();
});