# 🧪 flake-check
 
 **flake-check** is a lightweight CLI tool that scans your JavaScript-based E2E test files for common flaky patterns and code quality issues.
 
 Built for **TestCafe**, **Cypress**, **Playwright**, **WebdriverIO**, or any custom JavaScript E2E framework.
 
 🚀 What is it?
 flake-check scans your end-to-end (E2E) test files and flags common flaky test patterns that often lead to unreliability, slow builds, and false positives.
 
 It works with popular testing frameworks like Cypress, Playwright, TestCafe, and WebdriverIO.
 
 ✅ What it checks for (rules):
 noHardcodedWait – flags wait(1000) or timeout: 5000 style patterns
 
 noDebug – finds leftover debugger, console.log, pause, etc.
 
 fragileSelectors – warns about selectors that might easily break (e.g., using .nth() or overly specific DOM paths)
 
 vagueNames – detects vague variable/test names like foo, data, temp, checkSomething
 
 (More rules can be added – it's modular 🔌)
 
 ---
 
 ## ✨ Features
 
 - Detects common E2E automation anti-patterns:
   - 🚫 Debug statements (`console.log`, `debugger`)
   - 💤 Hardcoded waits like `t.wait(5000)` or `setTimeout(...)`
   - 🧵 Fragile CSS selectors (`nth-child`, etc.)
   - ❓ Vague test names or variable names
 - ⚙️ Works with any JavaScript E2E test files
 - 🧩 Extensible: easily add your own custom rules
 
 ---
 
 ## 📦 Installation
 ```
🔧 Install globally
npm install -g flake-check
Then run it from anywhere:

flake-check "tests/**/*.js" -v
⚡ Or run with npx (no install needed)

npx flake-check "tests/**/*.js" -v

🎯 Examples
flake-check "cypress/e2e/**/*.cy.js" -v
flake-check "playwright/tests/*.spec.js" -v
Use -v for verbose output.
```

 ## Author
This project was created and maintained by **[Chinmay](https://github.com/Mchinmay)**.

 

