// tests/vitest.setup.ts
import type { Config } from '@testing-library/svelte';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest'; // Import vi for mocking
// JSDOM is handled by vitest environment

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Mock ResizeObserver
window.ResizeObserver = class ResizeObserver { // Changed from global.ResizeObserver
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock SvelteKit's $app/environment for tests that depend on `browser`
vi.mock('$app/environment', () => ({
	browser: true,
	dev: true,
	building: false,
	version: '1.0.0'
}));

// Mock localStorage
const storage: Record<string, string> = {};
Object.defineProperty(window, 'localStorage', {
	value: {
		getItem: (key: string) => storage[key] || null,
		setItem: (key: string, value: string) => {
			storage[key] = value;
		},
		removeItem: (key: string) => {
			delete storage[key];
		},
		clear: () => {
			Object.keys(storage).forEach((key) => delete storage[key]);
		}
	}
});

// Removed global.tick as it's not strictly necessary and causes a TypeScript error
