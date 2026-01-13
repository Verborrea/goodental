<script>
	import Header from '$lib/components/Header.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<div class="flex h-screen flex-col items-center justify-between gap-8 p-6">
	<Header>
		<Title />
	</Header>
	<main class="space-y-8 self-stretch">
		<h1 class="title text-center">Iniciar Sesión</h1>
		<form class="flex flex-col gap-4">
			<input type="text" />
			<input type="text" />
			<a href="/" class="link self-end">¿Olvidó su contraseña?</a>
			<button type="submit" class="btn btn-primary">Continuar</button>
		</form>
	</main>
	<footer class="text-center text-lg leading-5.5 text-muted-fg">
		<p>¿No tiene una cuenta?</p>
		<a href="/signup" class="link">Cree una ahora</a>
	</footer>
</div>
