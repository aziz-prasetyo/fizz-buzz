<script lang="ts">
	import './layout.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-background text-foreground antialiased">
	<main class="mx-auto max-w-2xl p-6 md:p-12">
		{@render children()}
	</main>
</div>
