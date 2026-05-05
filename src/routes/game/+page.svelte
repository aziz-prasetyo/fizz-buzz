<script lang="ts">
	import { GameSession, type Answer } from '$lib/game.svelte';

	const game = new GameSession();
	const options: Answer[] = ['Number', 'Fizz', 'Buzz', 'FizzBuzz'];

	$effect(() => {
		return () => game.destroy();
	});
</script>

<div class="flex flex-col items-center space-y-12 py-8">
	<!-- Header / Stats -->
	<div class="flex w-full items-center justify-between">
		<div class="text-left">
			<div class="text-xs font-bold tracking-widest text-slate-400 uppercase">Score</div>
			<div class="text-4xl font-black text-slate-800">{game.score}</div>
		</div>
		<div class="text-right">
			<div class="text-xs font-bold tracking-widest text-slate-400 uppercase">Time</div>
			<div
				class={[
					'text-4xl font-black tabular-nums transition-colors',
					game.timeLeft < 3 ? 'animate-pulse text-red-500' : 'text-indigo-600'
				]}
			>
				{game.timeLeft.toFixed(1)}s
			</div>
		</div>
	</div>

	<!-- Progress Bar -->
	<div class="h-3 w-full overflow-hidden rounded-full bg-slate-200">
		<div
			class="h-full bg-indigo-500 transition-all duration-100 ease-linear"
			style="width: {game.progress}%"
		></div>
	</div>

	<!-- Main Question -->
	<div class="flex flex-1 items-center justify-center py-12">
		<div
			class={[
				'text-8xl font-black text-slate-800 transition-transform duration-200',
				game.feedback === 'correct' && 'scale-110 text-green-500',
				game.feedback === 'wrong' && 'shake text-red-500'
			]}
		>
			{#if game.isGameOver}
				<span class="text-6xl text-red-600">GAME OVER</span>
			{:else}
				{game.currentNumber}
			{/if}
		</div>
	</div>

	<!-- Input Buttons -->
	<div class="grid w-full max-w-md grid-cols-2 gap-4">
		{#each options as option (option)}
			<button
				onclick={() => game.handleAnswer(option)}
				disabled={game.isGameOver}
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
