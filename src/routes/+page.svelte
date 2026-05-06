<script lang="ts">
	import { gameState } from '$lib/state.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

<div class="mt-12 flex flex-col items-center justify-center gap-12 text-center">
	<div class="flex flex-col gap-4">
		<h1 class="scroll-m-20 text-4xl font-black tracking-tight text-primary lg:text-6xl">
			Fizz Buzz
		</h1>
		<p class="mx-auto max-w-md text-xl text-muted-foreground">
			Can you survive the infinite challenge? 10 seconds per question, don't miss a beat!
		</p>
	</div>

	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Description class="text-xs font-bold tracking-widest text-primary uppercase">
				Personal Best
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="text-7xl font-black text-foreground tabular-nums">
				{gameState.highScore}
			</div>
		</Card.Content>
	</Card.Root>

	<div class="flex w-full max-w-md flex-col gap-4 sm:flex-row">
		<Button
			href="/game"
			class="h-auto flex-1 px-8 py-6 text-xl font-black transition-transform active:scale-95"
			size="lg"
		>
			Start Game
		</Button>
		<Button
			href="/results"
			variant="outline"
			class="h-auto flex-1 px-8 py-6 text-xl font-black transition-transform active:scale-95"
			size="lg"
		>
			History
		</Button>
	</div>
</div>
