<script lang="ts">
	import { gameState } from '$lib/state.svelte';
	import { Button } from '$lib/components/ui/button';
	import TrophyIcon from '@lucide/svelte/icons/trophy';
	import PlayIcon from '@lucide/svelte/icons/play';
</script>

<div class="flex flex-col items-center gap-12 py-12">
	<div class="flex flex-col items-center text-center">
		<h1 class="font-head text-5xl md:text-7xl">PILOT PROFILE</h1>
		<p class="font-sans text-xl font-bold tracking-widest text-muted-foreground uppercase">
			Mission Statistics & Authorization
		</p>
	</div>

	<div class="grid w-full max-w-4xl gap-8 md:grid-cols-2">
		<div class="flex flex-col border-4 border-black bg-white p-8 shadow-retro-lg">
			<div class="mb-6 flex items-center justify-between">
				<div class="bg-black p-3 text-primary">
					<TrophyIcon class="size-8" />
				</div>
				<div class="font-head text-xs tracking-widest text-muted-foreground uppercase">
					Highest Record
				</div>
			</div>

			<div class="flex flex-col">
				<div class="font-head text-7xl leading-none tabular-nums md:text-9xl">
					{gameState.highScore.toString().padStart(3, '0')}
				</div>
				<div class="mt-2 font-head text-sm text-primary">POINTS ARCHIVED</div>
			</div>
		</div>

		<div class="flex flex-col border-4 border-black bg-primary p-8 shadow-retro-lg">
			<div class="mb-6 flex items-center justify-between">
				<div class="bg-black p-3 text-white">
					<PlayIcon class="size-8" />
				</div>
				<div class="font-head text-xs font-bold tracking-widest text-black uppercase">
					Action Required
				</div>
			</div>

			<div class="flex flex-1 flex-col justify-center">
				<Button
					href="/game"
					class="h-auto border-4 border-black bg-white px-8 py-10 font-head text-3xl text-black shadow-retro transition-all hover:bg-accent active:translate-x-1 active:translate-y-1 active:shadow-none"
				>
					START MISSION
				</Button>
			</div>
		</div>
	</div>
</div>
