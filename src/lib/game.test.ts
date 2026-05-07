import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { GameSession } from './game.svelte';
import { gameState } from './state.svelte';

vi.mock('$app/navigation', () => ({
	goto: vi.fn()
}));

vi.mock('$app/paths', () => ({
	resolve: vi.fn((path) => path)
}));

describe('GameSession Combo System', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.restoreAllMocks();
		vi.useRealTimers();
	});

	it('should start with combo 0 and multiplier 1', () => {
		const game = new GameSession();
		expect(game.combo).toBe(0);
		expect(game.multiplier).toBe(1);
		game.destroy();
	});

	it('should increment combo on correct answer', () => {
		const game = new GameSession();
		game.handleAnswer('Number'); // 1 is Number
		expect(game.combo).toBe(1);
		game.destroy();
	});

	it('should reset combo on wrong answer', () => {
		const game = new GameSession();
		game.handleAnswer('Number');
		expect(game.combo).toBe(1);

		game.currentNumber = 2; // 2 is Number
		game.handleAnswer('Fizz'); // Wrong answer
		expect(game.combo).toBe(0);
		game.destroy();
	});

	it('should increase multiplier every 3 combo', () => {
		const game = new GameSession();
		game.combo = 2;
		// 1 is Number
		game.currentNumber = 1;
		game.handleAnswer('Number');

		expect(game.combo).toBe(3);
		expect(game.multiplier).toBe(2);
		game.destroy();
	});

	it('should apply multiplier to score', () => {
		const game = new GameSession();
		game.combo = 3;
		const initialScore = game.score;

		game.currentNumber = 1; // 1 is Number
		game.handleAnswer('Number');

		expect(game.score).toBe(initialScore + 2);
		game.destroy();
	});

	it('should trigger achievements on correct answers', () => {
		const game = new GameSession();
		const spy = vi.spyOn(gameState, 'unlockAchievement');

		// 3 is Fizz
		game.currentNumber = 3;
		game.handleAnswer('Fizz');
		expect(spy).toHaveBeenCalledWith('fizz_master');

		// 5 is Buzz
		game.currentNumber = 5;
		game.handleAnswer('Buzz');
		expect(spy).toHaveBeenCalledWith('buzz_master');

		// 15 is FizzBuzz
		game.currentNumber = 15;
		game.handleAnswer('FizzBuzz');
		expect(spy).toHaveBeenCalledWith('fizzbuzz_pro');

		game.destroy();
	});

	it('should end game when timer reaches zero', async () => {
		const game = new GameSession();
		game.timeLeft = 0.1;

		vi.advanceTimersByTime(150);

		expect(game.isGameOver).toBe(true);
		game.destroy();
	});

	it('should trigger end game achievements', () => {
		const game = new GameSession();
		const spy = vi.spyOn(gameState, 'unlockAchievement');

		game.score = 50;
		// @ts-ignore - accessing private method for test
		game.endGame();

		expect(spy).toHaveBeenCalledWith('first_game');
		expect(spy).toHaveBeenCalledWith('high_scorer');
		game.destroy();
	});
});
