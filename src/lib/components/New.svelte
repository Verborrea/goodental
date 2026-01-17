<script lang="ts">
	import type { Cita } from '$lib/types';
	import { ExternalLink } from '@lucide/svelte';

	let { cita }: { cita: Cita } = $props();
</script>

<a
	href="/appointments/pending"
	class="group flex flex-col gap-3 rounded-2xl bg-primary-bg px-6 py-5 text-white/75"
>
	<header class="space-y-2">
		<div class="flex justify-between">
			<p>{cita.doc}</p>
			<ExternalLink class="text-white opacity-0 group-hover:opacity-100" strokeWidth={2.5} />
		</div>
		<h3 class="title text-[28px] text-white">{cita.title}</h3>
	</header>
	<p>Tienes una cita programada para el {cita.date}</p>
	<p>Hora: {cita.from} - {cita.to}</p>
	<div class="flex gap-1 font-medium">
		<div class="rounded-full bg-green-500 px-3 py-1.5 text-sm text-white">Confirmada</div>
		<div class="rounded-full bg-amber-500 px-3 py-1.5 text-sm text-white">Presencial</div>
	</div>
</a>
