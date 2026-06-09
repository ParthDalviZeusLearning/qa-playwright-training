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



