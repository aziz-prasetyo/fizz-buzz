// tests/vitest.setup.ts
import { config } from '@testing-library/svelte';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest'; // Import vi for mocking
import { JSDOM } from 'jsdom'; // Import JSDOM

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
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

// Global Svelte tick mock if needed for specific test scenarios
// This is typically handled by @testing-library/svelte when using `await tick()`
// and usually not needed to be globally mocked this way.
// It's here for completeness if there's a need to globally control Svelte's reactivity.
global.tick = async () => new Promise((r) => setTimeout(r, 0));
