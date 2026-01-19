<script>
	import Header from '$lib/components/Header.svelte';
	import Steps from './Steps.svelte';
	import Step1 from './Step1.svelte';
	import Step2 from './Step2.svelte';
	import Step3 from './Step3.svelte';
	import Step4 from './Step4.svelte';

	let current = $state(1);

	let selectedService = $state('');
	let selectedDoc = $state('');
	let date = $state('');
	let hour = $state('');

	function avanzar() {
		if (current < 4) current++;
	}

	function retroceder() {
		if (current > 1) current--;
	}
</script>

<Header href="/home" label="Agendar Cita" />
<Steps {current} />
<div class="absolute top-1/2 right-6 left-6 -translate-y-1/2 space-y-8 self-stretch">
	{#if current === 1}
		<Step1 bind:selectedService {avanzar} />
	{:else if current === 2}
		<Step2 bind:selectedDoc {retroceder} {avanzar} />
	{:else if current === 3}
		<Step3 bind:date bind:hour {retroceder} {avanzar} />
	{:else if current === 4}
		<Step4 {retroceder} />
	{/if}
</div>
