<script lang="ts">
	import { resolve } from '$app/paths';
	import { gameState } from '$lib/state.svelte';

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

<div class="space-y-8">
	<div class="flex items-center justify-between">
		<h1 class="text-4xl font-extrabold text-slate-800">History</h1>
		<a
			href={resolve('/')}
			class="flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700"
		>
			<span>&larr;</span> Back to Home
		</a>
	</div>

	{#if gameState.history.length === 0}
		<div class="rounded-2xl border border-slate-100 bg-white p-12 text-center shadow-sm">
			<p class="text-lg text-slate-400">No games played yet. Go set some records!</p>
			<a
				href={resolve('/game')}
				class="mt-6 inline-block rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white transition-colors hover:bg-indigo-700"
			>
				Play Now
			</a>
		</div>
	{:else}
		<div class="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
			<table class="w-full text-left">
				<thead class="border-b border-slate-100 bg-slate-50">
					<tr>
						<th class="px-6 py-4 text-xs font-bold tracking-widest text-slate-400 uppercase"
							>Date</th
						>
						<th
							class="px-6 py-4 text-right text-xs font-bold tracking-widest text-slate-400 uppercase"
							>Score</th
						>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-50">
					{#each gameState.history as record (record.date)}
						<tr class="transition-colors hover:bg-slate-50">
							<td class="px-6 py-4 text-slate-600">{formatDate(record.date)}</td>
							<td class="px-6 py-4 text-right">
								<span
									class="inline-block rounded-full bg-indigo-50 px-3 py-1 font-bold text-indigo-700"
								>
									{record.score}
								</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="flex justify-center pt-4">
			<button
				onclick={handleClear}
				class="text-sm font-medium text-red-400 transition-colors hover:text-red-600"
			>
				Clear History & Reset High Score
			</button>
		</div>
	{/if}
</div>
