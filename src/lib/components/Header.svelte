<script>
	import { ChevronLeft } from '@lucide/svelte';

	let { children = null, href = '/', label = 'Título' } = $props();
</script>

<header class="flex w-full items-center justify-between gap-6">
	<a {href} class="size-6 text-base-fg">
		<ChevronLeft />
	</a>
	{#if children}
		{@render children()}
	{:else}
		<h1 class="subtitle">
			{label}
		</h1>
	{/if}
	<div class="size-6"></div>
</header>
