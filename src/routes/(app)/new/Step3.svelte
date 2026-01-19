<script>
	import Input from '$lib/components/Input.svelte';
	import Option from '$lib/components/Option.svelte';

	let { date = $bindable(), hour = $bindable(), retroceder, avanzar } = $props();

	const options = ['10:00 am', '10:30 am', '11:00 am', '3:00 pm', '4:30 pm', '5:00 pm'];
</script>

<article class="flex flex-col gap-8">
	<header class="space-y-2 text-center">
		<h1 class="title text-2xl font-bold">Fecha y Hora</h1>
		<p class="subtitle font-medium text-muted-fg">¿Cuándo se llevará a cabo?</p>
	</header>
	<Input id="date" type="date" label="Seleccione un día" bind:value={date} />
	<div class="space-y-1">
		<p class="font-medium text-base-fg">Horarios disponibles</p>
		<div class="grid grid-cols-3 gap-2">
			{#each options as option}
				<Option bind:group={hour} value={option} />
			{/each}
		</div>
	</div>
	<div class="grid grid-cols-2 gap-2">
		<button type="button" class="btn btn-secondary" onclick={retroceder}>Atrás</button>
		<button type="button" class="btn btn-primary" disabled={!date || !hour} onclick={avanzar}
			>Continuar</button
		>
	</div>
</article>
