<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Input from '$lib/components/Input.svelte';
	import Title from '$lib/components/Title.svelte';
	import { toast } from 'svelte-sonner';

	let email = $state('');
	let showError = $state(false);

	function onsubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!email || !email.includes('@')) {
			showError = true;
			return;
		}
		toast.promise<{ name: string }>(
			() => new Promise((resolve) => setTimeout(() => resolve({ name: 'Correo' }), 1000)),
			{
				loading: 'Cargando...',
				success: (data) => `${data.name} de recuperación enviado.`,
				error: 'Error'
			}
		);
		setTimeout(() => {
			history.back();
		}, 1500);
	}
</script>

<svelte:head>
	<title>Recuperar Contraseña - Goodental</title>
</svelte:head>

<div class="flex h-screen flex-col items-center gap-8 p-6">
	<Header href="/login">
		<Title />
	</Header>
	<main class="absolute top-1/2 right-6 left-6 -translate-y-1/2 space-y-8 self-stretch">
		<header class="space-y-1 text-center">
			<h1 class="title">Recuperar Acceso</h1>
			<p>Te enviaremos ayuda para entrar.</p>
		</header>
		<form class="flex flex-col gap-4" {onsubmit}>
			<Input
				id="email"
				label="Correo Electrónico"
				type="email"
				required
				aria-invalid={showError}
				oninput={() => (showError = false)}
				bind:value={email}
			/>
			<button type="submit" class="btn btn-primary">Continuar</button>
		</form>
	</main>
</div>
