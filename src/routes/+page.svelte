<script>
	import Welcome from './Welcome.svelte';
	import Splash from './Splash.svelte';
	import { onMount } from 'svelte';

	let showSplash = $state(true);

	onMount(() => {
		const timer = setTimeout(() => {
			showSplash = false;
		}, 4000);

		return () => clearTimeout(timer);
	});
</script>

<svelte:head>
	<title>Bienvenido a Goodental</title>
</svelte:head>

{#if showSplash}
	<Splash />
{:else}
	<Welcome />
{/if}
