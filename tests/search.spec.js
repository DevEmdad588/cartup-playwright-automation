const { test, expect } = require("@playwright/test");

const HomePage = require("../pages/homePage");

test("TC01 - Search Product - Happy Path", async ({ page }) => {

    const homePage = new HomePage(page);

    console.log("Step 1: Open Cartup website");

    await homePage.openWebsite();

    console.log("Step 2: Search for a product");

    await homePage.searchProduct("laptop");

    console.log("Step 3: Verify search results page");

    await expect(page).toHaveURL(/search/);

});

test("TC02 - Search Product - Negative Scenario", async ({ page }) => {

    const homePage = new HomePage(page);

    console.log("Step 1: Open Cartup website");

    await homePage.openWebsite();

    console.log("Step 2: Search for an invalid product");

    await homePage.searchProduct("xyzabc123456789");

    console.log("Step 3: Verify no relevant product is found");

    // We will add the exact no-result assertion after checking Cartup's response.
});