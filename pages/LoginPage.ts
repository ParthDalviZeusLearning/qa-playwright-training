//Imports playwright objects
import {Page,Locator,expect } from '@playwright/test';

//Create Page Object Class for Login Page that is reusable

export class LoginPage{
      
      readonly page: Page;
      readonly usernameInput: Locator;
      readonly passwordInput: Locator;
      readonly loginButton: Locator;
      readonly errorMessage: Locator;
     
      //creates a constructor(runs automatically when object is created )
      constructor(page: Page){
        //stores browser page in current class
        this.page=page;
        
       // initializes locators 
        this.usernameInput= page.locator('[data-test="username"]');
        this.passwordInput=page.locator('[data-test="password"]');
        this.loginButton=page.locator('[data-test="login-button"]');
        this.errorMessage=page.locator('[data-test ="error"]');

      }

       //method to navigate to the login page
        async goto(): Promise<void> { 
        await this.page.goto('https://www.saucedemo.com/'); 
         }
   
        
        //method to enter user details and login
        async login(username:string,password:string): Promise<void>{

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

        }
        
        //method to verify the login page is visible 
        async verifyLoginPageisVisible(): Promise<void>{

        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        }
       
        //method to verify appropriate error message is displayed 
        async verifyErrorMessage(expectedMessage:string): Promise<void>{

        await expect(this.errorMessage).toContainText(expectedMessage);
        }


        
        
}

