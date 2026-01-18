<script>
	import Header from '$lib/components/Header.svelte';
	import { Mail, MapPin, Phone, PillBottle, Syringe, TriangleAlert } from '@lucide/svelte';
	import { all_citas } from '$lib/data';
	import { page } from '$app/state';
	import Old from '$lib/components/Old.svelte';
	import New from '$lib/components/New.svelte';

	let old = $derived(page.url.searchParams.get('type') === 'old');
	let filteredCitas = $derived(all_citas.filter((c) => c.finished === old));
</script>

<Header href="/home" label="Mis Citas" />
<article class="flex flex-col gap-4">
	<nav
		class="relative flex gap-1 rounded-xl bg-secondary-bg p-1 text-center text-sm font-medium text-base-fg"
	>
		<div
			class="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg bg-white shadow transition"
			class:old
		></div>
		<a href="/appointments?type=new" class="relative grow rounded-lg py-2">Pendientes</a>
		<a href="/appointments?type=old" class="relative grow rounded-lg py-2">Realizadas</a>
	</nav>
	{#each filteredCitas as cita}
		{#if cita.finished}
			<Old {cita} />
		{:else}
			<New {cita} />
		{/if}
	{/each}
</article>

<style>
	.old {
		transform: translateX(100%);
	}
</style>
