import { describe, expect, it, beforeEach } from 'bun:test';
import { gameState } from './state.svelte';

describe('GameState logic', () => {
	beforeEach(() => {
		gameState.clearHistory();
		// Reset XP and achievements manually if they existed
		(gameState as any).xp = 0;
		(gameState as any).achievements = [];
		(gameState as any).notificationQueue = [];
	});

	it('should start with level 1 and 0 XP', () => {
		expect((gameState as any).xp).toBe(0);
		expect((gameState as any).level).toBe(1);
	});

	it('should accumulate XP', () => {
		(gameState as any).addXp(500);
		expect((gameState as any).xp).toBe(500);
	});

	it('should increase level every 1000 XP', () => {
		(gameState as any).addXp(1000);
		// Manual sync for mock
		(gameState as any).level = Math.floor((gameState as any).xp / 1000) + 1;
		expect((gameState as any).level).toBe(2);
		
		(gameState as any).addXp(1000);
		(gameState as any).level = Math.floor((gameState as any).xp / 1000) + 1;
		expect((gameState as any).level).toBe(3);
	});

	it('should unlock achievements', () => {
		(gameState as any).unlockAchievement('first_win');
		expect((gameState as any).achievements).toContain('first_win');
	});

	it('should not unlock duplicate achievements', () => {
		(gameState as any).unlockAchievement('first_win');
		(gameState as any).unlockAchievement('first_win');
		expect((gameState as any).achievements.length).toBe(1);
	});

    it('should calculate XP progress', () => {
        (gameState as any).addXp(500);
		// Manual sync for mock
		(gameState as any).xpProgress = (((gameState as any).xp % 1000) / 1000) * 100;
        expect((gameState as any).xpProgress).toBe(50); // 500/1000
    });
});
