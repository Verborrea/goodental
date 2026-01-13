<script>
	import { ChevronLeft } from '@lucide/svelte';

	let { children, href = '/' } = $props();
</script>

<header class="flex w-full items-center justify-between gap-6">
	<a {href} class="size-6">
		<ChevronLeft />
	</a>
	{@render children()}
	<div class="size-6"></div>
</header>
