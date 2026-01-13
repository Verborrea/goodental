<script>
	import dent from '$lib/assets/dent.avif';
</script>

<div
	class="mx-auto flex h-screen max-w-md flex-col items-center justify-center gap-8 px-6 text-center"
>
	<img src={dent} alt="Dentista con indumentaria" class="w-65" />
	<h1 class="title">
		Bienvenido a <span class="text-primary-bg">Good</span>ental
	</h1>
	<p class="text-sm text-muted-fg">
		Tu salud dental en un solo lugar.<br />Agenda y gestiona tus citas fácilmente.
	</p>
	<div class="flex w-full flex-col gap-2">
		<a href="/signup" class="btn btn-primary">Crear Cuenta</a>
		<a href="/login" class="btn btn-secondary">Ya tengo una</a>
	</div>
</div>
