<script lang="ts">
	let {
		id,
		label,
		type = 'text',
		requiredVisible = false,
		value = $bindable(''),
		...props
	} = $props();

	let focused = $state(false);
	const float = $derived(focused || value.length > 0);
</script>

<div class="relative w-full">
	<label for={id} class:float class:up={type === 'date' || type === 'time'} class="text-placeholder"
		>{label}
		{#if requiredVisible}
			<span class="text-red">*</span>
		{/if}
	</label>
	<input
		{id}
		name={id}
		{type}
		bind:value
		onfocus={() => (focused = true)}
		onblur={() => (focused = false)}
		class="block w-full rounded-xl bg-input-bg px-4 pt-5.5 pb-1.5 leading-5 font-medium text-base-fg outline-0 outline-primary-bg placeholder:text-placeholder focus:outline-2 aria-invalid:outline-2 aria-invalid:outline-red-500"
		{...props}
	/>
</div>

<style>
	label {
		position: absolute;
		left: 16px;
		top: 15px;
		line-height: 20px;
		transition: all 0.2s ease;
		pointer-events: none;
	}

	label.float,
	label.up {
		top: 8px;
		font-size: 12px;
		line-height: 14px;
	}
</style>
