<script lang="ts">
	import { GameSession, type Answer } from '$lib/game.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Progress } from '$lib/components/ui/progress';
	import { cn } from '$lib/utils';

	const game = new GameSession();
	const options: Answer[] = ['Number', 'Fizz', 'Buzz', 'FizzBuzz'];

	$effect(() => {
		return () => game.destroy();
	});
</script>

<div class="flex flex-col items-center gap-10 py-4 md:gap-16">
	<!-- Header / Stats -->
	<div class="flex w-full items-end justify-between border-b-4 border-black pb-6">
		<div class="flex flex-col gap-2">
			<div class="font-head text-[10px] tracking-widest text-muted-foreground uppercase">Score</div>
			<div class="font-head text-5xl text-foreground tabular-nums">
				{game.score.toString().padStart(3, '0')}
			</div>
		</div>

		<div class="flex flex-col items-center gap-1">
			<div
				class="text-center font-head text-[10px] tracking-widest text-muted-foreground uppercase"
			>
				Time Left
			</div>
			<div
				class={cn(
					'min-w-[140px] border-4 border-black bg-secondary px-4 py-2 text-center font-head text-6xl tabular-nums',
					game.timeLeft < 3 ? 'animate-pulse text-destructive' : 'text-primary'
				)}
			>
				{game.timeLeft.toFixed(1)}
			</div>
		</div>
	</div>

	<!-- Progress Bar -->
	<div class="w-full border-2 border-black bg-white p-1 shadow-[4px_4px_0_0_#000]">
		<Progress value={game.progress} class="h-6" />
	</div>

	<!-- Main Question -->
	<div class="flex min-h-[240px] flex-1 items-center justify-center py-8">
		<div
			class={cn(
				'font-head text-9xl text-foreground transition-all duration-100',
				game.feedback === 'correct' && 'scale-125 text-success',
				game.feedback === 'wrong' && 'animate-shake text-destructive'
			)}
		>
			{#if game.isGameOver}
				<div class="flex flex-col items-center gap-4">
					<span class="text-5xl text-destructive md:text-7xl">GAME OVER</span>
					<span
						class="animate-pulse font-sans text-xl font-bold tracking-[0.3em] text-muted-foreground uppercase"
						>Syncing high scores...</span
					>
				</div>
			{:else}
				{game.currentNumber}
			{/if}
		</div>
	</div>

	<!-- Input Buttons -->
	<div class="grid w-full max-w-lg grid-cols-2 gap-6 md:gap-8">
		{#each options as option (option)}
			<Button
				variant={option === 'Fizz'
					? 'default'
					: option === 'Buzz'
						? 'accent'
						: option === 'FizzBuzz'
							? 'secondary'
							: 'outline'}
				onclick={() => game.handleAnswer(option)}
				disabled={game.isGameOver}
				class="h-auto border-4 border-black px-4 py-10 text-3xl md:text-4xl"
			>
				{option === 'Number' ? '#' : option}
			</Button>
		{/each}
	</div>
</div>

<style>
	:global([data-slot='progress-indicator']) {
		transition: none !important; /* Snappy movement */
	}
</style>
