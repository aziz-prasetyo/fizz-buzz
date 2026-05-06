<script lang="ts">
	import './layout.css';
	let { children } = $props();
</script>

<div
	class="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground"
>
	<!-- Retro Dot Grid Background -->
	<div
		class="pointer-events-none fixed inset-0 z-0 opacity-[0.05]"
		style="background-image: radial-gradient(circle, #000 1.5px, transparent 1.5px); background-size: 30px 30px;"
	></div>

	<!-- CRT Scanline Overlay -->
	<div
		class="pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-overlay"
		style="background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 118, 0.06)); background-size: 100% 4px, 3px 100%;"
	></div>

	<!-- Vignette Effect -->
	<div
		class="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]"
	></div>

	<main class="relative z-10 mx-auto max-w-3xl p-6 md:p-12 lg:p-16">
		<header class="mb-12 flex flex-col items-center gap-4 text-center md:mb-16">
			<div
				class="inline-flex items-center gap-2 border-2 border-black bg-primary px-3 py-1 font-head text-xs shadow-retro"
			>
				<span class="animate-pulse">●</span> ARCADE SYSTEM v1.0.5
			</div>
		</header>

		{@render children()}

		<footer
			class="mt-20 border-t-2 border-black pt-8 text-center font-head text-[10px] tracking-widest uppercase opacity-50"
		>
			&copy; 2026 FIZ-BUZ INDUSTRIES // INFINITE CHALLENGE DIVISION
		</footer>
	</main>
</div>

<style>
	:global(html) {
		scrollbar-width: thin;
		scrollbar-color: var(--primary) var(--background);
	}
	:global(::selection) {
		background: var(--primary);
		color: var(--primary-foreground);
	}
</style>
