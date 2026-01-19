<script>
	import Select from '$lib/components/Select.svelte';

	let { selectedService = $bindable(), avanzar } = $props();

	const services = [
		{
			value: 'limpieza',
			label: 'Limpieza Dental',
			description: 'Eliminación de placa y sarro para prevenir caries y enfermedades de las encías.'
		},
		{
			value: 'blanqueamiento',
			label: 'Blanqueamiento',
			description: 'Tratamiento estético para aclarar varios tonos el color de tus dientes.'
		},
		{
			value: 'ortodoncia',
			label: 'Ortodoncia',
			description:
				'Corrección de la posición de los dientes y problemas de mordida con brackets o alineadores.'
		},
		{
			value: 'implante',
			label: 'Implante Dental',
			description:
				'Sustitución de raíces dentales perdidas con pernos de titanio y coronas de alta calidad.'
		}
	];

	// Svelte 5: Reactividad derivada para obtener la descripción actual
	let currentDescription = $derived(
		services.find((s) => s.value === selectedService)?.description ??
			'Selecciona un servicio para ver los detalles.'
	);
</script>

<article class="flex flex-col gap-8">
	<header class="space-y-2 text-center">
		<h1 class="title text-2xl font-bold">Servicio</h1>
		<p class="subtitle font-medium text-muted-fg">Elige uno de nuestros servicios.</p>
	</header>

	<div class="space-y-2">
		<Select id="servicio" bind:value={selectedService} options={services} />
		<p class="text-sm leading-[1.2]">
			{currentDescription}
		</p>
	</div>

	<button onclick={avanzar} class="btn btn-primary" disabled={!selectedService}> Siguiente </button>
</article>
