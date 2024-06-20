/* eslint-disable @typescript-eslint/consistent-type-definitions -- usually prefer types, but for this sort of module augmentation, interfaces are required */
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
