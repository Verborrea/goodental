<script lang="ts">
	let { group = $bindable(), value } = $props();

	// Comprobamos si este botón es el seleccionado actualmente
	let isSelected = $derived(group === value);
</script>

<label class="radio-tile px-3.5 py-3 text-center tracking-tight" class:selected={isSelected}>
	<input type="radio" bind:group {value} class="sr-only" />
	<span class="font-medium text-base-fg">{value}</span>
</label>

<style>
	/* Oculta el radio button visualmente pero mantiene accesibilidad */
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}

	.radio-tile {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
		border: 2px solid #e5e7eb;
		border-radius: 14px; /* Bordes muy redondeados como en la imagen */
		cursor: pointer;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		user-select: none;
	}
	/* Estado cuando está seleccionado */
	.radio-tile.selected {
		background-color: var(--color-primary-bg); /* Azul índigo de tu referencia */
		border-color: var(--color-primary-bg);
	}

	.radio-tile.selected span {
		color: white;
	}

	/* Efecto hover solo si no está seleccionado */
	.radio-tile:hover:not(.selected) {
		border-color: #d1d5db;
		background-color: #f9fafb;
	}
</style>
