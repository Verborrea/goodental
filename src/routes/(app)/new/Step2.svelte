<script>
	import Select from '$lib/components/Select.svelte';

	let { selectedDoc = $bindable(), retroceder, avanzar } = $props();

	const docs = [
		{
			value: 'Dr. José Paredes',
			label: 'Dr. José Paredes'
		},
		{
			value: 'Dr. María López',
			label: 'Dr. María López'
		},
		{
			value: 'Dr. Carlos Urquizo',
			label: 'Dr. Carlos Urquizo'
		},
		{
			value: 'Dr. Ana Martínez',
			label: 'Dr. Ana Martínez'
		}
	];

	function omitir() {
		selectedDoc = '';
		avanzar();
	}
</script>

<article class="flex flex-col gap-8">
	<header class="space-y-2 text-center">
		<h1 class="title text-2xl font-bold">Profesional</h1>
		<p class="subtitle font-medium text-muted-fg">¿Desea a alguien en especial?</p>
	</header>

	<Select id="servicio" bind:value={selectedDoc} options={docs} />

	<div class="grid gap-2">
		<button onclick={avanzar} class="btn btn-primary" disabled={!selectedDoc}> Siguiente </button>
		<div class="grid grid-cols-2 gap-2">
			<button type="button" class="btn btn-secondary" onclick={retroceder}>Atrás</button>
			<button type="button" class="btn btn-secondary" onclick={omitir}>Omitir</button>
		</div>
	</div>
</article>
