<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';

	export const badgeVariants = tv({
		base: 'h-6 gap-1 rounded border-2 border-black px-2.5 py-0.5 text-xs font-head uppercase tracking-tight transition-all duration-200 group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap shadow-md',
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground',
				secondary: 'bg-secondary shadow-[var(--color-primary)] text-secondary-foreground',
				destructive: 'bg-destructive text-destructive-foreground',
				outline: 'bg-background text-foreground',
				ghost:
					'bg-transparent border-transparent shadow-none hover:bg-accent hover:border-black hover:shadow-md',
				link: 'text-primary underline-offset-4 hover:underline border-transparent shadow-none'
			},
			isLink: {
				true: 'cursor-pointer hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:shadow active:shadow-none'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = 'default',
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		variant?: BadgeVariant;
	} = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	bind:this={ref}
	data-slot="badge"
	{href}
	class={cn(badgeVariants({ variant, isLink: !!href }), className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
