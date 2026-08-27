class HomePage {
    constructor(page) {
        this.page = page;

        // Search elements
        this.searchBox = page.locator("input.p-inputtext");
        this.searchButton = page.getByRole("button", { name: "Search" });

        // Product
        this.product = page.locator(
            'a[href="/product/ven-dens_4_in_1_powerbank_10000mah_with_cable_black_vd-pb058_1786003737634_a1j67y"]'
        );
    }

    async openWebsite() {
        await this.page.goto("/");
    }

    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async clickProduct() {
        await this.product.click();
    }
}

module.exports = HomePage;