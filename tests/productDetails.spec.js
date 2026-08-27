const { test, expect } = require("@playwright/test");

const HomePage = require("../pages/homePage");
const ProductPage = require("../pages/productPage");

test("TC03 - Verify Product Details", async ({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    console.log("Step 1: Open Cartup website");

    await homePage.openWebsite();

    console.log("Step 2: Click on the product");

    await homePage.clickProduct();

    console.log("Step 3: Verify product name");

    await expect(productPage.productName).toHaveText(
        "VEN-DENS 4 in 1 POWERBANK 10000MAH WITH CABLE BLACK VD-PB058"
    );

    console.log("Step 4: Verify product price");

    await expect(productPage.price).toHaveText("৳ 479");

    console.log("Step 5: Verify product quantity");

    await expect(productPage.quantity).toHaveValue("1");

    console.log("Step 6: Verify product SKU");

    await expect(productPage.sku).toContainText(
        "CU-2560453-4296047"
    );

    console.log("Step 7: Verify product details");

    await expect(productPage.productDetails).toBeVisible();

});