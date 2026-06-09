import { Page } from '@playwright/test'; 
import { LoginPage } from '../pages/LoginPage'; 

//Can be exported to eliminate the need to write login function repeatedly 
export async function loginAsStandardUser(page: Page): Promise<void> { 
  const loginPage = new LoginPage(page); 
 
  await loginPage.goto(); 
  await loginPage.login('standard_user', 'secret_sauce'); 
} 