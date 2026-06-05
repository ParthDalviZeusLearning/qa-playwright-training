import {test,expect} from '@playwright/test';
import{ users } from '../test-data/users';

test('TC001:Login Page Loads',async({page})=>{
    //visits the specified URL
    await page.goto('https://www.saucedemo.com/');

    //checks username field is visible 
    await expect(page.locator('[data-test="username"]')).toBeVisible();

    //checks password field  is visible
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    
    //checks login-button is visible
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

});

test('TC002:Login with valid user',async({page})=>{
  
    await page.goto('https://www.saucedemo.com/');
    //fills username in the username field 
    await page.locator('[data-test="username"]').fill(users[0].username);
    //fills password in the password field
    await page.locator('[data-test="password"]').fill(users[0].password);
    //clicks the login button
    await page.locator('[data-test="login-button"]').click();
   

    //checks if clicking the login-button redirects to the inventory page 
    await expect(page).toHaveURL(/inventory/);


});


test('TC003:Invalid Login ',async({page})=>{
   
     
    await page.goto('https://www.saucedemo.com/');

    //fills username in the username field 
    await page.locator('[data-test="username"]').fill('standard_user');
    
     //fills incorrect password in the password field
    await page.locator('[data-test="password"]').fill('secretsauce123');
    
    //clicks the login button
    await page.locator('[data-test="login-button"]').click();
     
    //checks if the error message is displayed to the user
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    
});


test('TC004:Login with locked-user',async({page})=>{
 
     await page.goto("https://www.saucedemo.com/");

     await page.locator('[data-test="username"]').fill('locked_out_user');

     await page.locator('[data-test="password"]').fill('secret_sauce');

     await page.locator('[data-test="login-button"]').click();

     await expect(page.locator('[data-test="error"]')).toContainText('locked out');

});