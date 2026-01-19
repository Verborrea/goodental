<script>
	import { Spring } from 'svelte/motion';

	// Definimos las props con el nuevo patrón de Svelte 5
	let { current = 1, totalSteps = 4 } = $props();

	// Creamos la instancia de Spring para el progreso
	// En Svelte 5, accedemos a .current directamente en el template
	let progress = new Spring(0, {
		stiffness: 0.1,
		damping: 0.6
	});

	// Efecto reactivo para actualizar el objetivo del spring
	$effect(() => {
		progress.target = (current - 1) / (totalSteps - 1);
	});
</script>

<div class="stepper">
	<div class="track-bg"></div>

	<div class="track-fill" style:width="{progress.current * 100}%"></div>

	<div class="steps-container">
		{#each Array(totalSteps) as _, i}
			{@const stepNumber = i + 1}
			<div
				class="step-box"
				class:completed={current > stepNumber}
				class:active={current === stepNumber}
			>
				{stepNumber}
			</div>
		{/each}
	</div>
</div>

<style>
	.stepper {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.track-bg,
	.track-fill {
		position: absolute;
		height: 3px;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 10px;
	}

	.track-bg {
		width: 100%;
		background-color: #e5e7eb;
		z-index: 0;
	}

	.track-fill {
		background-color: var(--color-primary-bg);
		z-index: 1;
	}

	.steps-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		z-index: 2;
	}

	.step-box {
		width: 36px;
		height: 36px;
		background-color: white;
		border: 3px solid #e5e7eb;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 1.1rem;
		color: #6b7280;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Estilo para pasos completados y el actual */
	.step-box.completed,
	.step-box.active {
		background-color: var(--color-primary-bg);
		border-color: var(--color-primary-bg);
		color: white;
	}

	/* Efecto visual extra para el paso actual */
	.step-box.active {
		box-shadow: 0 0 0 4px var(--color-shadow);
		transform: scale(1.05);
	}
</style>
