import { browser } from '$app/environment';

export interface GameRecord {
	date: string;
	score: number;
}

class GameState {
	highScore = $state(0);
	history = $state<GameRecord[]>([]);
	xp = $state(0);
	achievements = $state<string[]>([]);
	notificationQueue = $state<string[]>([]);
	level = $derived(Math.floor(this.xp / 1000) + 1);
	xpProgress = $derived(((this.xp % 1000) / 1000) * 100);

	constructor() {
		this.notificationQueue = [];
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

			const savedXp = localStorage.getItem('fizzbuzz_xp');
			if (savedXp) this.xp = parseInt(savedXp, 10);

			const savedAchievements = localStorage.getItem('fizzbuzz_achievements');
			if (savedAchievements) {
				try {
					this.achievements = JSON.parse(savedAchievements);
				} catch (e) {
					console.error('Failed to parse achievements', e);
					this.achievements = [];
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
				$effect(() => {
					localStorage.setItem('fizzbuzz_xp', this.xp.toString());
				});
				$effect(() => {
					localStorage.setItem('fizzbuzz_achievements', JSON.stringify(this.achievements));
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
		// Award XP: 10 XP per point
		this.addXp(score * 10);
	}

	addXp(amount: number) {
		this.xp += amount;
	}

	unlockAchievement(id: string) {
		if (!this.achievements.includes(id)) {
			this.achievements = [...this.achievements, id];
			this.notificationQueue = [...this.notificationQueue, id];
			return true;
		}
		return false;
	}

	clearHistory() {
		this.history = [];
		this.highScore = 0;
		this.xp = 0;
		this.achievements = [];
		this.notificationQueue = [];
		if (browser) {
			localStorage.removeItem('fizzbuzz_highScore');
			localStorage.removeItem('fizzbuzz_history');
			localStorage.removeItem('fizzbuzz_xp');
			localStorage.removeItem('fizzbuzz_achievements');
		}
	}
}

export const gameState = new GameState();
