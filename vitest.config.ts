import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	test: {
		environment: 'jsdom',
		setupFiles: [resolve(__dirname, 'tests/vitest.setup.ts')],
		include: ['src/**/*.{test,spec}.ts', 'src/**/*.{test,spec}.js'],
		// No exclusions needed, all tests should run in Vitest
	}
});
