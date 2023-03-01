const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wkh8cz',
  retries: {
    runMode: 1,
    openMode: 1
  },
  
  testFiles: "**/.feature",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },

  env: {
    baseUrl: 'https://demo.opencart.com',
  },
});

