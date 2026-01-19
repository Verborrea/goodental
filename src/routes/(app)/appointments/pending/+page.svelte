<script>
	import Header from '$lib/components/Header.svelte';
	import { Calendar, Clock, HandCoins } from '@lucide/svelte';
	import Card from '$lib/components/Card.svelte';
	import { toast } from 'svelte-sonner';

	function addReminder() {
		toast.success('Recordatorio agregado a tu calendario.');
	}

	function cancel() {
		toast.error('Cita cancelada.');
		history.back();
	}
</script>

<Header href="/appointments" label="Cita • Mar 20 ago" />
<article class="flex flex-col gap-4">
	<header class="space-y-1">
		<h1 class="title">Limpieza y Profilaxis</h1>
		<p class="font-medium">Duración: 45 min</p>
	</header>
	<section class="flex items-center gap-2">
		<img
			src="https://png.pngtree.com/png-clipart/20240406/original/pngtree-beautiful-female-doctor-photo-png-image_14764634.png"
			class="aspect-square size-12 shrink-0 rounded-full bg-sky-400"
			alt="Doctora"
		/>
		<div class="space-y-1 leading-none">
			<p class="font-medium text-base-fg">Dra. Iréne Flores</p>
			<p>Odontóloga general</p>
		</div>
	</section>
	<div class="self-start rounded-full bg-green-500 px-3 py-1.5 text-sm text-white">Confirmada</div>
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
			<span>Pago en clínica</span>
		</p>
	</section>
	<Card title="Notas" small>
		<ul class="list-disc ps-4">
			<li>Traer documento de identidad.</li>
			<li>No comer 30 min antes.</li>
		</ul>
	</Card>
	<div class="grid gap-2">
		<button type="button" class="btn btn-primary" onclick={addReminder}>Agregar Recordatorio</button
		>
		<div class="grid grid-cols-2 gap-2">
			<a href="/appointments" class="btn btn-secondary">Atrás</a>
			<button type="button" class="btn btn-error" onclick={cancel}>Cancelar</button>
		</div>
	</div>
</article>
