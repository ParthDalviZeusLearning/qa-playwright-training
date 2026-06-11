import {expect,test} from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { LoginPage } from '../pages/LoginPage';
import { products } from '../test-data/product';
import { users } from '../test-data/users'


products.forEach((product)=>{


    test(`Add Product- ${product.name}`,async({page}) => {
    

        const loginPage=new LoginPage(page);
        const productsPage=new ProductsPage(page);

        await loginPage.goto();

        await loginPage.login(users[0].username,users[0].password);

        await productsPage.addProductToCart(product.name);
        console.log(products);
        console.log(products.expectedCartCount);
        await productsPage.verifyCartCount(product.expectedCartCount);

    });
});