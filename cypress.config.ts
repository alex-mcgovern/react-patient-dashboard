import { defineConfig } from "cypress";

import "dotenv/config";

export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:3000/",
		excludeSpecPattern: ["*/*/**/_*.cy.ts"],
		retries: {
			runMode: 3,
		},
		screenshotOnRunFailure: false,
		trashAssetsBeforeRuns: true,
		video: false,
	},
	env: {
		CYPRESS_BASE_URL: "http://localhost:3000/",
		VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
	},
});
