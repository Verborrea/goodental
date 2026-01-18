<script>
	let {
		checked = $bindable(false),
		label = 'Acepto los términos',
		id = 'checkbox-' + Math.random().toString(36).substring(2, 9),
		...props
	} = $props();
</script>

<div class="checkbox-container">
	<input type="checkbox" {id} name={id} bind:checked class="sr-only" {...props} />
	<label for={id} class="checkbox-wrapper">
		<div class="custom-box {checked ? 'checked' : ''}">
			{#if checked}
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			{/if}
		</div>
		<span>{label}</span>
	</label>
</div>

<style>
	:root {
		--light-blue: #e1f5fe;
	}

	.checkbox-container {
		display: flex;
		align-items: center;
	}

	/* Ocultar el input original pero mantener accesibilidad */
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

	.checkbox-wrapper {
		display: flex;
		align-items: center;
		cursor: pointer;
		user-select: none;
	}

	.custom-box {
		width: 22px;
		height: 22px;
		/* border: 2px solid var(--color-primary-bg); */
		border-radius: 6px; /* Estilo redondeado y suave */
		margin-right: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		background-color: var(--color-input-bg);
	}

	.custom-box.checked {
		background-color: var(--color-primary-bg);
		border-color: var(--color-primary-bg);
	}

	.custom-box svg {
		width: 14px;
		height: 14px;
		color: white;
	}

	.checkbox-wrapper:hover .custom-box,
	input:focus + .checkbox-wrapper .custom-box {
		box-shadow: 0 0 0 4px var(--color-shadow);
	}
</style>
