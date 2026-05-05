<script lang="ts">
	import { resolve } from '$app/paths';
	import { gameState } from '$lib/state.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

<div class="mt-12 flex flex-col items-center justify-center gap-8 text-center">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
		Fizz Buzz
	</h1>

	<p class="max-w-md text-xl leading-7 text-muted-foreground">
		Can you survive the infinite challenge? 10 seconds per question, don't miss a beat!
	</p>

	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Description class="text-xs font-bold tracking-widest uppercase">
				High Score
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="text-6xl font-black text-foreground">{gameState.highScore}</div>
		</Card.Content>
	</Card.Root>

	<div class="flex w-full max-w-md flex-col gap-4 sm:flex-row">
		<Button href={resolve('/game')} class="h-auto flex-1 px-8 py-6 text-lg font-bold" size="lg">
			Start New Game
		</Button>
		<Button
			href={resolve('/results')}
			variant="outline"
			class="h-auto flex-1 px-8 py-6 text-lg font-bold"
			size="lg"
		>
			View History
		</Button>
	</div>
</div>
