<script lang="ts">
	import { gameState } from '$lib/state.svelte';
	import { fly } from 'svelte/transition';
	import Star from '@lucide/svelte/icons/star';

	const ACHIEVEMENT_MAP: Record<string, { title: string; description: string }> = {
		first_game: { title: 'First Step', description: 'Complete your first game!' },
		fizz_master: { title: 'Fizz Master', description: 'Get a correct Fizz answer.' },
		buzz_master: { title: 'Buzz Master', description: 'Get a correct Buzz answer.' },
		fizzbuzz_pro: { title: 'FizzBuzz Pro', description: 'Get a correct FizzBuzz answer.' },
		combo_x3: { title: 'Triple Threat', description: 'Reach a 3x Combo!' },
		high_scorer: { title: 'High Roller', description: 'Score over 50 points.' }
	};

	let currentNotification = $state<{ id: string; title: string; description: string } | null>(null);

	$effect(() => {
		if (gameState.notificationQueue.length > 0 && !currentNotification) {
			const nextId = gameState.notificationQueue[0];
			const details = ACHIEVEMENT_MAP[nextId] || { title: 'Unlocked!', description: nextId };

			currentNotification = { id: nextId, ...details };

			// Remove from queue
			gameState.notificationQueue = gameState.notificationQueue.slice(1);

			setTimeout(() => {
				currentNotification = null;
			}, 3000);
		}
	});
</script>

{#if currentNotification}
	<div
		transition:fly={{ y: -50, duration: 500 }}
		class="fixed top-6 left-1/2 z-[100] -translate-x-1/2"
	>
		<div
			class="flex min-w-[280px] items-center gap-4 border-4 border-black bg-primary p-4 shadow-retro"
		>
			<div class="flex h-12 w-12 items-center justify-center border-4 border-black bg-white">
				<Star class="h-6 w-6 fill-primary text-black" />
			</div>
			<div class="flex flex-col">
				<span class="font-head text-xs tracking-wider text-black uppercase"
					>Achievement Unlocked!</span
				>
				<span class="font-head text-xl text-black">{currentNotification.title}</span>
				<span class="font-sans text-xs font-medium text-black/70"
					>{currentNotification.description}</span
				>
			</div>
		</div>
	</div>
{/if}
