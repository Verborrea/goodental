<script>
	let { children = null, title, small = false } = $props();
</script>

<section class="grid gap-4 rounded-2xl bg-input-bg px-4 py-5" class:!gap-2={small}>
	<h2 class="subtitle">{title}</h2>
	{@render children()}
</section>
