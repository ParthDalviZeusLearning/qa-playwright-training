
import{Page,Locator,expect} from '@playwright/test';

//Create Page Object Class for Cart Page that is reusable

export class CartPage{

    readonly page: Page;
    readonly checkoutButton:Locator;
    readonly continueShoppingButton:Locator;
    
   //creates a constructor that initialises the page and the locator
    constructor(page:Page){

    this.page=page;
    this.checkoutButton=page.locator('[data-test="checkout"]');
    this.continueShoppingButton=page.locator('[data-test="continue-shopping" ]');

    }

    //method to verify products added are displayed in the cart 
    async verifyProductInCart(productName:string): Promise<void>{

      await expect(this.page.getByText(productName)).toBeVisible();
    }
   
    //method to remove product from the cart
    async removeProduct(productName: string): Promise<void>{

        const productId=productName.toLowerCase().replace('','-');
        await this.page.locator('[data-test="remove-${productId}"]').click();
    }
    
    //method that clicks 'Continue Shopping' Button
    async continueShopping(): Promise<void> {
        await this.continueShoppingButton.click();
    }
   
    //method to click 'Checkout' Button 
   async checkout(): Promise<void> {
       await this.checkoutButton.click();
   }

}