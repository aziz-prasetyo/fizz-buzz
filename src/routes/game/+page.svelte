<script lang="ts">
	import { GameSession, type Answer } from '$lib/game.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Progress } from '$lib/components/ui/progress';
	import FeedbackLayer from '$lib/components/feedback-layer.svelte';
	import { cn } from '$lib/utils';

	const game = new GameSession();
	const options: Answer[] = ['Number', 'Fizz', 'Buzz', 'FizzBuzz'];

	$effect(() => {
		return () => game.destroy();
	});
</script>

<div class="relative flex min-h-screen flex-col items-center gap-10 py-4 md:gap-16">
	<FeedbackLayer {game} />
	<!-- Header / Stats -->
	<div class="relative z-10 grid w-full grid-cols-3 items-end border-b-4 border-black pb-6">
		<div class="flex flex-col gap-1">
			<div class="font-head text-[10px] tracking-widest text-muted-foreground uppercase">Score</div>
			<div class="font-head text-4xl text-foreground tabular-nums md:text-5xl">
				{game.score.toString().padStart(3, '0')}
			</div>
		</div>

		<div class="flex flex-col items-center pb-1">
			{#if game.combo > 0}
				<div
					class="flex items-center gap-1 font-head text-sm whitespace-nowrap text-primary italic md:gap-2 md:text-xl"
				>
					<span>Combo {game.combo}</span>
					{#if game.multiplier > 1}
						<span
							class="rounded-sm bg-black px-1.5 py-0.5 text-[10px] text-white not-italic md:px-2 md:text-xs"
							>x{game.multiplier}</span
						>
					{/if}
				</div>
			{/if}
		</div>

		<div class="flex flex-col items-end gap-1">
			<div class="font-head text-[10px] tracking-widest text-muted-foreground uppercase">
				Time Left
			</div>
			<div
				class={cn(
					'min-w-[80px] border-4 border-black bg-secondary px-2 py-1 text-center font-head text-3xl tabular-nums md:min-w-[140px] md:px-4 md:py-2 md:text-6xl',
					game.timeLeft < 3 ? 'animate-pulse text-destructive' : 'text-primary'
				)}
			>
				{game.timeLeft.toFixed(1)}
			</div>
		</div>
	</div>

	<!-- Progress Bar -->
	<div class="relative z-10 w-full border-2 border-black bg-white p-1 shadow-[4px_4px_0_0_#000]">
		<Progress value={game.progress} class="h-6" />
	</div>

	<!-- Main Question -->
	<div class="relative z-10 flex min-h-[240px] flex-1 items-center justify-center py-8">
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
	<div class="relative z-10 grid w-full max-w-lg grid-cols-2 gap-6 md:gap-8">
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
