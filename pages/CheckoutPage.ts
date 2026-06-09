import {Page,Locator,expect} from '@playwright/test';

//Create Page Object Class for Checkout Page that is reusable

export class CheckoutPage{
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator; 
    readonly postalCodeInput: Locator; 
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly errorMessage: Locator;
   
    //creates a constructor that initialises the page and the locator
    constructor(page: Page){

    this.page=page;
    this.firstNameInput=page.locator('[data-test="firstName"]');
    this.lastNameInput=page.locator('[data-test="lastName"]');
    this.postalCodeInput=page.locator('[data-test="postalCode"]');
    this.continueButton=page.locator('[data-test="continue"]');
    this.finishButton=page.locator('[data-test="finish"]');
    this.errorMessage=page.locator('[data-test="error"]');
    }
 
    //method to fill checkout details
    async fillCheckoutDetails(firstName:string, lastName:string, postalCode:string): Promise<void>{

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);


    }

    //method to click 'Continue' Button
    async continueCheckout(): Promise<void> {
     await this.continueButton.click();
    }

     //method to verify appropriate error message is displayed 
    async verifyValidationError(expectedMessage: string): Promise<void> {
    
     await expect(this.errorMessage).toContainText(expectedMessage);
    }


    //method to click 'Finish' Button
    async finishOrder(): Promise<void> {
        await this.finishButton.click();
    }
   
   //method to verify order confirmation message is displayed 
    async verifyOrderConfirmation(): Promise <void>{

     await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
    }
    


    
    }


