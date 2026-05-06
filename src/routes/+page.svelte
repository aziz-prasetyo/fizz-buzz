<script lang="ts">
	import { gameState } from '$lib/state.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

<div class="flex flex-col items-center justify-center gap-12 text-center md:gap-16">
	<div class="flex flex-col gap-6">
		<div class="relative inline-block">
			<h1 class="font-head text-6xl tracking-tighter text-foreground md:text-8xl lg:text-9xl">
				FIZZ<br /><span class="text-primary">BUZZ</span>
			</h1>
			<div
				class="absolute -top-4 -right-4 rotate-12 border-2 border-black bg-destructive px-2 py-1 font-head text-[10px] text-white shadow-retro md:text-xs"
			>
				EXTREME
			</div>
		</div>

		<div class="mx-auto max-w-sm border-l-4 border-primary pl-4 text-left">
			<p class="font-sans text-lg leading-tight font-bold md:text-xl">
				CAN YOU SURVIVE THE INFINITE CHALLENGE?
				<span class="mt-2 block text-sm font-medium tracking-wider text-muted-foreground uppercase">
					10 SECONDS // NO MISTAKES // PURE SKILL
				</span>
			</p>
		</div>
	</div>

	<Card.Root class="w-full max-w-[280px] bg-accent">
		<Card.Header class="pb-2">
			<Card.Description class="font-head text-[10px] tracking-[0.2em] uppercase">
				Personal Best
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="font-head text-6xl tabular-nums">
				{gameState.highScore.toString().padStart(3, '0')}
			</div>
		</Card.Content>
	</Card.Root>

	<div class="flex w-full max-w-md flex-col gap-6 sm:flex-row">
		<Button
			href="/game"
			variant="default"
			class="h-auto flex-1 border-4 border-black py-8 text-2xl"
			size="lg"
		>
			<span class="mr-2 animate-pulse">▶</span> START
		</Button>
		<Button
			href="/results"
			variant="outline"
			class="h-auto flex-1 border-4 border-black py-8 text-2xl"
			size="lg"
		>
			HISTORY
		</Button>
	</div>

	<div class="mt-8 animate-pulse font-head text-sm tracking-widest text-primary">
		[ INSERT COIN TO CONTINUE ]
	</div>
</div>
