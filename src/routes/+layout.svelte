<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { resolve } from '$app/paths';
	import { cn } from '$lib/utils';
	import Logo from '$lib/components/logo.svelte';
	import AchievementNotification from '$lib/components/achievement-notification.svelte';
	import UserIcon from '@lucide/svelte/icons/user';
	import HomeIcon from '@lucide/svelte/icons/home';
	import HistoryIcon from '@lucide/svelte/icons/history';
	import { setShimmerConfig } from '@shimmer-from-structure/svelte';

	let { children } = $props();

	// Global Shimmer Configuration (Neo-Brutalist Style)
	setShimmerConfig({
		shimmerColor: 'rgba(255, 219, 51, 0.4)', // --primary opacity
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		duration: 2,
		fallbackBorderRadius: 0 // Sharp corners
	});

	let scrollY = $state(0);
	let isFloating = $derived(scrollY > 50);
</script>

<svelte:window bind:scrollY />

<div
	class="relative flex min-h-screen w-full flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground"
>
	<AchievementNotification />
	<!-- CRT Scanline Overlay -->
	<div
		class="pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-overlay"
		style="background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 118, 0.06)); background-size: 100% 4px, 3px 100%;"
	></div>

	<!-- Vignette Effect -->
	<div
		class="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]"
	></div>

	<!-- Background Texture Pattern -->
	<div
		class="pointer-events-none absolute inset-0 z-0 opacity-[0.1]"
		style="background-image: radial-gradient(var(--border) 2px, transparent 0); background-size: 32px 32px;"
	></div>

	<!-- Main Header / Navigation -->
	<div
		class={cn(
			'sticky top-0 z-30 w-full transition-all duration-500',
			isFloating ? 'top-4 px-2 md:px-4' : 'p-0'
		)}
	>
		<header
			class={cn(
				'relative border-2 border-black bg-background px-4 py-2 transition-all duration-500 md:p-4',
				isFloating
					? 'mx-auto max-w-6xl rounded-2xl shadow-retro'
					: 'max-w-none rounded-none border-transparent border-b-black'
			)}
		>
			<div
				class={cn(
					'mx-auto flex items-center justify-between transition-all duration-500',
					isFloating ? 'w-full' : 'max-w-6xl'
				)}
			>
				<a
					href={resolve('/')}
					class="inline-flex aspect-square items-center gap-2 rounded-full border-2 border-black bg-primary p-0.5 font-head text-[10px] shadow-retro md:p-2 md:text-xs"
				>
					<Logo class="h-5" />
				</a>

				<nav class="flex items-center gap-1 md:gap-3">
					<Button
						href="/"
						variant={page.url.pathname === '/' ? 'default' : 'outline'}
						size="sm"
						class="h-8 font-head text-[10px] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:h-9 md:text-xs"
					>
						<HomeIcon class="size-3 md:mr-1" />
						<span class="hidden md:inline">LOBBY</span>
					</Button>
					<Button
						href="/profiles"
						variant={page.url.pathname === '/profiles' ? 'default' : 'outline'}
						size="sm"
						class="h-8 font-head text-[10px] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:h-9 md:text-xs"
					>
						<UserIcon class="size-3 md:mr-1" />
						<span class="hidden md:inline">PROFILE</span>
					</Button>
					<Button
						href="/history"
						variant={page.url.pathname === '/history' ? 'default' : 'outline'}
						size="sm"
						class="h-8 font-head text-[10px] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:h-9 md:text-xs"
					>
						<HistoryIcon class="size-3 md:mr-1" />
						<span class="hidden md:inline">HISTORY</span>
					</Button>
				</nav>
			</div>
		</header>
	</div>

	<!-- Content Area -->
	<main class="relative z-10 flex flex-1 flex-col p-4 md:p-8">
		<div class="mx-auto w-full max-w-6xl">
			{@render children()}
		</div>
	</main>

	<!-- Footer -->
	<footer
		class="relative z-30 flex flex-col justify-center gap-2 border-t-2 border-black bg-background px-4 py-6 text-center font-head text-[8px] tracking-[0.2em] uppercase opacity-60 md:flex-row md:py-10 md:text-[10px]"
	>
		<span>&copy; izprstyo 2026.</span>
		<span>Make it FIZZ, make it BUZZ, make it FUN!</span>
	</footer>
</div>
