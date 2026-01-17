<script>
	import dent from '$lib/assets/dent.avif';
</script>

<main class="flex h-screen flex-col items-center justify-center gap-8 px-6">
	<img src={dent} alt="Dentista con indumentaria" class="w-65" />
	<header class="space-y-2 text-center">
		<h1 class="title">
			Bienvenido a <span class="text-primary-bg">Good</span>ental
		</h1>
		<p>
			Tu salud dental en un solo lugar.<br />Agenda y gestiona tus citas fácilmente.
		</p>
	</header>
	<nav class="flex w-full flex-col gap-2">
		<a href="/signup" class="btn btn-primary">Crear Cuenta</a>
		<a href="/login" class="btn btn-secondary">Ya tengo una</a>
	</nav>
</main>
