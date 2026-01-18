<script>
	let { service } = $props();
</script>

<article class="overflow-hidden rounded-2xl bg-input-bg">
	<img src={service.img} alt="Imagen del diente" />
	<div class="flex flex-col gap-3 px-6 py-5">
		<h1 class="subtitle">{service.name}</h1>
		<p>{service.text}</p>
		<a href="/" class="link text-center">Averigua más aquí</a>
	</div>
</article>
