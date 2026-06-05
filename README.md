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
│
├── tests/
│ └── login.spec.ts
│
├── test-data/
│ └── users.ts
│
├── playwright.config.ts
├── package.json
├── README.md
│
└── playwright-report/


# Daily Progress Log 


Day 1: Playwright Setup and Login Automation (05/06/2026)

Objectives Completed:
-Setup Playwright project using TypeScript
-Installed Playwright Browsers
-Created reusable test data file(users.ts)
-Designed function test scenarios for SauceDemo
-Automated Login related Test cases

Automated Scenarios:
- TC_001 – Verify that the Login Page loads correctly
- TC_002 – Verify successful login with valid credentials
- TC_003 – Verify login fails with an invalid password
- TC_004 – Verify that a locked-out user cannot log in

Deliverables:
-Playwright Project Setup
-Login Automation Scripts
-Test Execution
-HTML report generation
-HTML Test Report

# Installation

1. Clone the repository: 
  git clone <https://github.com/ParthDalviZeusLearning/qa-playwright-training>

2. Navigate to the project folder:
  cd qa-playwright-training

3. Install dependencies: 
 npm install

4. Install Playwright browsers: 
 npx playwright install


# Running Tests

-Run all tests:

  npx playwright test

-Run a specific test file:

 npx playwright test tests/login.spec.ts

-Run tests in headed mode:

 npx playwright test --headed


# View Test Report

Generate and open the HTML report:

npx playwright show-report



# Test Data Management

Test user credentials are maintained in:

test-data/users.ts

This file uses TypeScript interfaces and typed objects to improve maintainability and reusability.



