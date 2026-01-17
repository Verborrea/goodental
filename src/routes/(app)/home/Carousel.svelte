<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import type { EmblaCarouselType } from 'embla-carousel';

	const AUTOPLAY_DELAY = 4000; // 4 segundos

	const images = [
		'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/9/9a/Cat_07464_kalamis_safinaz.jpg',
		'https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863'
	];

	let emblaApi: EmblaCarouselType;
	let selectedIndex = $state(0);

	const options = { loop: true };
	const plugins = [
		Autoplay({
			delay: AUTOPLAY_DELAY,
			stopOnInteraction: false,
			stopOnMouseEnter: false // Para que no se pause si el mouse está encima
		})
	];

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
		emblaApi.on('select', () => {
			selectedIndex = emblaApi.selectedScrollSnap();
		});
	}

	function scrollTo(index: number) {
		emblaApi?.scrollTo(index);
	}
</script>

<article class="flex flex-col gap-2">
	<div
		class="w-full overflow-hidden rounded-2xl"
		use:emblaCarouselSvelte={{ options, plugins }}
		onemblaInit={onInit}
	>
		<div class="flex">
			{#each images as src, i}
				<div class="shrink-0 grow-0 basis-full">
					<img {src} alt="Slide {i + 1}" class="slide-image bg-input-bg" />
				</div>
			{/each}
		</div>
	</div>
	<section class="flex justify-center gap-3">
		{#each images as _, i}
			<button
				class="dot-container"
				class:is-active={i === selectedIndex}
				onclick={() => scrollTo(i)}
			>
				{#if i === selectedIndex}
					<div class="progress-fill" style="animation-duration: {AUTOPLAY_DELAY}ms"></div>
				{/if}
			</button>
		{/each}
	</section>
</article>

<style>
	.slide-image {
		width: 100%;
		height: auto;
		display: block;
		aspect-ratio: 2 / 1;
		object-fit: cover;
	}

	/* El "punto" base (cuando no está activo) */
	.dot-container {
		position: relative;
		width: 12px;
		height: 12px;
		background-color: var(--color-secondary-bg);
		border: none;
		border-radius: 20px;
		padding: 0;
		cursor: pointer;
		overflow: hidden; /* Importante para que el progreso no se salga */
		transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px inset;
	}

	/* Cuando el punto está activo, se ensancha para ser una barra */
	.dot-container.is-active {
		width: 50px;
		background-color: var(--color-secondary-bg); /* Fondo de la barra */
	}

	/* La capa de progreso azul */
	.progress-fill {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 0%;
		background-color: var(--color-primary-bg); /* Color de progreso azul */
		animation-name: fillUp;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
	}

	@keyframes fillUp {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}
</style>
