import {defineConfig} from "cypress";

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    retries: 0,
    setupNodeEvents(on, config) {
      // modify config values examples
      // config.defaultCommandTimeout = 20000

      // IMPORTANT return the updated config object
      return config;
    },

    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quiet: true,
        overwrite: false,
        html: false,
        json: true,
      },
    },
  },
});
