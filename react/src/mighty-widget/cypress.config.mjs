import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "src/__tests__/cypress/**/*.{js,jsx,ts,tsx}",
    supportFile: "src/__tests__/cypress/support/e2e.ts",
    videosFolder: "src/__tests__/cypress/videos",
    screenshotsFolder: "src/__tests__/cypress/screenshots",
    fixturesFolder: "src/__tests__/__fixtures__",
  },
});
