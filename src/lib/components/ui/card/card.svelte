<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		size = 'default',
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & { size?: 'default' | 'sm' } = $props();
</script>

<div
	bind:this={ref}
	data-slot="card"
	data-size={size}
	class={cn(
		'group/card flex flex-col gap-4 overflow-hidden rounded border-2 border-black bg-card py-4 text-sm text-card-foreground shadow-md data-[size=sm]:gap-3 data-[size=sm]:py-3',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
