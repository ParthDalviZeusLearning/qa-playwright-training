# Daily Progress Log 


Day 1: Playwright Setup and Login Automation (05/06/2026)

Objectives Completed:
-Setup Playwright project using TypeScript
-Installed Playwright Browsers
-Created reusable test data file(users.ts)
-Designed function test scenarios for SauceDemo
-Automated Login related Test cases

Automated Scenarios:
- TC_001 – Verify that the Login Page loads correctly @smoke
- TC_002 – Verify successful login with valid credentials @smoke
- TC_003 – Verify login fails with an invalid password @negative
- TC_004 – Verify that a locked-out user cannot log in @negative

Deliverables:
-Playwright Project Setup
-Login Automation Scripts 
-Test Execution
-HTML report generation 
-HTML Test Report 

Day 2: Functional Automation + Assertions + Debugging

Objectives Completed:
-Automated Product and Cart Test Cases 
-Automated Checkout Test cases
-Added Assertions for Product,Cart and Checkout validations
-Created reusable test data files(products.ts)
-Performed Debugging and prepared Debugging Note
-Generated and Reviewed Playwright HTML reports

Automated Scenarios: 
- TC005 - Verify product list should be visible after login @smoke
- TC006 - Verify add one product to cart  @cart @regression
- TC007 - Verify remove product from cart  @cart @regression
- TC008 - Verify add multiple products to cart  @cart @regression
- TC009 - Verify cart page should show selected products  @cart @regression
- TC010 - Verify Checkout with valid details  @checkout 
- TC011 - Verify Checkout with missing first name @negative @checkout
- TC012 - Verify Checkout with missing last name @negative @checkout
- TC013 - Verify Checkout with missing postal code @negative @checkout
- TC014 - Verify Checkout with all fields empty @negative @checkout
- TC015 - Verify complete order successfully @checkout
- TC016 - Verify Product details page is displayed @regression 

Day 3: Page Object Model + Final Framework Structure


Objectives Completed : 
-Created Page Object Class Files with TypeScript classes and constructors
  -pages/LoginPage.ts 
  -pages/ProductsPage.ts 
  -pages/CartPage.ts 
  -pages/CheckoutPage.ts 
-Refactored repeated code
-Use typed method parameters
-Organized automation code properly
-Added test tags
-Prepared final submission