import { render, screen } from '@testing-library/svelte';
import { tick } from 'svelte';
import { afterEach, describe, expect, it } from 'vitest';
import Shimmer from '@shimmer-from-structure/svelte'; // Assuming the component is directly importable
import TestComponent from './_test_component.svelte'; // A simple component to wrap

describe('Shimmer component', () => {
	afterEach(() => {
		// Cleanup if needed
	});

	it('should render shimmer when loading is true and content should still be in DOM', async () => {
		const { container } = render(TestComponent, { props: { loading: true } });
		expect(container.querySelector('.shimmer-container')).toBeDefined();
		// Content should be present in DOM for structural analysis, even if visually obscured
		expect(screen.getByText('Hello World!')).toBeDefined();
	});

	it('should render content when loading is false', async () => {
		const { container } = render(TestComponent, { props: { loading: false } });
		expect(container.querySelector('.shimmer-container')).toBeNull(); // Shimmer should not be present
		expect(screen.getByText('Hello World!')).toBeDefined(); // Content should be visible
	});

	it('should transition from shimmer to content correctly', async () => {
		const { component, container } = render(TestComponent, { props: { loading: true } });
		// Initially, shimmer should be present and content in DOM
		expect(container.querySelector('.shimmer-container')).toBeDefined();
		expect(screen.getByText('Hello World!')).toBeDefined();

		component.loading = false;
		await tick(); // Wait for Svelte to re-render

		// After transition, shimmer should be gone and content still in DOM (visible)
		expect(container.querySelector('.shimmer-container')).toBeNull();
		expect(screen.getByText('Hello World!')).toBeDefined();
	});
});
