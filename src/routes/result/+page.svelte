<script lang="ts">
	import { gameState } from '$lib/state.svelte';
	import { Button } from '$lib/components/ui/button';
	import TrophyIcon from '@lucide/svelte/icons/trophy';
	import PlayIcon from '@lucide/svelte/icons/play';
	import HistoryIcon from '@lucide/svelte/icons/history';

	const lastScore = $derived(gameState.history[0]?.score ?? 0);
	const isNewHighScore = $derived(lastScore > 0 && lastScore === gameState.highScore);
</script>

<div class="flex flex-col items-center gap-10 py-12">
	<div class="flex flex-col items-center text-center">
		<h1 class="font-head text-6xl md:text-8xl">MISSION END</h1>
		{#if isNewHighScore}
			<div
				class="mt-4 animate-bounce border-2 border-black bg-primary px-6 py-2 font-head text-xl shadow-retro"
			>
				NEW HIGH SCORE!
			</div>
		{/if}
	</div>

	<div
		class="flex w-full max-w-2xl flex-col items-center gap-y-4 border-8 border-black bg-white p-12 shadow-retro-lg"
	>
		<TrophyIcon class="size-24 bg-black p-3 text-primary" />
		<div class="font-head text-2xl tracking-[0.3em] text-muted-foreground uppercase">
			Final Score
		</div>
		<div class="font-head text-[10rem] leading-none tabular-nums md:text-[15rem]">
			{lastScore.toString().padStart(3, '0')}
		</div>
	</div>

	<div class="grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
		<Button
			href="/game"
			class="h-auto border-4 border-black bg-primary px-8 py-8 font-head text-2xl text-black shadow-retro transition-all hover:bg-primary-hover active:translate-y-1 active:shadow-none"
		>
			<PlayIcon class="mr-3 size-6" /> RETRY
		</Button>
		<Button
			href="/history"
			variant="outline"
			class="h-auto border-4 border-black px-8 py-8 font-head text-2xl shadow-retro transition-all hover:bg-accent active:translate-y-1 active:shadow-none"
		>
			<HistoryIcon class="mr-3 size-6" /> HISTORY
		</Button>
	</div>

	<Button
		href="/profiles"
		variant="link"
		class="font-head text-xs tracking-widest text-blue-500 uppercase"
	>
		[ RETURN TO PROFILE ]
	</Button>
</div>
