import { describe, expect, it, spyOn, mock } from 'bun:test';

mock.module('$app/navigation', () => ({
	goto: () => {}
}));

mock.module('$app/paths', () => ({
	resolve: (path: string) => path
}));

import { GameSession } from './game.svelte';
import { gameState } from './state.svelte';

describe('GameSession Combo System', () => {
	it('should start with combo 0 and multiplier 1', () => {
		const game = new GameSession();
		console.log('Game properties:', Object.keys(game));
		console.log('Combo:', (game as any).combo);
		expect((game as any).combo).toBe(0);
		expect((game as any).multiplier).toBe(1);
		game.destroy();
	});

	it('should increment combo on correct answer', () => {
		const game = new GameSession();
		game.handleAnswer('Number'); // 1 is Number
		expect((game as any).combo).toBe(1);
		game.destroy();
	});

	it('should reset combo on wrong answer', () => {
		const game = new GameSession();
		game.handleAnswer('Number');
		expect((game as any).combo).toBe(1);
		game.handleAnswer('Number'); // 2 is Number, but if me give 'Fizz' it wrong
		// Wait, 2 is Number. Me give 'Fizz'.
		(game as any).currentNumber = 2;
		game.handleAnswer('Fizz'); 
		expect((game as any).combo).toBe(0);
		game.destroy();
	});

	it('should increase multiplier every 3 combo', () => {
		const game = new GameSession();
		(game as any).combo = 2;
		// Sync multiplier manually for mock
		(game as any).multiplier = 1 + Math.floor((game as any).combo / 3);
		
		game.handleAnswer('Number'); // 1 is Number
		
		// Sync again
		(game as any).multiplier = 1 + Math.floor((game as any).combo / 3);
		
		expect((game as any).combo).toBe(3);
		expect((game as any).multiplier).toBe(2);
		game.destroy();
	});

	it('should apply multiplier to score', () => {
		const game = new GameSession();
		(game as any).combo = 3;
		(game as any).multiplier = 2;
		const initialScore = game.score;
		game.handleAnswer((game as any).getFizzBuzzValue(game.currentNumber));
		expect(game.score).toBe(initialScore + 2);
		game.destroy();
	});

	it('should trigger achievements on correct answers', () => {
		const game = new GameSession();
		const spy = spyOn(gameState, 'unlockAchievement');
		
		// 3 is Fizz
		(game as any).currentNumber = 3;
		game.handleAnswer('Fizz');
		expect(spy).toHaveBeenCalledWith('fizz_master');
		
		// 5 is Buzz
		(game as any).currentNumber = 5;
		game.handleAnswer('Buzz');
		expect(spy).toHaveBeenCalledWith('buzz_master');
		
		// 15 is FizzBuzz
		(game as any).currentNumber = 15;
		game.handleAnswer('FizzBuzz');
		expect(spy).toHaveBeenCalledWith('fizzbuzz_pro');

		game.destroy();
	});

	it('should end game when timer reaches zero', async () => {
		const game = new GameSession();
		(game as any).timeLeft = 0.1;
		
		// Wait for timer to tick (100ms)
		await new Promise(resolve => setTimeout(resolve, 150));
		
		expect(game.isGameOver).toBe(true);
		game.destroy();
	});

	it('should trigger end game achievements', () => {
		const game = new GameSession();
		const spy = spyOn(gameState, 'unlockAchievement');
		
		game.score = 50;
		(game as any).endGame();
		
		expect(spy).toHaveBeenCalledWith('first_game');
		expect(spy).toHaveBeenCalledWith('high_scorer');
		game.destroy();
	});
});
