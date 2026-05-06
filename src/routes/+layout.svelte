<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import UserIcon from '@lucide/svelte/icons/user';
	import HomeIcon from '@lucide/svelte/icons/home';
	import TrophyIcon from '@lucide/svelte/icons/trophy';
	import HistoryIcon from '@lucide/svelte/icons/history';
	import PlayIcon from '@lucide/svelte/icons/play';

	let { children } = $props();
</script>

<div
	class="relative flex min-h-screen w-full flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground"
>
	<!-- CRT Scanline Overlay -->
	<div
		class="pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-overlay"
		style="background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 118, 0.06)); background-size: 100% 4px, 3px 100%;"
	></div>

	<!-- Vignette Effect -->
	<div
		class="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]"
	></div>

	<!-- Main Header / Navigation -->
	<header class="relative z-30 border-b-2 border-black bg-background p-3 shadow-sm md:p-4">
		<div class="mx-auto flex max-w-6xl items-center justify-between">
			<a
				href="/"
				class="inline-flex items-center gap-2 border-2 border-black bg-primary px-3 py-1 font-head text-[10px] shadow-retro transition-transform hover:scale-105 active:scale-95 md:text-xs"
			>
				<span class="animate-pulse text-black">●</span> ARCADE SYSTEM v1.0.5
			</a>

			<nav class="flex items-center gap-1 md:gap-3">
				<Button
					href="/"
					variant={page.url.pathname === '/' ? 'default' : 'outline'}
					size="sm"
					class="h-8 font-head text-[10px] md:h-9 md:text-xs"
				>
					<HomeIcon class="mr-1 size-3" /> LOBBY
				</Button>
				<Button
					href="/profiles"
					variant={page.url.pathname === '/profiles' ? 'default' : 'outline'}
					size="sm"
					class="h-8 font-head text-[10px] md:h-9 md:text-xs"
				>
					<UserIcon class="mr-1 size-3" /> PROFILE
				</Button>
				<Button
					href="/game"
					variant={page.url.pathname === '/game' ? 'default' : 'outline'}
					size="sm"
					class="h-8 font-head text-[10px] md:h-9 md:text-xs"
				>
					<PlayIcon class="mr-1 size-3" /> GAME
				</Button>
				<Button
					href="/result"
					variant={page.url.pathname === '/result' ? 'default' : 'outline'}
					size="sm"
					class="h-8 font-head text-[10px] md:h-9 md:text-xs"
				>
					<TrophyIcon class="mr-1 size-3" /> RESULT
				</Button>
				<Button
					href="/history"
					variant={page.url.pathname === '/history' ? 'default' : 'outline'}
					size="sm"
					class="h-8 font-head text-[10px] md:h-9 md:text-xs"
				>
					<HistoryIcon class="mr-1 size-3" /> HISTORY
				</Button>
			</nav>
		</div>
	</header>

	<!-- Content Area -->
	<main class="relative z-10 flex flex-1 flex-col p-4 md:p-8">
		<div class="mx-auto w-full max-w-6xl">
			{@render children()}
		</div>
	</main>

	<!-- Footer -->
	<footer
		class="relative z-30 border-t-2 border-black bg-background p-4 text-center font-head text-[8px] tracking-[0.2em] uppercase opacity-60 md:text-[10px]"
	>
		&copy; 2026 FIZ-BUZ INDUSTRIES // INFINITE CHALLENGE DIVISION // SYSTEM_ALL_STATIONS_IDLE
	</footer>
</div>

<style>
	:global(::selection) {
		background: var(--primary);
		color: var(--primary-foreground);
	}
</style>
