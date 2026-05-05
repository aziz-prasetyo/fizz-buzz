<script lang="ts">
	import { resolve } from '$app/paths';
	import { gameState } from '$lib/state.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import { Badge } from '$lib/components/ui/badge';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';

	function formatDate(isoString: string) {
		return new Date(isoString).toLocaleString(undefined, {
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	function handleClear() {
		if (confirm('Are you sure you want to clear all history and high scores?')) {
			gameState.clearHistory();
		}
	}
</script>

<div class="flex flex-col gap-8">
	<div class="flex items-center justify-between">
		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground">History</h1>
		<Button href={resolve('/')} variant="ghost" class="gap-2">
			<ArrowLeft class="size-4" />
			Back to Home
		</Button>
	</div>

	{#if gameState.history.length === 0}
		<Card.Root class="p-12 text-center">
			<Card.Content class="flex flex-col items-center gap-6">
				<p class="text-lg text-muted-foreground">No games played yet. Go set some records!</p>
				<Button href={resolve('/game')} size="lg" class="font-bold">Play Now</Button>
			</Card.Content>
		</Card.Root>
	{:else}
		<Card.Root>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-50 font-bold tracking-widest uppercase">Date</Table.Head>
						<Table.Head class="text-right font-bold tracking-widest uppercase">Score</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each gameState.history as record (record.date)}
						<Table.Row>
							<Table.Cell class="text-muted-foreground">{formatDate(record.date)}</Table.Cell>
							<Table.Cell class="text-right">
								<Badge variant="secondary" class="text-base font-bold">
									{record.score}
								</Badge>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</Card.Root>

		<div class="flex justify-center pt-4">
			<Button
				variant="link"
				onclick={handleClear}
				class="font-medium text-destructive hover:text-destructive/80"
			>
				Clear History & Reset High Score
			</Button>
		</div>
	{/if}
</div>
