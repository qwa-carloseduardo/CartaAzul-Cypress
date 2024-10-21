const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'oawv5j',
  e2e: {
    chromeWebSecurity: false, 
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-web-security');
          launchOptions.args.push('--allow-running-insecure-content');
        }
        return launchOptions;
      });
    },
  },
});
