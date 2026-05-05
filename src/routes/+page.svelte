<script lang="ts">
	import { resolve } from '$app/paths';
	import { gameState } from '$lib/state.svelte';
</script>

<div class="mt-12 flex flex-col items-center justify-center space-y-8 text-center">
	<h1 class="text-5xl font-extrabold tracking-tight text-indigo-600">Fizz Buzz</h1>

	<p class="max-w-md text-xl text-slate-600">
		Can you survive the infinite challenge? 10 seconds per question, don't miss a beat!
	</p>

	<div class="w-full max-w-sm rounded-2xl border border-slate-100 bg-white p-8 shadow-xl">
		<h2 class="mb-2 text-sm font-semibold tracking-wider text-slate-400 uppercase">High Score</h2>
		<div class="text-6xl font-black text-slate-800">{gameState.highScore}</div>
	</div>

	<div class="flex w-full max-w-md flex-col gap-4 sm:flex-row">
		<a
			href={resolve('/game')}
			class="flex-1 rounded-xl bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-indigo-200 active:scale-95"
		>
			Start New Game
		</a>
		<a
			href={resolve('/results')}
			class="flex-1 rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:shadow-md active:scale-95"
		>
			View History
		</a>
	</div>
</div>
