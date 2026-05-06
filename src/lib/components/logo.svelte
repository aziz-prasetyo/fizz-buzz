<script lang="ts">
	import { cn } from '$lib/utils';
	let { class: className } = $props();
</script>

<svg
	viewBox="0 0 32 32"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={cn('size-6 shrink-0', className)}
>
	<!-- Neo-Brutalist Circle Base -->
	<circle cx="16" cy="16" r="14" fill="var(--primary)" stroke="black" stroke-width="2.5" />
	<!-- Fizz (Triangle - 3 sides) -->
	<path
		d="M16 8L24 22H8L16 8Z"
		fill="black"
		stroke="black"
		stroke-width="1"
		stroke-linejoin="round"
	/>
	<!-- Buzz (Lightning Bolt) -->
	<path
		d="M18 11L13 17H19L14 23"
		stroke="var(--primary)"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
