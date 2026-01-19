<script>
	import Header from '$lib/components/Header.svelte';
	import { toast } from 'svelte-sonner';

	function agendar() {
		toast.success('Cita agendada con éxito');
	}
</script>

<Header href="/services" label="Servicios" />
<section
	class="fondo flex flex-col items-center gap-4 rounded-2xl bg-primary-bg px-6 py-16 text-center"
>
	<h1 class="title text-4xl font-bold text-white">Limpieza y Profilaxis Dental</h1>
	<p class="subtitle font-medium text-white">El cuidado preventivo que tu sonrisa necesita.</p>
</section>
<section class="space-y-2">
	<h2 class="subtitle">¿De qué trata?</h2>
	<p>
		La limpieza y profilaxis dental elimina la placa bacteriana y el sarro que no se quitan con el
		cepillado diario. Es un procedimiento sencillo, indoloro y fundamental para prevenir caries,
		gingivitis y mal aliento.
	</p>
</section>
<section class="space-y-2">
	<h2 class="subtitle">Beneficios Destacados</h2>
	<ul class="list-disc ps-4">
		<li>Previene enfermedades de encías</li>
		<li>Mantiene dientes más blancos y sanos</li>
		<li>Reduce el mal aliento</li>
		<li>Refuerza tu higiene diaria</li>
	</ul>
</section>
<section class="space-y-3">
	<h2 class="subtitle">Especialistas</h2>
	<div class="space-y-2">
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
		<section class="flex items-center gap-2">
			<img
				src="https://png.pngtree.com/png-clipart/20240406/original/pngtree-beautiful-female-doctor-photo-png-image_14764634.png"
				class="aspect-square size-12 shrink-0 rounded-full bg-sky-400"
				alt="Doctora"
			/>
			<div class="space-y-1 leading-none">
				<p class="font-medium text-base-fg">Dr. Joaquín Angulo</p>
				<p>Odontopediatra</p>
			</div>
		</section>
	</div>
</section>
<section class="flex flex-col gap-2">
	<h2 class="subtitle">Horarios</h2>
	<div class="space-y-1">
		<h3 class="font-medium text-base-fg">Lunes a Viernes</h3>
		<div class="flex flex-wrap gap-1">
			<p class="badge badge-blue">09:00 am</p>
			<p class="badge badge-blue">10:00 am</p>
			<p class="badge badge-blue">11:00 am</p>
			<p class="badge badge-blue">12:00 pm</p>
			<p class="badge badge-blue">01:00 pm</p>
			<p class="badge badge-blue">02:00 pm</p>
			<p class="badge badge-blue">03:00 pm</p>
			<p class="badge badge-blue">04:00 pm</p>
			<p class="badge badge-blue">05:00 pm</p>
			<p class="badge badge-blue">06:00 pm</p>
		</div>
	</div>
	<div class="space-y-1">
		<h3 class="font-medium text-base-fg">Sábados</h3>
		<div class="flex flex-wrap gap-1">
			<p class="badge badge-blue">09:00 am</p>
			<p class="badge badge-blue">10:00 am</p>
			<p class="badge badge-blue">11:00 am</p>
			<p class="badge badge-blue">12:00 pm</p>
			<p class="badge badge-blue">01:00 pm</p>
		</div>
	</div>
</section>
<section class="flex flex-col gap-2 text-center">
	<button type="button" class="btn btn-primary" onclick={agendar}> Agendar Cita </button>
	<p>Pago en clínica el día de la cita.</p>
</section>

<style>
	.fondo {
		background-image: url('/bg.avif');
		background-size: cover;
		background-position: center;
	}
</style>
