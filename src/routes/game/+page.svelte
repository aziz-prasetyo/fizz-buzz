<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { gameState } from '$lib/state.svelte';

	type Answer = 'Number' | 'Fizz' | 'Buzz' | 'FizzBuzz';
	const options: Answer[] = ['Number', 'Fizz', 'Buzz', 'FizzBuzz'];

	let currentNumber = $state(1);
	let score = $state(0);
	let timeLeft = $state(10);
	let isGameOver = $state(false);
	let feedback = $state<'correct' | 'wrong' | null>(null);

	const INITIAL_TIME = 10;
	const PENALTY = 2;

	function getFizzBuzzValue(n: number) {
		if (n % 15 === 0) return 'FizzBuzz';
		if (n % 3 === 0) return 'Fizz';
		if (n % 5 === 0) return 'Buzz';
		return 'Number';
	}

	function handleAnswer(answer: Answer) {
		if (isGameOver) return;

		const correctValue = getFizzBuzzValue(currentNumber);

		if (answer === correctValue) {
			score++;
			currentNumber++;
			timeLeft = INITIAL_TIME;
			showFeedback('correct');
		} else {
			timeLeft = Math.max(0, timeLeft - PENALTY);
			showFeedback('wrong');
			if (timeLeft <= 0) {
				endGame();
			}
		}
	}

	function showFeedback(type: 'correct' | 'wrong') {
		feedback = type;
		setTimeout(() => {
			if (feedback === type) feedback = null;
		}, 300);
	}

	function endGame() {
		if (isGameOver) return;
		isGameOver = true;
		gameState.addGame(score);
		setTimeout(() => {
			goto(resolve('/results'));
		}, 1500);
	}

	onMount(() => {
		const interval = setInterval(() => {
			if (isGameOver) return;
			timeLeft -= 0.1;
			if (timeLeft <= 0) {
				timeLeft = 0;
				clearInterval(interval);
				endGame();
			}
		}, 100);

		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-col items-center space-y-12 py-8">
	<!-- Header / Stats -->
	<div class="flex w-full items-center justify-between">
		<div class="text-left">
			<div class="text-xs font-bold tracking-widest text-slate-400 uppercase">Score</div>
			<div class="text-4xl font-black text-slate-800">{score}</div>
		</div>
		<div class="text-right">
			<div class="text-xs font-bold tracking-widest text-slate-400 uppercase">Time</div>
			<div
				class="text-4xl font-black tabular-nums transition-colors {timeLeft < 3
					? 'animate-pulse text-red-500'
					: 'text-indigo-600'}"
			>
				{timeLeft.toFixed(1)}s
			</div>
		</div>
	</div>

	<!-- Progress Bar -->
	<div class="h-3 w-full overflow-hidden rounded-full bg-slate-200">
		<div
			class="h-full bg-indigo-500 transition-all duration-100 ease-linear"
			style="width: {(timeLeft / INITIAL_TIME) * 100}%"
		></div>
	</div>

	<!-- Main Question -->
	<div class="flex flex-1 items-center justify-center py-12">
		<div
			class="text-8xl font-black text-slate-800 transition-transform duration-200 {feedback ===
			'correct'
				? 'scale-110 text-green-500'
				: ''} {feedback === 'wrong' ? 'shake text-red-500' : ''}"
		>
			{#if isGameOver}
				<span class="text-6xl text-red-600">GAME OVER</span>
			{:else}
				{currentNumber}
			{/if}
		</div>
	</div>

	<!-- Input Buttons -->
	<div class="grid w-full max-w-md grid-cols-2 gap-4">
		{#each options as option (option)}
			<button
				onclick={() => handleAnswer(option)}
				disabled={isGameOver}
				class="rounded-2xl border-2 border-slate-200 bg-white px-4 py-6 text-xl font-bold text-slate-700 shadow-sm transition-all hover:border-indigo-400 hover:text-indigo-600 hover:shadow-md active:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
			>
				{option === 'Number' ? '#' : option}
			</button>
		{/each}
	</div>
</div>

<style>
	@keyframes shake {
		0%,
		100% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-10px);
		}
		75% {
			transform: translateX(10px);
		}
	}
	.shake {
		animation: shake 0.2s ease-in-out 0s 2;
	}
</style>
