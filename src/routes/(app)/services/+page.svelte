<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { Phone } from '@lucide/svelte';
	import Service from './Service.svelte';
	import img1 from '$lib/assets/services/1.avif';
	import img2 from '$lib/assets/services/2.avif';
	import img3 from '$lib/assets/services/3.avif';
	import img4 from '$lib/assets/services/4.avif';
	import type { ServiceType } from '$lib/types';

	let services: ServiceType[] = [
		{
			slug: 'consultas-generales',
			img: img1,
			name: 'Consultas generales',
			text: 'Revisión odontológica completa para evaluar tu salud bucal y detectar problemas a tiempo.'
		},
		{
			slug: 'limpieza-y-profilaxis',
			img: img2,
			name: 'Limpieza y profilaxis',
			text: 'Eliminación a fondo de placa y sarro para prevenir caries y enfermedades de las encías.'
		},
		{
			slug: 'estetica-dental',
			img: img3,
			name: 'Estética dental',
			text: 'Blanqueamiento, carillas y otros procedimientos para mejorar tu sonrisa.'
		},
		{
			slug: 'endodoncia',
			img: img4,
			name: 'Endodoncia',
			text: 'Anímate a probar este tratamiento de conducto para salvar piezas dentales dañadas o con infección.'
		}
	];
</script>

<Header href="/home" label="Servicios" />
<h1 class="title text-center">
	Conoce todo lo que tenemos <span class="text-base-accent">por ofrecerte</span>
</h1>
{#each services as service}
	<Service {service} />
{/each}
<article class="relative overflow-hidden rounded-2xl bg-green-500 px-6 py-5 text-center text-white">
	<div class="relative grid gap-3">
		<h3 class="title text-pretty text-white">¿No encuentras lo que buscas?</h3>
		<a href="https://wa.me/51961262613" class="btn btn-white btn-big text-green-500">
			<Phone />
			Habla con nosotros
		</a>
	</div>
</article>
