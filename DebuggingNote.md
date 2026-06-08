# DEBUGGING NOTE

# Failed Test : 
TC_009-Cart Page should show Selected +roducts

# Expected Result : 
The product added in the Inventory page should be reflected in the Cart Page 

# How I Investigated:

1.Executed the test in the headed mode.
2.Reviewed the PlaywrightHTML Report to identify the exact failure step.
3.Read the failure logs carefully.
4.Identified the root cause - The product name used in the assertion did not exactly match the product name displayed on the cart   page, which caused the verification to fail.

# Tools used: 
-Playwright HTML Report
-VS Code Debug Console

# Fix Applied:
Updated the test to use product name from '/test-data/product.ts' file instead of using a hardcoded value.

# Learning:
Using centralised test data reduces maintainance effort and prevents failures caused by hardcoded values.

# Final Status:
Issue resolved and test passed successfully after updating the test-data reference