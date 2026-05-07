<script lang="ts">
	import { gameState } from '$lib/state.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import { Badge } from '$lib/components/ui/badge';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import { Shimmer } from '@shimmer-from-structure/svelte'; // Import Shimmer component
	import { browser } from '$app/environment';

	function formatDate(isoString: string) {
		const date = new Date(isoString);
		return (
			date.toLocaleDateString(undefined, {
				month: 'short',
				day: 'numeric'
			}) +
			' @ ' +
			date.toLocaleTimeString(undefined, {
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			})
		);
	}

	function handleClear() {
		if (confirm('ERASE ALL TERMINAL DATA? THIS ACTION CANNOT BE UNDONE.')) {
			gameState.clearHistory();
		}
	}
</script>

{#snippet historyTable()}
	{#if gameState.loading}
		<div class="relative overflow-hidden border-4 border-black bg-white shadow-retro-lg">
			<Table.Root>
				<Table.Header class="bg-black text-white">
					<Table.Row class="border-b-2 border-black hover:bg-black">
						<Table.Head class="h-12 font-head text-xs tracking-widest text-white uppercase"
							>TIMESTAMP</Table.Head
						>
						<Table.Head
							class="h-12 text-right font-head text-xs tracking-widest text-white uppercase"
							>SCORE</Table.Head
						>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each Array(3), i (i)}
						<Table.Row class="border-b-2 border-black transition-colors last:border-0">
							<Table.Cell class="py-4 font-mono text-xs font-bold uppercase">
								<span class="mr-3 text-muted-foreground">[00]</span>
								JAN 01 @ 00:00
							</Table.Cell>
							<Table.Cell class="py-4 text-right">
								<Badge
									variant="secondary"
									class="border-2 border-black px-3 py-1 font-head text-lg"
								>
									000
								</Badge>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	{:else if gameState.history.length === 0}
		<Card.Root class="border-4 border-dashed border-muted p-12 text-center shadow-none">
			<Card.Content class="flex flex-col items-center gap-8">
				<p class="font-sans text-xl font-bold tracking-widest text-muted-foreground uppercase">
					No mission logs found.
				</p>
				<Button href="/game" size="lg" class="border-4 border-black py-8 font-head text-2xl">
					INITIATE GAME
				</Button>
			</Card.Content>
		</Card.Root>
	{:else}
		<div class="relative overflow-hidden border-4 border-black bg-white shadow-retro-lg">
			<Table.Root>
				<Table.Header class="bg-black text-white">
					<Table.Row class="border-b-2 border-black hover:bg-black">
						<Table.Head class="h-12 font-head text-xs tracking-widest text-white uppercase"
							>TIMESTAMP</Table.Head
						>
						<Table.Head
							class="h-12 text-right font-head text-xs tracking-widest text-white uppercase"
							>SCORE</Table.Head
						>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each gameState.history as record, i (record.date)}
						<Table.Row
							class="border-b-2 border-black transition-colors last:border-0 hover:bg-accent/30"
						>
							<Table.Cell class="py-4 font-mono text-xs font-bold uppercase">
								<span class="mr-3 text-muted-foreground"
									>[{(i + 1).toString().padStart(2, '0')}]</span
								>
								{formatDate(record.date)}
							</Table.Cell>
							<Table.Cell class="py-4 text-right">
								<Badge
									variant={i === 0 ? 'default' : 'secondary'}
									class="border-2 border-black px-3 py-1 font-head text-lg"
								>
									{record.score.toString().padStart(3, '0')}
								</Badge>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	{/if}
{/snippet}

<div class="flex flex-col gap-10">
	<div class="flex items-center justify-between border-l-8 border-black pl-4">
		<h1 class="font-head text-4xl tracking-tighter md:text-5xl">TOP RECORDS</h1>
		<Button
			href="/"
			variant="outline"
			class="border-2 border-black px-4 py-6 font-head text-xs shadow-retro"
		>
			<ArrowLeft class="mr-2 size-4" /> ESC
		</Button>
	</div>

	{#if browser}
		<Shimmer loading={gameState.loading} fallbackBorderRadius={0}>
			{@render historyTable()}
		</Shimmer>
	{:else}
		{@render historyTable()}
	{/if}

	<div class="flex flex-col items-center gap-6 pt-6">
		<Button
			href="/game"
			variant="default"
			class="w-full max-w-xs border-4 border-black py-8 font-head text-2xl"
		>
			RETRY MISSION
		</Button>

		<Button
			variant="link"
			onclick={handleClear}
			class="font-head text-[10px] tracking-[0.2em] uppercase opacity-50 transition-all hover:text-destructive hover:opacity-100"
		>
			[ FORMAT SYSTEM MEMORY ]
		</Button>
	</div>
</div>
