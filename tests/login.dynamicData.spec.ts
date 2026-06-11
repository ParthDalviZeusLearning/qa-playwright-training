import {expect,test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users'

users.forEach((user)=> {
 

 test(`Login Test- ${user.username}`, async({page})=>{


  const loginPage=new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(user.username,user.password);

  if(user.expected === 'success'){
  
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  }
  else{
   await loginPage.verifyErrorMessage(user.errorMessage!);
  }

 });

});
