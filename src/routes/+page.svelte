<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { gameState } from '$lib/state.svelte';
	import { Shimmer } from '@shimmer-from-structure/svelte';
	import { browser } from '$app/environment';
	import PlayIcon from '@lucide/svelte/icons/play';
	import RocketIcon from '@lucide/svelte/icons/rocket';
	import ZapIcon from '@lucide/svelte/icons/zap';
	import InfoIcon from '@lucide/svelte/icons/info';
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import TrophyIcon from '@lucide/svelte/icons/trophy';
	import StarIcon from '@lucide/svelte/icons/star';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
</script>

<div class="flex flex-col items-center py-8 md:py-12">
	<!-- Background Decorations -->
	<div
		class="pointer-events-none absolute inset-0 z-0 opacity-10"
		style="background-image: radial-gradient(var(--primary) 1px, transparent 1px); background-size: 20px 20px;"
	></div>

	<!-- New Sections Container -->
	<div class="relative z-10 mb-20 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
		<!-- About Section -->
		<Card.Root class="border-4 border-black shadow-retro transition-transform hover:-translate-y-1">
			<Card.Header>
				<div
					class="mb-2 flex size-12 items-center justify-center border-2 border-black bg-primary shadow-retro"
				>
					<InfoIcon class="size-6" />
				</div>
				<Card.Title class="font-head text-2xl uppercase">About</Card.Title>
				<Card.Description class="font-sans font-bold text-black/60"
					>The Survival Challenge</Card.Description
				>
			</Card.Header>
			<Card.Content>
				<p class="font-sans text-sm leading-tight">
					Fizz Buzz is a high-intensity survival game that tests your mental agility. Originally a
					simple coding task, now a high-stakes race against time.
				</p>
			</Card.Content>
		</Card.Root>

		<!-- How to Play Section -->
		<Card.Root class="border-4 border-black shadow-retro transition-transform hover:-translate-y-1">
			<Card.Header>
				<div
					class="mb-2 flex size-12 items-center justify-center border-2 border-black bg-secondary shadow-retro"
				>
					<BookOpenIcon class="size-6 text-white" />
				</div>
				<Card.Title class="font-head text-2xl uppercase">How to Play</Card.Title>
				<Card.Description class="font-sans font-bold text-black/60"
					>Rules of Engagement</Card.Description
				>
			</Card.Header>
			<Card.Content>
				<ul class="space-y-2 font-sans text-xs font-bold uppercase">
					<li class="flex items-center gap-2">
						<Badge variant="outline" class="border-black bg-accent text-[8px]">FIZZ</Badge> Multiples
						of 3
					</li>
					<li class="flex items-center gap-2">
						<Badge variant="outline" class="border-black bg-primary text-[8px]">BUZZ</Badge>
						Multiples of 5
					</li>
					<li class="flex items-center gap-2">
						<Badge variant="outline" class="border-black bg-destructive text-[8px] text-white"
							>FIZZBUZZ</Badge
						> Both!
					</li>
				</ul>
			</Card.Content>
		</Card.Root>

		<!-- Features Section -->
		<Card.Root class="border-4 border-black shadow-retro transition-transform hover:-translate-y-1">
			<Card.Header>
				<div
					class="mb-2 flex size-12 items-center justify-center border-2 border-black bg-accent shadow-retro"
				>
					<StarIcon class="size-6" />
				</div>
				<Card.Title class="font-head text-2xl uppercase">Features</Card.Title>
				<Card.Description class="font-sans font-bold text-black/60"
					>Power Up Your Game</Card.Description
				>
			</Card.Header>
			<Card.Content>
				<ul class="space-y-1 font-sans text-xs leading-tight">
					<li>⚡ <span class="font-bold">Dynamic Timer:</span> Faster as you go.</li>
					<li>🔥 <span class="font-bold">Combos:</span> Multiply your score.</li>
					<li>🏆 <span class="font-bold">Achievements:</span> Earn your glory.</li>
				</ul>
			</Card.Content>
		</Card.Root>

		<!-- Leaderboard Preview -->
		<Card.Root class="border-4 border-black shadow-retro transition-transform hover:-translate-y-1">
			<Card.Header>
				<div
					class="mb-2 flex size-12 items-center justify-center border-2 border-black bg-destructive shadow-retro"
				>
					<TrophyIcon class="size-6 text-white" />
				</div>
				<Card.Title class="font-head text-2xl uppercase">Records</Card.Title>
				<Card.Description class="font-sans font-bold text-black/60"
					>Top Local Heroes</Card.Description
				>
			</Card.Header>
			<Card.Content>
				{#if browser}
					<Shimmer loading={gameState.loading}>
						<div class="space-y-4">
							<div class="flex items-center justify-between border-b-2 border-black/10 pb-2">
								<span class="font-head text-xs uppercase text-black/40">High Score</span>
								<span class="font-head text-xl text-primary">{gameState.highScore}</span>
							</div>

							{#if gameState.history.length > 0}
								<div class="space-y-1">
									<span class="font-head text-[10px] uppercase text-black/40">Recent Run</span>
									<div class="flex items-center justify-between font-sans text-xs font-bold">
										<span>{new Date(gameState.history[0].date).toLocaleDateString()}</span>
										<Badge variant="outline" class="border-black bg-secondary text-white"
											>{gameState.history[0].score}</Badge
										>
									</div>
								</div>
							{:else}
								<p class="font-sans text-xs leading-tight italic text-black/40">
									No missions logged yet. Ready to start?
								</p>
							{/if}

							<Button
								href="/history"
								variant="outline"
								class="h-8 w-full border-2 border-black font-head text-[10px] shadow-retro hover:bg-primary"
							>
								VIEW ALL HISTORY
								<ArrowRightIcon class="ml-2 size-3" />
							</Button>
						</div>
					</Shimmer>
				{:else}
					<div class="space-y-4 opacity-50">
						<div class="h-10 w-full bg-black/10 animate-pulse"></div>
						<div class="h-20 w-full bg-black/5 animate-pulse"></div>
					</div>
				{/if}
			</Card.Content>
		</Card.Root>
	</div>

	<!-- Hero Section -->
	<div class="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
		<!-- Left Column: Content -->
		<div class="flex flex-col items-start space-y-8 text-left">
			<Badge
				variant="outline"
				class="border-2 border-black bg-accent px-4 py-1 font-head text-[10px] shadow-sm md:text-xs"
			>
				<ZapIcon class="mr-2 size-3 animate-bounce text-destructive" />
				v0.0.1 - BETA
			</Badge>

			<div class="space-y-12">
				<h1 class="font-head text-8xl leading-[0.85] tracking-tighter text-foreground md:text-9xl">
					FIZZ<br />
					<span class="relative inline-block text-primary">
						BUZZ
						<div
							class="absolute -bottom-4 left-0 h-4 w-full bg-slate-500 md:h-6"
							style="clip-path: polygon(0% 100%, 5% 40%, 10% 100%, 15% 40%, 20% 100%, 25% 40%, 30% 100%, 35% 40%, 40% 100%, 45% 40%, 50% 100%, 55% 40%, 60% 100%, 65% 40%, 70% 100%, 75% 40%, 80% 100%, 85% 40%, 90% 100%, 95% 40%, 100% 100%);"
						></div>
					</span>
				</h1>
				<p
					class="max-w-md font-sans text-xl leading-tight font-bold text-muted-foreground md:text-2xl"
				>
					The ultimate mathematical survival challenge. <br />
					<span class="text-foreground underline decoration-destructive decoration-4"
						>Decide fast. Survive longer.</span
					>
				</p>
			</div>

			<div class="flex w-full flex-wrap gap-4 md:w-auto">
				<Button
					href="/game"
					variant="default"
					class="cta-animate group relative h-auto w-full border-4 border-black px-8 py-6 text-2xl shadow-xl transition-all hover:translate-y-0 active:translate-y-1 active:shadow-none md:px-12 md:py-8 md:text-3xl"
				>
					<PlayIcon class="mr-3 size-8 transition-transform group-hover:scale-150" />
					PLAY NOW
				</Button>
			</div>
		</div>

		<!-- Right Column: Interactive/Animated Decoration -->
		<div class="relative hidden items-center justify-center lg:flex">
			<div
				class="relative flex size-96 flex-col items-center justify-center border-8 border-black bg-white outline-4 outline-offset-2"
			>
				<div
					class="animate-spin-slow absolute -top-12 -right-12 z-20 flex size-24 items-center justify-center border-4 border-black bg-primary font-head text-4xl shadow-retro"
				>
					15?
				</div>

				<div
					class="absolute -bottom-8 -left-8 z-20 flex size-20 items-center justify-center border-4 border-black bg-destructive text-white shadow-retro"
				>
					<RocketIcon class="size-10" />
				</div>

				<div
					class="relative flex h-64 w-64 flex-col overflow-hidden border-4 border-black bg-secondary p-4 shadow-inner"
				>
					<div class="mb-4 flex gap-2">
						<div class="size-3 rounded-full bg-destructive"></div>
						<div class="size-3 rounded-full bg-primary"></div>
						<div class="size-3 rounded-full bg-success"></div>
					</div>

					<div class="relative z-10 flex flex-1 flex-col justify-center gap-6 font-head uppercase">
						<div class="text-2xl text-primary">READY?</div>
						<div class="space-y-4">
							<div class="text-4xl text-white">MISSION</div>
							<div class="flex gap-2">
								<div class="h-4 w-full bg-white/20">
									<div class="h-full w-2/3 bg-primary"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				class="animate-float-1 absolute -top-4 left-20 border-2 border-black bg-accent px-4 py-2 font-head text-xs shadow-retro"
			>
				FIZZ = %3
			</div>
			<div
				class="animate-float-2 absolute right-10 bottom-10 border-2 border-black bg-white px-4 py-2 font-head text-xs shadow-retro"
			>
				BUZZ = %5
			</div>
		</div>
	</div>

	<!-- Bottom Section -->
	<div class="mt-20 w-full border-t-4 border-black pt-12">
		<div class="flex flex-col justify-between gap-8 md:flex-row">
			<div class="max-w-sm space-y-4">
				<h3 class="text-2xl underline decoration-primary decoration-4 underline-offset-4">
					THE RULES
				</h3>
				<p class="font-sans font-bold text-muted-foreground">
					Multiples of three print "Fizz", multiples of five print "Buzz". For numbers which are
					multiples of both, print "FizzBuzz".
				</p>
			</div>

			<div class="grid grid-cols-3 gap-4 md:grid-cols-4">
				{#each ['FIZZ', 'BUZZ', 'FUN'] as word (word)}
					<div
						class="group flex items-center justify-center border-2 border-black bg-accent p-4 font-head text-sm shadow-retro transition-all duration-300 hover:-translate-y-2 hover:bg-accent/50"
					>
						<span class="transition group-hover:rotate-x-0 md:rotate-x-180">{word}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes scanline {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(1000%);
		}
	}

	.animate-spin-slow {
		animation: spin 8s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	:global(.cta-animate) {
		animation: neo-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		position: relative;
		overflow: hidden !important;
	}

	:global(.cta-animate::after) {
		content: '';
		position: absolute;
		top: -50%;
		left: -60%;
		width: 20%;
		height: 200%;
		background: rgba(255, 255, 255, 0.9);
		transform: rotate(30deg);
		animation: sheen 4s infinite;
		pointer-events: none;
	}

	@keyframes neo-pulse {
		0%,
		100% {
			transform: scale(1);
			filter: brightness(1);
		}
		50% {
			transform: scale(1.1);
			filter: brightness(1.1);
		}
	}

	@keyframes sheen {
		0% {
			left: -60%;
		}
		20% {
			left: 120%;
		}
		100% {
			left: 120%;
		}
	}

	@keyframes float-bob {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.animate-float-1 {
		animation: float-bob 3s ease-in-out infinite;
	}

	.animate-float-2 {
		animation: float-bob 4s ease-in-out infinite;
		animation-delay: -1.5s;
	}
</style>
