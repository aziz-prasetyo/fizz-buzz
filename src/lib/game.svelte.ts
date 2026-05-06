import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { gameState } from './state.svelte';

export type Answer = 'Number' | 'Fizz' | 'Buzz' | 'FizzBuzz';

export class GameSession {
	currentNumber = $state(1);
	score = $state(0);
	combo = $state(0);
	multiplier = $derived(1 + Math.floor(this.combo / 3));
	timeLeft = $state(10);
	isGameOver = $state(false);
	feedback = $state<'correct' | 'wrong' | null>(null);
	progress = $derived((this.timeLeft / 10) * 100);

	private interval: ReturnType<typeof setInterval> | null = null;
	private INITIAL_TIME = 10;
	private PENALTY = 2;

	constructor() {
		if (typeof setInterval !== 'undefined') {
			this.startTimer();
		}
	}

	private startTimer() {
		this.interval = setInterval(() => {
			if (this.isGameOver) return;
			this.timeLeft -= 0.1;
			if (this.timeLeft <= 0) {
				this.timeLeft = 0;
				this.endGame();
			}
		}, 100);
	}

	destroy() {
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = null;
		}
	}

	private getFizzBuzzValue(n: number) {
		if (n % 15 === 0) return 'FizzBuzz';
		if (n % 3 === 0) return 'Fizz';
		if (n % 5 === 0) return 'Buzz';
		return 'Number';
	}

	handleAnswer(answer: Answer) {
		if (this.isGameOver) return;

		const correctValue = this.getFizzBuzzValue(this.currentNumber);

		if (answer === correctValue) {
			this.score += this.multiplier;
			this.combo++;
			this.currentNumber++;
			this.timeLeft = this.INITIAL_TIME;
			this.showFeedback('correct');

			// Trigger achievements
			if (correctValue === 'Fizz') gameState.unlockAchievement('fizz_master');
			if (correctValue === 'Buzz') gameState.unlockAchievement('buzz_master');
			if (correctValue === 'FizzBuzz') gameState.unlockAchievement('fizzbuzz_pro');
			if (this.combo === 3) gameState.unlockAchievement('combo_x3');
		} else {
			this.combo = 0;
			this.timeLeft = Math.max(0, this.timeLeft - this.PENALTY);
			this.showFeedback('wrong');
			if (this.timeLeft <= 0) {
				this.endGame();
			}
		}
	}

	private showFeedback(type: 'correct' | 'wrong') {
		this.feedback = type;
		setTimeout(() => {
			if (this.feedback === type) this.feedback = null;
		}, 300);
	}

	private endGame() {
		if (this.isGameOver) return;
		this.isGameOver = true;
		this.destroy();
		gameState.addGame(this.score);
		gameState.unlockAchievement('first_game');
		if (this.score >= 50) gameState.unlockAchievement('high_scorer');

		setTimeout(() => {
			goto(resolve('/result'));
		}, 1500);
	}
}
