<script lang="ts">
	import { gameState } from '$lib/state.svelte';
	import { Button } from '$lib/components/ui/button';
	import TrophyIcon from '@lucide/svelte/icons/trophy';
	import PlayIcon from '@lucide/svelte/icons/play';
	import StarIcon from '@lucide/svelte/icons/star';
	import { Progress } from '$lib/components/ui/progress';

	const ACHIEVEMENTS = [
		{ id: 'first_game', title: 'First Step', icon: '🚀' },
		{ id: 'fizz_master', title: 'Fizz Master', icon: '🫧' },
		{ id: 'buzz_master', title: 'Buzz Master', icon: '🐝' },
		{ id: 'fizzbuzz_pro', title: 'FizzBuzz Pro', icon: '👑' },
		{ id: 'combo_x3', title: 'Triple Threat', icon: '🔥' },
		{ id: 'high_scorer', title: 'High Roller', icon: '💎' }
	];
</script>

<div class="flex flex-col items-center gap-12 py-12">
	<div class="flex flex-col items-center text-center">
		<h1 class="font-head text-5xl md:text-7xl">PILOT PROFILE</h1>
		<div class="mt-4 flex items-center gap-4">
			<div class="border-4 border-black bg-black px-4 py-1 font-head text-2xl text-primary italic">
				LVL {gameState.level}
			</div>
			<p class="font-sans text-xl font-bold tracking-widest text-muted-foreground uppercase">
				Mission Statistics
			</p>
		</div>
	</div>

	<!-- XP Progress -->
	<div class="flex w-full max-w-4xl flex-col gap-2">
		<div class="flex justify-between font-head text-[10px] tracking-widest uppercase">
			<span>Rank Progress</span>
			<span>{Math.floor(gameState.xp % 1000)} / 1000 XP</span>
		</div>
		<div class="w-full border-4 border-black bg-white p-1 shadow-retro">
			<Progress value={gameState.xpProgress} class="h-8" />
		</div>
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
				<div class="mt-2 font-head text-sm text-primary uppercase">Points Archived</div>
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

	<!-- Achievements Grid -->
	<div class="flex w-full max-w-4xl flex-col gap-6">
		<div class="flex items-center gap-4">
			<div class="h-0.5 flex-1 bg-black"></div>
			<h2 class="font-head text-2xl">Unlocked Merits</h2>
			<div class="h-0.5 flex-1 bg-black"></div>
		</div>

		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
			{#each ACHIEVEMENTS as merit (merit.id)}
				{@const isUnlocked = gameState.achievements.includes(merit.id)}
				<div
					class={[
						'group relative flex flex-col items-center gap-2 border-2 border-black p-4 transition-all',
						isUnlocked ? 'bg-white shadow-retro' : 'bg-muted opacity-40 grayscale'
					]}
				>
					<div class="text-4xl">{merit.icon}</div>
					<span class="text-center font-head text-[10px] leading-tight uppercase"
						>{merit.title}</span
					>
					{#if isUnlocked}
						<div class="absolute -top-2 -right-2 bg-black p-1 text-primary shadow-sm">
							<StarIcon class="size-3 fill-primary" />
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
