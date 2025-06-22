const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost',
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
            on('before:browser:launch', (browser = {}, launchOptions) => {
                if (browser.name === 'chrome' || browser.name === 'edge') {
                    launchOptions.args.push('--disable-features=Worklet,ServiceWorker');
                }

                return launchOptions;
            });
        },
        specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
    },
    viewportWidth: 375, // iPhone 6/7/8 宽度
    viewportHeight: 667, // iPhone 6/7/8 高度
});
