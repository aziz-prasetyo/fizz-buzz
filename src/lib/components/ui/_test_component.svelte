<script lang="ts">
	import { Shimmer } from '@shimmer-from-structure/svelte';
	let { loading } = $props();
</script>

<Shimmer {loading}>
	<div>Hello World!</div>
</Shimmer>
