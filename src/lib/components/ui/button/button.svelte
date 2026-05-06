<script lang="ts" module>
	import { cn, type WithElementRef } from '$lib/utils.js';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';

	export const buttonVariants = tv({
		base: 'font-head transition-all rounded cursor-pointer duration-200 font-medium flex justify-center items-center disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary uppercase tracking-tight inline-flex shrink-0 whitespace-nowrap [&_svg]:pointer-events-none [&_svg]:shrink-0',
		variants: {
			variant: {
				default:
					'shadow-md hover:shadow active:shadow-none bg-primary text-primary-foreground border-2 border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-primary/90',
				secondary:
					'shadow-md hover:shadow active:shadow-none bg-secondary shadow-[var(--color-primary)] text-secondary-foreground border-2 border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-secondary/90',
				outline:
					'shadow-md hover:shadow active:shadow-none bg-transparent border-black text-foreground border-2 transition hover:translate-y-1 active:translate-y-2 active:translate-x-1',
				link: 'bg-transparent hover:underline text-primary',
				ghost: 'bg-transparent hover:bg-accent text-foreground',
				accent:
					'shadow-md hover:shadow active:shadow-none bg-accent text-accent-foreground border-2 border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-accent/90',
				destructive:
					'shadow-md hover:shadow active:shadow-none bg-destructive text-destructive-foreground border-2 border-black transition hover:translate-y-1 active:translate-y-2 active:translate-x-1 hover:bg-destructive/90'
			},
			size: {
				default: 'px-4 py-1.5 text-base h-10',
				sm: 'px-3 py-1 text-sm shadow hover:shadow-sm h-8',
				lg: 'px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg h-12',
				icon: 'p-2 size-10',
				xs: 'px-2 py-1 text-xs h-7',
				'icon-xs': 'p-1 size-7',
				'icon-sm': 'p-1.5 size-8',
				'icon-lg': 'p-3 size-12'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	export type ButtonSize = VariantProps<typeof buttonVariants>['size'];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	let {
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		href = undefined,
		type = 'button',
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();

	const resolvedHref = $derived.by(() => {
		if (disabled || !href) return undefined;
		if (href.startsWith('/')) {
			return resolve(href as Pathname);
		}
		return href;
	});
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		href={resolvedHref}
		aria-disabled={disabled}
		role={disabled ? 'link' : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
