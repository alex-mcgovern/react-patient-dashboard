// vite.config.ts
/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	test: {
		includeSource: ["src/**/*.{js,ts}", "packages/**/*.{js,ts}"],
	},
});
