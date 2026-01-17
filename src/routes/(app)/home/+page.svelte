<script>
	import New from '$lib/components/New.svelte';
	import Title from '$lib/components/Title.svelte';
	import { citas, all_citas } from '$lib/data';
	import Carousel from './Carousel.svelte';

	let pendiente = $state(true);
</script>

<header class="flex justify-between gap-4">
	<Title big />
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10.268 21C10.4435 21.304 10.696 21.5565 11 21.732C11.3041 21.9075 11.6489 21.9999 12 21.9999C12.3511 21.9999 12.6959 21.9075 13 21.732C13.304 21.5565 13.5565 21.304 13.732 21"
			stroke="#3778F1"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M13.916 2.3139C13.0135 2.00977 12.0515 1.92486 11.1097 2.06618C10.1678 2.2075 9.27317 2.57099 8.49965 3.12661C7.72613 3.68222 7.09598 4.41399 6.66132 5.2614C6.22666 6.10881 5.99997 7.04752 5.99999 7.9999C5.99999 12.4989 4.58899 13.9559 3.25999 15.3269C3.12957 15.4702 3.0436 15.6484 3.01255 15.8397C2.9815 16.031 3.00671 16.2272 3.0851 16.4044C3.1635 16.5817 3.2917 16.7323 3.45413 16.838C3.61655 16.9437 3.80619 17 3.99999 16.9999H20C20.1938 17 20.3834 16.9437 20.5459 16.838C20.7083 16.7323 20.8365 16.5817 20.9149 16.4044C20.9933 16.2272 21.0185 16.031 20.9874 15.8397C20.9564 15.6484 20.8704 15.4702 20.74 15.3269C20.5342 15.115 20.339 14.893 20.155 14.6619"
			stroke="#3778F1"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M22.25 8C22.25 10.3472 20.3472 12.25 18 12.25C15.6528 12.25 13.75 10.3472 13.75 8C13.75 5.65279 15.6528 3.75 18 3.75C20.3472 3.75 22.25 5.65279 22.25 8Z"
			fill="#FF3F4C"
		/>
	</svg>
</header>

<Carousel />

<div class="grid text-center">
	<h1 class="title">
		Hola Abel
		{#if pendiente}
			<span>tienes una cita <span class="text-base-accent">pendiente</span></span>
		{:else}
			<span>¿cómo te ayudamos hoy?</span>
		{/if}
	</h1>
</div>

{#if pendiente}
	<New cita={all_citas[0]} />
{:else}
	<article class="relative overflow-hidden rounded-2xl bg-primary-bg px-6 py-5 text-white">
		<svg
			width="171"
			height="133"
			viewBox="0 0 171 133"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="absolute top-0 right-0"
		>
			<circle cx="118.5" cy="14.5" r="118.5" fill="#4F88F3" />
		</svg>
		<svg
			width="118"
			height="119"
			viewBox="0 0 118 119"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="absolute top-0 right-4"
		>
			<path
				d="M67.5471 81.4361C63.5029 75.3568 58.2651 70.2914 52.1378 66.5418C46.0104 62.7921 39.1163 60.4334 31.8626 59.5988C24.6105 58.7646 17.1415 59.4744 9.89564 61.6843C3.21159 63.7237 -1.10904 70.9209 0.249822 77.7609C1.61236 84.6006 8.13418 88.4991 14.8181 86.4635C18.844 85.2352 23.0004 84.8364 27.0298 85.2996C31.06 85.7632 34.8928 87.0756 38.2971 89.1588C41.7015 91.2421 44.6144 94.0578 46.8612 97.4355C49.1074 100.813 50.6438 104.695 51.3822 108.839C52.6114 115.717 59.0508 119.75 65.7613 117.851C72.4703 115.948 76.9128 108.825 75.687 101.946C74.3572 94.4879 71.5902 87.5141 67.5471 81.4361Z"
				fill="#3778F1"
			/>
			<path
				d="M53.9063 17.8971C57.7283 11.6515 56.244 3.7842 50.591 0.324857L50.4911 0.263688C44.8382 -3.19565 37.1572 -0.936996 33.3352 5.30854C29.5133 11.5541 30.9975 19.4214 36.6505 22.8808L36.7504 22.9419C42.4033 26.4013 50.0843 24.1426 53.9063 17.8971Z"
				fill="#3778F1"
			/>
			<path
				d="M115.319 55.4792C119.141 49.2337 117.657 41.3663 112.004 37.907L111.904 37.8458C106.251 34.3865 98.5704 36.6451 94.7485 42.8907C90.9265 49.1362 92.4107 57.0036 98.0637 60.4629L98.1636 60.5241C103.817 63.9834 111.498 61.7247 115.319 55.4792Z"
				fill="#3778F1"
			/>
		</svg>
		<div class="relative grid gap-3">
			<h3 class="subtitle text-[28px] text-white">Hace mucho<br />que no nos visitas</h3>
			<p class="leading-[1.2] text-pretty">¿Cómo se encuentran tus dientes?</p>
			<a href="/new" class="btn btn-white btn-big">Agendar Cita</a>
		</div>
	</article>
{/if}

<section class="grid gap-4 rounded-2xl bg-input-bg px-4 py-5">
	<header class="flex items-center justify-between">
		<h2 class="subtitle">Últimas Citas</h2>
		<a href="/appointments" class="font-medium">Ver todas</a>
	</header>
	<div class="grid gap-2">
		{#each citas as cita}
			<a href="/past-date" class=" rounded-2xl bg-[#D1EAFF] p-3 tracking-tight">
				<div class="grid gap-0.5">
					<h3 class="flex items-center gap-2 text-lg leading-none font-medium text-base-accent">
						{cita.title}
					</h3>
					<p>{cita.doc}</p>
					<p class="leading-[1.2] italic">{cita.date}&nbsp;&bull;&nbsp;{cita.place}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
