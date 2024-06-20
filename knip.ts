import type { KnipConfig } from "knip";

const config: KnipConfig = {
	entry: ["cypress/support/commands.ts", "src/main.tsx", "packages/*/*/index.{tsx,ts}"],
	ignore: ["packages/shared/redux/src/api/schema.ts"],
	ignoreDependencies: ["husky"],
	project: ["src/**/*.{js,jsx,ts,tsx}"],
};

export default config;
