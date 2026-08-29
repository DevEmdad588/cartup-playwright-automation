class ProductPage {
    constructor(page) {
        this.page = page;

        this.productName = page.locator(
            "h1",
            { hasText: "VEN-DENS 4 in 1 POWERBANK 10000MAH WITH CABLE BLACK VD-PB058" }
        );

        this.price = page.locator("span.text-highlight").first();

        this.quantity = page.locator('input[name="quantity"]');

        this.sku = page.getByText(/SKU:/);

        this.productDetails = page.locator("#details");

        // Quantity
        this.quantityInput = page.locator('input[name="quantity"]');

        this.quantityContainer = page.locator('label[for="quantity"]');

        this.decreaseButton = this.quantityContainer.locator("svg").nth(0);

        this.increaseButton = this.quantityContainer.locator("svg").nth(1);
    }

    async increaseQuantity() {
        await this.increaseButton.click();
    }

    async decreaseQuantity() {
        await this.decreaseButton.click();
    }
}

module.exports = ProductPage;