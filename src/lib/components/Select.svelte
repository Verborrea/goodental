<script lang="ts">
	import { ChevronsUpDown } from '@lucide/svelte';

	interface Option {
		value: string | number;
		label: string;
	}

	// Definimos las props con $props y el enlace bidireccional con $bindable
	let {
		id,
		value = $bindable(''),
		options = [] as Option[],
		placeholder = 'Selecciona una opción',
		...props
	}: {
		id: string;
		value?: string | number;
		options: Option[];
		placeholder?: string;
		[key: string]: any;
	} = $props();
</script>

<div class="relative w-full">
	<select
		{id}
		name={id}
		bind:value
		class="block w-full cursor-pointer appearance-none rounded-xl bg-input-bg px-4 py-3.5 leading-5 font-medium text-base-fg outline-0 outline-primary-bg focus:outline-2 aria-invalid:outline-2 aria-invalid:outline-red-500"
		{...props}
	>
		{#if placeholder}
			<option value="" disabled selected>{placeholder}</option>
		{/if}

		{#each options as option}
			<option value={option.value}>
				{option.label}
			</option>
		{/each}
	</select>
	<ChevronsUpDown
		class="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 stroke-[2.5]"
	/>
</div>
