/// <reference types="cypress" />

declare namespace Cypress {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Cypress {
		env(key: "CYPRESS_BASE_URL"): string;
	}
}
