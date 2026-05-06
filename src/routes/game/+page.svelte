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

<div class="flex flex-col items-center gap-12 py-8">
	<!-- Header / Stats -->
	<div class="flex w-full items-center justify-between">
		<div class="flex flex-col gap-1">
			<div class="text-xs font-bold tracking-widest text-muted-foreground uppercase">Score</div>
			<div class="text-4xl font-black text-foreground">{game.score}</div>
		</div>
		<div class="flex flex-col gap-1 text-right">
			<div class="text-xs font-bold tracking-widest text-muted-foreground uppercase">Time</div>
			<div
				class={cn(
					'text-4xl font-black tabular-nums transition-colors',
					game.timeLeft < 3 ? 'animate-pulse text-destructive' : 'text-primary'
				)}
			>
				{game.timeLeft.toFixed(1)}s
			</div>
		</div>
	</div>

	<!-- Progress Bar -->
	<Progress value={game.progress} class="h-3 w-full" />

	<!-- Main Question -->
	<div class="flex flex-1 items-center justify-center py-12">
		<div
			class={cn(
				'text-8xl font-black text-foreground transition-all duration-200',
				game.feedback === 'correct' && 'scale-110 text-success',
				game.feedback === 'wrong' && 'animate-shake text-destructive'
			)}
		>
			{#if game.isGameOver}
				<span class="text-6xl text-destructive">GAME OVER</span>
			{:else}
				{game.currentNumber}
			{/if}
		</div>
	</div>

	<!-- Input Buttons -->
	<div class="grid w-full max-w-md grid-cols-2 gap-4">
		{#each options as option (option)}
			<Button
				variant="outline"
				onclick={() => game.handleAnswer(option)}
				disabled={game.isGameOver}
				class="h-auto px-4 py-8 text-2xl font-bold transition-all hover:border-primary hover:text-primary active:scale-95"
			>
				{option === 'Number' ? '#' : option}
			</Button>
		{/each}
	</div>
</div>
