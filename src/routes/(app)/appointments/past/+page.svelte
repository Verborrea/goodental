<script>
	import Header from '$lib/components/Header.svelte';
	import { Calendar, Clock, HandCoins } from '@lucide/svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<Header href="/appointments" label="Cita • Mar 20 ago" />
<article class="flex flex-col gap-4">
	<header class="space-y-1">
		<h1 class="title">Limpieza y Profilaxis</h1>
		<p class="font-medium">Duración: 45 min</p>
	</header>
	<section class="flex items-center gap-2">
		<img
			src="https://bhagathospital.com/_next/image?url=https%3A%2F%2Fcdn.docfyn.com%2Fcom.harbor%2Fdocuments%2F2025%2F06%2F30%2F06cff5fbd9a4866ee9eaec59043366a390395ca5%2Fdr-dinesh-goel-2.webp&w=256&q=75"
			class="aspect-square size-12 shrink-0 rounded-full bg-sky-400"
			alt="Doctora"
		/>
		<div class="space-y-1 leading-none">
			<p class="font-medium text-base-fg">Dr. José Quiroz Quintanilla</p>
			<p>Odontóloga general</p>
		</div>
	</section>
	<div class="self-start rounded-full bg-green-500 px-3 py-1.5 text-sm text-white">Realizada</div>
	<section class="grid gap-2 leading-5.5 font-medium tracking-tight text-muted-fg">
		<p class="flex items-center gap-2">
			<Calendar class="size-4 shrink-0 stroke-[2.5]" />
			<span>2 de Septiembre de 2025</span>
		</p>
		<p class="flex items-center gap-2">
			<Clock class="size-4 shrink-0 stroke-[2.5]" />
			<span>10:00 - 10:45 AM</span>
		</p>
		<p class="flex items-center gap-2">
			<HandCoins class="size-4 shrink-0 stroke-[2.5]" />
			<span>S/ 60.00</span>
		</p>
	</section>
	<Card title="Notas" small>
		<ul class="list-disc ps-4">
			<li>Mejorar rutina de cepillado.</li>
			<li>No comer durante 2 horas.</li>
		</ul>
	</Card>
	<a href="/appointments?type=old" class="btn btn-secondary">Atrás</a>
</article>
