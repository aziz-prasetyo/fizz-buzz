import { browser } from '$app/environment';

export interface GameRecord {
	date: string;
	score: number;
}

class GameState {
	highScore = $state(0);
	history = $state<GameRecord[]>([]);

	constructor() {
		if (browser) {
			const savedHighScore = localStorage.getItem('fizzbuzz_highScore');
			if (savedHighScore) this.highScore = parseInt(savedHighScore, 10);

			const savedHistory = localStorage.getItem('fizzbuzz_history');
			if (savedHistory) {
				try {
					this.history = JSON.parse(savedHistory);
				} catch (e) {
					console.error('Failed to parse history', e);
					this.history = [];
				}
			}

			// In Svelte 5, $effect can be used in classes if they are instantiated
			// within a component or if we use $effect.root
			$effect.root(() => {
				$effect(() => {
					localStorage.setItem('fizzbuzz_highScore', this.highScore.toString());
				});
				$effect(() => {
					localStorage.setItem('fizzbuzz_history', JSON.stringify(this.history));
				});
			});
		}
	}

	addGame(score: number) {
		const record: GameRecord = {
			date: new Date().toISOString(),
			score
		};
		this.history = [record, ...this.history];
		if (score > this.highScore) {
			this.highScore = score;
		}
	}

	clearHistory() {
		this.history = [];
		this.highScore = 0;
		if (browser) {
			localStorage.removeItem('fizzbuzz_highScore');
			localStorage.removeItem('fizzbuzz_history');
		}
	}
}

export const gameState = new GameState();
