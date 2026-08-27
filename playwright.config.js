const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
    testDir: "./tests",

    timeout: 60000,

    expect: {
        timeout: 8000
    },

    fullyParallel: false,
    workers: 1,

    reporter: "html",

    use: {
        baseURL: "https://cartup.com",
        headless: false,
        screenshot: "on",
        video: "on",
        trace: "on-first-retry"
    },

    projects: [
        {
            name: "chromium",
            use: {
                ...devices["Desktop Chrome"]
            }
        }
    ]
});