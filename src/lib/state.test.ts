import { describe, expect, it, beforeEach } from 'vitest';
import { gameState, GameState } from './state.svelte';
import { tick } from 'svelte';

describe('GameState logic', () => {
	beforeEach(() => {
		gameState.clearHistory();
	});

	it('should start with level 1 and 0 XP', () => {
		expect(gameState.xp).toBe(0);
		expect(gameState.level).toBe(1);
	});

	it('should accumulate XP', () => {
		gameState.addXp(500);
		expect(gameState.xp).toBe(500);
	});

	it('should increase level every 1000 XP', async () => {
		gameState.addXp(1000);
		await tick();
		expect(gameState.level).toBe(2);

		gameState.addXp(1000);
		await tick();
		expect(gameState.level).toBe(3);
	});

	it('should unlock achievements', () => {
		gameState.unlockAchievement('first_win');
		expect(gameState.achievements).toContain('first_win');
	});

	it('should not unlock duplicate achievements', () => {
		gameState.unlockAchievement('first_win');
		gameState.unlockAchievement('first_win');
		expect(gameState.achievements.length).toBe(1);
	});

	it('should calculate XP progress', async () => {
		gameState.addXp(500);
		await tick();
		expect(gameState.xpProgress).toBe(50); // 500/1000
	});

	it('should track loading state during hydration', async () => {
		const state = new GameState();
		// Should be loading initially
		expect(state.loading).toBe(true);

		// Wait for the hydration effect to complete
		await tick();
		await tick();

		// Should not be loading after hydration
		expect(state.loading).toBe(false);
	});

	it('should clear history and reset state', async () => {
		gameState.addGame(100);
		gameState.unlockAchievement('test');
		await tick();
		
		expect(gameState.history.length).toBe(1);
		expect(gameState.highScore).toBe(100);
		expect(gameState.xp).toBe(1000);
		expect(gameState.achievements).toContain('test');

		gameState.clearHistory();
		await tick();
		
		expect(gameState.history.length).toBe(0);
		expect(gameState.highScore).toBe(0);
		expect(gameState.xp).toBe(0);
		expect(gameState.achievements.length).toBe(0);
		expect(gameState.notificationQueue.length).toBe(0);
	});
});
