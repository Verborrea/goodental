<script lang="ts">
	import './layout.css';
	import { Toaster } from 'svelte-sonner';

	let { children } = $props();
</script>

<Toaster position="top-center" />
{@render children()}
