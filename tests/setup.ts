/* eslint-disable @typescript-eslint/no-explicit-any */
import { mock } from 'bun:test';
import { JSDOM } from 'jsdom'; // Changed to jsdom

const dom = new JSDOM();
global.window = dom.window as any;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.CustomEvent = dom.window.CustomEvent;
global.MouseEvent = dom.window.MouseEvent;
global.KeyboardEvent = dom.window.KeyboardEvent;
global.Event = dom.window.Event;
global.Node = dom.window.Node;

mock.module('$app/navigation', () => ({
	goto: () => {}
}));

mock.module('$app/paths', () => ({
	resolve: (path: string) => path
}));

mock.module('$app/environment', () => ({
	browser: true,
	dev: true,
	building: false,
	version: '1.0.0'
}));

// Mock Svelte 5 runes
(globalThis as any).$state = (v: any) => v;
(globalThis as any).$derived = (v: any) => {
	if (typeof v === 'function') return v();
	return v;
};
(globalThis as any).$effect = () => {};
(globalThis as any).$effect.root = (cb: any) => cb();
(globalThis as any).$props = () => ({});

// Mock localStorage
const storage: Record<string, string> = {};
(globalThis as any).localStorage = {
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
};
