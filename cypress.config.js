const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'wkh8cz',
  retries: {
    runMode: 1,
    openMode: 1
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "**/*.feature",
    
  },

  env: {
    baseUrl: 'https://demo.opencart.com',
  },
});

