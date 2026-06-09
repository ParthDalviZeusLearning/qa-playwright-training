import {test,expect} from '@playwright/test';
import{ users } from '../test-data/users';
import {LoginPage} from '../pages/LoginPage';


test.beforeEach(async({page})=>{

    const loginPage= new LoginPage(page);
    await loginPage.goto();
});

test('TC001:Login Page Loads @smoke',async({page})=>{
    /*
    //visits the specified URL
    await page.goto('https://www.saucedemo.com/');
    //checks username field is visible 
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    //checks password field  is visible
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    //checks login-button is visible
    await expect(page.locator('[data-test="login-button"]')).toBeVisible(); */

    const loginPage= new LoginPage(page);
    await loginPage.verifyLoginPageisVisible();

});

test('TC002:Login with valid user @smoke',async({page})=>{
    
    /*
    //visits the specified URL
    await page.goto('https://www.saucedemo.com/');
    //fills username in the username field 
    await page.locator('[data-test="username"]').fill(users[0].username);
    //fills password in the password field
    await page.locator('[data-test="password"]').fill(users[0].password);
    //clicks the login button
    await page.locator('[data-test="login-button"]').click();*/

    const loginPage= new LoginPage(page);
    await loginPage.login(users[0].username,users[0].password);
    //checks if clicking the login-button redirects to the inventory page 
    await expect(page).toHaveURL(/inventory/);


});


test('TC003:Invalid Login @negative',async({page})=>{
   /*
   //visits the specified URL
    await page.goto('https://www.saucedemo.com/');
    //fills username in the username field 
    await page.locator('[data-test="username"]').fill('standard_user');
     //fills incorrect password in the password field
    await page.locator('[data-test="password"]').fill('secretsauce123');
    //clicks the login button
    await page.locator('[data-test="login-button"]').click();
    //checks if the error message is displayed to the user
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    
    */

     const loginPage= new LoginPage(page);
     await loginPage.login(users[0].username,'secretsauce123');
     await loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    
});


test('TC004:Login with locked-user @negative S',async({page})=>{
    /*
    //visits the specified URL
     await page.goto("https://www.saucedemo.com/");
    //fills locked-out username in the username field 
     await page.locator('[data-test="username"]').fill('locked_out_user');
     //fills incorrect password in the password field
     await page.locator('[data-test="password"]').fill('secret_sauce');
    //clicks the login button
     await page.locator('[data-test="login-button"]').click();
    //checks if the error message is displayed to the user
     await expect(page.locator('[data-test="error"]')).t1oContainText('locked out');
     */

     const loginPage=new LoginPage(page);
     await loginPage.login(users[1].username,users[1].password);
     await loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out');

});



