<script lang="ts">
	import './layout.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-slate-50 font-sans text-slate-900">
	<main class="mx-auto max-w-2xl p-6 md:p-12">
		{@render children()}
	</main>
</div>
