# cartup-playwright-automation

An **E-commerce Web Automation Testing Project** built using **Playwright with JavaScript**.

This project automates key functionalities of the [Cartup](https://cartup.com/) e-commerce website, including product search and product information verification.


## 🧪 Testing Approach

The following testing techniques and approaches are used in this project:

### Functional Testing
Verify that core e-commerce functionalities work according to the expected behavior.

- Product search
- Product information verification
- Quantity control

### Positive Testing
Verify that the application behaves correctly with valid inputs.

- Search for an existing product
- Verify valid product information

### Negative Testing
Verify that the application handles invalid inputs appropriately.

- Search for a non-existing product
- Verify that no relevant product is returned

### Boundary Value Testing
Verify the minimum and maximum allowed quantity values.

- Minimum quantity: 1
- Maximum quantity: 3
- Verify quantity cannot be reduced below 1
- Verify quantity cannot be increased above 3

### UI Testing
Verify that important user interface elements are displayed and functional.

- Search box
- Product information
- Quantity controls
- Product Details section

### Automation Testing
Automated using Playwright with JavaScript.

- Page Object Model (POM)
- Reusable locators
- Playwright assertions
- Automated test execution
- Screenshots and video recording
- HTML test reporting

  
## 🚀 Technologies Used

* **Playwright**
* **JavaScript**
* **Node.js**
* **Visual Studio Code**
* **Git & GitHub**

## 📌 Test Scenarios

### TC01 - Search Product - Happy Path

**Objective:** Verify that a user can search for a valid product.

**Test Steps:**

1. Open Cartup website.
2. Enter a valid product name in the search box.
3. Perform the search.
4. Verify that the search results are displayed.

---

### TC02 - Search Product - Negative Scenario

**Objective:** Verify the system behavior when searching for an invalid/non-existing product.

**Test Steps:**

1. Open Cartup website.
2. Enter an invalid product name.
3. Perform the search.
4. Verify that no relevant product is found.

---

### TC03 - Verify Product Details

**Objective:** Verify important information displayed on a product details page.

**Test Steps:**

1. Open Cartup website.
2. Select a product.
3. Verify the product name.
4. Verify the product price.
5. Verify the product quantity.
6. Verify the SKU/model information.
7. Verify the Product Details section.

## 📂 Project Structure

```text
Cartup_playwright_automation/
│
├── pages/
│   └── homePage.js
│
├── tests/
│   ├── search.spec.js
│   └── productDetails.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## ▶️ How to Run the Project

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the project

```bash
cd Cartup_playwright_automation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

### 5. Run all tests

```bash
npx playwright test
```

### 6. Run tests in headed mode

If your Playwright configuration does not already use headed mode:

```bash
npx playwright test --headed
```

## 📊 Test Report

After test execution, open the Playwright HTML report using:

```bash
npx playwright show-report
```

## 🎥 Test Evidence

The project is configured to capture test execution evidence such as:

* Screenshots
* Videos
* Playwright HTML reports

Test artifacts are stored locally and are excluded from GitHub using `.gitignore`.

## 🧪 Testing Approach

This project follows basic automation testing practices:

* Page Object Model (POM)
* Reusable page locators
* Positive and negative test scenarios
* Assertions using Playwright `expect`
* Test execution evidence
* Organized test cases

## 🎯 Project Goal

The main goal of this project is to practice and demonstrate practical **Web UI Automation Testing** using Playwright and JavaScript on an e-commerce application.

## 👨‍💻 Author

**Emdad Hossain**

GitHub: [DevEmdad588](https://github.com/DevEmdad588)
