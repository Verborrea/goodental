<script>
	import Header from '$lib/components/Header.svelte';
	import Input from '$lib/components/Input.svelte';
	import Title from '$lib/components/Title.svelte';

	let email = $state('');
	let showError = $state(false);
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
		<form class="flex flex-col gap-4">
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
