# QA Trainee Assignment-Playwright with TypeScript

# Project Overview

-The repository contains the tasks completed as a part of QA Trainee Training Program using Playwright and TypeScript.

Application Under Test (AUT):
https://www.saucedemo.com

The objective of this assignment is to demonstrate basic QA automation skills, including test case design, Playwright setup, test data management, and automated execution of login-related scenarios.


# Technologies Used

- Playwright
- TypeScript
- Node.js
- Visual Studio Code


# Project Structure

project-root/
|
|--tests/
|       |--cart.spec.ts
|       |--login.spec.ts
|       |--products.spec.ts
|--pages/
|       |--CartPage.ts
|       |--CheckoutPage.ts
|       |--LoginPage.ts
|       |--ProductsPage.ts
|
|--test-data/
|          |--product.ts
|          |--users.ts
|
|--utils/
|          |--testHelpers.ts
|         
|--screenshots
|--playwright.config.ts
|--package.json
|--SauceDemo_TestCases.xlsx
|--DebuggingNote.md
|--DailyProgressLog.md
|--SelfReviewNote.md
|_README.md


# Installation 

1. Clone the repository: 
  git clone <https://github.com/ParthDalviZeusLearning/qa-playwright-training>

2. Navigate to the project folder:
  cd qa-playwright-training

3. Install dependencies: 
 npm install

4. Install Playwright browsers: 
 npx playwright install


# Steps to Run Tests

-Run all tests:

  npx playwright test

-Run a specific test file:

 npx playwright test tests/login.spec.ts

-Run tests in headed mode:

 npx playwright test --headed


# Steps to  View Test Report

Generate and open the HTML report:

npx playwright show-report



# Test Data Management

Test user credentials are maintained in:

test-data
|-users.ts
|_products.ts

This file uses TypeScript interfaces and typed objects to improve maintainability and reusability.

# Page Object Model
The framework was refactored using the Page Object Model design pattern to improve maintainability and reusability.
Implemented Page Classes:
- Login Page
- Products Page
- Cart Page
- Checkout Page

# Reusable Login Helper

A reusable login helper was created to avoid duplicate login steps across test files.

Location: utils/testHelpers.ts

# Test Tags

The following tags are used for test categorization and selective execution:
- @smoke
- @regression
- @negative
- @cart
- @checkout

Example command for selective excution:
npx playwright test --grep @smoke

# Automated Test Coverage

Login 

- TC_001 – Verify that the Login Page loads correctly @smoke
- TC_002 – Verify successful login with valid credentials @smoke
- TC_003 – Verify login fails with an invalid password @negative
- TC_004 – Verify that a locked-out user cannot log in @negative

Products and Cart 

- TC005 - Verify product list should be visible after login @smoke
- TC006 - Verify add one product to cart  @cart @regression
- TC007 - Verify remove product from cart  @cart @regression
- TC008 - Verify add multiple products to cart  @cart @regression
- TC009 - Verify cart page should show selected products  @cart @regression
- TC016 - Verify Product details page is displayed @regression 

Checkout
- TC011 - Verify Checkout with missing first name @negative @checkout
- TC012 - Verify Checkout with missing last name @negative @checkout
- TC013 - Verify Checkout with missing postal code @negative @checkout
- TC014 - Verify Checkout with all fields empty @negative @checkout
- TC015 - Verify complete order successfully @checkout

Total Test Scenarios Automated = 16

