<script lang="ts">
	import type { GameSession } from '$lib/game.svelte';

	import { untrack } from 'svelte';
	let { game }: { game: GameSession } = $props();

	let particles = $state<
		{ id: number; x: number; y: number; color: string; dx: number; dy: number; dr: number; size: number; isCircle: boolean }[]
	>([]);
	let nextId = 0;
	let lastFeedback = $state<'correct' | 'wrong' | null>(null);

	$effect(() => {
		const currentFeedback = game.feedback;
		if (currentFeedback === 'correct' && lastFeedback !== 'correct') {
			untrack(() => createBurst());
		}
		lastFeedback = currentFeedback;
	});

	function createBurst() {
		const count = 30;
		const newParticles: {
			id: number;
			x: number;
			y: number;
			color: string;
			dx: number;
			dy: number;
			dr: number;
			size: number;
			isCircle: boolean;
		}[] = [];
		const colors = [
			'var(--primary)',
			'var(--accent)',
			'var(--success)',
			'var(--destructive)',
			'#3b82f6',
			'#a855f7',
			'#ec4899',
			'#f97316',
			'#14b8a6',
			'#000000'
		];

		for (let i = 0; i < count; i++) {
			const angle = (Math.PI * 2 * i) / count + (Math.random() * 2 - 1);
			const speed = 10 + Math.random() * 20;
			newParticles.push({
				id: nextId++,
				x: 50,
				y: 50,
				color: colors[Math.floor(Math.random() * colors.length)],
				dx: Math.cos(angle) * speed,
				dy: Math.sin(angle) * speed - 20, // Add upward "float"
				dr: Math.random() * 720 - 360,
				size: 12 + Math.random() * 20,
				isCircle: Math.random() > 0.4
			});
		}

		particles = [...particles, ...newParticles];

		setTimeout(() => {
			particles = particles.filter((p) => !newParticles.find((np) => np.id === p.id));
		}, 1500);
	}
</script>

<div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
	{#each particles as p (p.id)}
		<div
			class="particle absolute border-2 border-black"
			class:rounded-full={p.isCircle}
			style:background-color={p.color}
			style:left="{p.x}%"
			style:top="{p.y}%"
			style:width="{p.size}px"
			style:height="{p.size}px"
			style="--dx: {p.dx}vw; --dy: {p.dy}vh; --dr: {p.dr}deg;"
		></div>
	{/each}
</div>

<style>
	.particle {
		transform: translate(-50%, -50%);
		animation: burst 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
	}

	@keyframes burst {
		0% {
			transform: translate(-50%, -50%) rotate(0deg) scale(0);
			opacity: 0;
		}
		40% {
			opacity: 1;
			transform: translate(calc(-50% + var(--dx) * 0.4), calc(-50% + var(--dy) * 0.4))
				rotate(calc(var(--dr) * 0.4)) scale(1);
		}
		100% {
			transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) rotate(var(--dr)) scale(0);
			opacity: 0;
		}
	}
</style>
