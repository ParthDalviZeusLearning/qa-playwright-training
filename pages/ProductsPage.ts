
import{Page,Locator,expect} from '@playwright/test';

//Create Page Object Class for Products page  that is reusable

export class ProductsPage{
   //declare variables 
    readonly page: Page;
    readonly inventoryItems:Locator;
    readonly cartBadge:Locator;
    readonly cartLink:Locator;

   //creates a constructor that initialises the page and the locator
    constructor(page:Page){

    this.page=page;
    this.inventoryItems= page.locator('[data-test="inventory-item"]');
    this.cartBadge=page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink=page.locator('[data-test="shopping-cart-link"]');
    }
  

   //method to verify product page is visible
   async verifyProductsPageVisible(): Promise<void> {
    await expect(this.inventoryItems).toHaveCount(6);
   }
   

   //method to provide reusable add to cart functionality
   async addProductToCart(productName:string): Promise<void>{

    const productId=productName.toLowerCase().replaceAll(' ','-');
    await this.page.locator(`[data-test="add-to-cart-${productId}"]`).click();

   }

   //method to provide reusable remove from cart functionality
   async removeProductFromCart(productName:string): Promise<void>{

    const productId=productName.toLowerCase().replaceAll(' ','-');
    await this.page.locator(`[data-test="remove-${productId}"]`).click();
   }
   
   //method that verifies cart count is as expected 
   async verifyCartCount(expectedCount:number): Promise<void>{
   
    await expect(this.cartBadge).toContainText(expectedCount.toString());
   }

   
   async goToCart(): Promise<void> {
      await this.cartLink.click();
   }
}