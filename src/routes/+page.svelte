<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import PlayIcon from '@lucide/svelte/icons/play';
	import RocketIcon from '@lucide/svelte/icons/rocket';
	import ZapIcon from '@lucide/svelte/icons/zap';
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<div class="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center py-8 md:py-12">
	<!-- Background Decorations -->
	<div
		class="pointer-events-none absolute inset-0 z-0 opacity-10"
		style="background-image: radial-gradient(var(--primary) 1px, transparent 1px); background-size: 20px 20px;"
	></div>

	<div class="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
		<!-- Left Column: Content -->
		<div class="flex flex-col items-start space-y-8 text-left">
			<Badge
				variant="outline"
				class="border-2 border-black bg-accent px-4 py-1 font-head text-[10px] shadow-sm md:text-xs"
			>
				<ZapIcon class="mr-2 size-3 animate-bounce text-destructive" />
				ESTABLISHED 2026 // VERSION 1.0.5
			</Badge>

			<div class="space-y-2">
				<h1
					class="font-head text-7xl leading-[0.85] tracking-tighter text-foreground md:text-9xl lg:text-[10rem]"
				>
					FIZZ<br />
					<span class="relative inline-block text-primary">
						BUZZ
						<div
							class="absolute -bottom-2 left-0 h-4 w-full bg-black/10 md:h-6"
							style="clip-path: polygon(0% 100%, 5% 40%, 10% 100%, 15% 40%, 20% 100%, 25% 40%, 30% 100%, 35% 40%, 40% 100%, 45% 40%, 50% 100%, 55% 40%, 60% 100%, 65% 40%, 70% 100%, 75% 40%, 80% 100%, 85% 40%, 90% 100%, 95% 40%, 100% 100%);"
						></div>
					</span>
				</h1>
				<p class="max-w-md font-sans text-xl font-bold leading-tight text-muted-foreground md:text-2xl">
					The ultimate mathematical survival challenge. <br />
					<span class="text-foreground decoration-destructive underline decoration-4"
						>Decide fast. Survive longer.</span
					>
				</p>
			</div>

			<div class="flex flex-wrap gap-4">
				<Button
					href="/game"
					variant="default"
					class="group relative h-auto border-4 border-black px-8 py-6 text-2xl shadow-xl transition-all hover:-translate-y-1 active:translate-y-1 active:shadow-none md:px-12 md:py-8 md:text-3xl"
				>
					<PlayIcon
						class="mr-3 size-8 transition-transform group-hover:scale-110 group-active:scale-95"
					/>
					PLAY NOW
				</Button>

				<Button
					href="/profiles"
					variant="outline"
					class="h-auto border-4 border-black px-8 py-6 text-2xl shadow-retro transition-all hover:bg-accent active:translate-x-1 active:translate-y-1 active:shadow-none md:px-10 md:py-8 md:text-3xl"
				>
					PROFILE
				</Button>
			</div>
		</div>

		<!-- Right Column: Interactive/Animated Decoration -->
		<div class="relative hidden items-center justify-center lg:flex">
			<div
				class="group relative flex size-96 flex-col items-center justify-center border-8 border-black bg-white shadow-retro-lg transition-transform hover:rotate-2"
			>
				<div
					class="absolute -top-12 -right-12 z-20 flex size-24 animate-spin-slow items-center justify-center border-4 border-black bg-primary font-head text-4xl shadow-retro"
				>
					3?
				</div>

				<div
					class="absolute -bottom-8 -left-8 z-20 flex size-20 items-center justify-center border-4 border-black bg-destructive text-white shadow-retro"
				>
					<RocketIcon class="size-10" />
				</div>

				<div class="flex h-64 w-64 flex-col border-4 border-black bg-secondary p-4 shadow-inner overflow-hidden relative">
					<div class="mb-4 flex gap-2">
						<div class="size-3 rounded-full bg-destructive"></div>
						<div class="size-3 rounded-full bg-primary"></div>
						<div class="size-3 rounded-full bg-success"></div>
					</div>

					<div class="flex flex-1 flex-col justify-center space-y-4 font-head uppercase relative z-10">
						<div class="animate-pulse text-2xl text-primary">READY?</div>
						<div class="text-4xl text-white">SYSTEM</div>
						<div class="flex gap-2">
							<div class="h-4 w-full bg-white/20">
								<div class="h-full w-2/3 bg-primary"></div>
							</div>
						</div>
					</div>
                    
                    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        {#if mounted}
                            <div class="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scanline_4s_linear_infinite]"></div>
                        {/if}
                    </div>
				</div>
			</div>

			<div
				class="absolute -top-4 left-20 border-2 border-black bg-accent px-4 py-2 font-head text-xs shadow-retro transition-all hover:-rotate-3"
			>
				FIZZ = %3
			</div>
			<div
				class="absolute bottom-10 right-10 border-2 border-black bg-white px-4 py-2 font-head text-xs shadow-retro transition-all hover:rotate-6"
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

			<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
				{#each ['FAST', 'BOLD', 'HARD', 'RETRO'] as word (word)}
					<div
						class="flex items-center justify-center border-2 border-black bg-white p-4 font-head text-sm shadow-retro transition-transform hover:-translate-y-1"
					>
						{word}
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
</style>
