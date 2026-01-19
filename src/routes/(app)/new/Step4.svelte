<script>
	import { goto } from '$app/navigation';
	import { toast } from 'svelte-sonner';

	let { retroceder } = $props();

	function confirmar() {
		toast.success('Cita agendada con éxito');
		goto('/appointments');
	}
</script>

<article class="flex flex-col gap-8">
	<header class="space-y-2 text-center">
		<h1 class="title text-2xl font-bold">Confirmación</h1>
		<p class="subtitle font-medium text-muted-fg">¿Todo está correcto?</p>
	</header>
	<div class="grid grid-cols-2 gap-2">
		<button onclick={retroceder} class="btn btn-secondary"> Atrás </button>
		<button onclick={confirmar} class="btn btn-green"> Agendar </button>
	</div>
</article>
