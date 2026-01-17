<script>
	import Header from '$lib/components/Header.svelte';
	import { Mail, MapPin, Phone, PillBottle, Syringe, TriangleAlert } from '@lucide/svelte';
	import Card from './Card.svelte';
	import { citas } from '$lib/data';
</script>

<Header href="/home" label="Mi Perfil" />
<div class="flex flex-col items-center gap-2 text-center">
	<img
		src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Cat_07464_kalamis_safinaz.jpg"
		alt="Foto de Perfil"
		class="size-32 rounded-full"
	/>
	<div>
		<h2 class="subtitle">Abel Roca Delgado</h2>
		<p class="mt-0.5 font-medium text-muted-fg">DNI: 72365446</p>
	</div>
</div>
<article class="grid gap-4">
	<Card title="Información Personal">
		<div class="grid gap-3 leading-5.5 font-medium tracking-tight text-muted-fg">
			<p class="flex items-center gap-2">
				<Mail class="size-4 shrink-0 stroke-[2.5]" />
				<span>abel_roca_11@gmail.com</span>
			</p>
			<p class="flex items-center gap-2">
				<Phone class="size-4 shrink-0 stroke-[2.5]" />
				<span>+51 940 185 837</span>
			</p>
			<p class="flex items-center gap-2">
				<MapPin class="size-4 shrink-0 stroke-[2.5]" />
				<span>Urb. La Pradera A-23, Cerro Colorado</span>
			</p>
		</div>
	</Card>
	<Card title="Perfil Clínico">
		<div class="grid gap-3 leading-5.5 font-medium tracking-tight text-muted-fg">
			<p class="flex items-center gap-2">
				<Syringe class="size-4 shrink-0 stroke-[2.5]" />
				<span>Tipo de sangre: O+</span>
			</p>
			<p class="flex items-center gap-2">
				<PillBottle class="size-4 shrink-0 stroke-[2.5]" />
				<span>Ninguna alergia a medicamentos</span>
			</p>
			<p class="flex items-center gap-2">
				<TriangleAlert class="size-4 shrink-0 stroke-[2.5]" />
				<span>Hipertensión, Diabetes</span>
			</p>
		</div>
	</Card>
	<section class="grid gap-4 rounded-2xl bg-input-bg px-4 py-5">
		<header class="flex items-center justify-between">
			<h2 class="subtitle">Últimas Citas</h2>
			<a href="/appointments" class="font-medium text-muted-fg">Ver todas</a>
		</header>
		<div class="grid gap-2">
			{#each citas as cita}
				<a href="/past-date" class=" rounded-2xl bg-[#D1EAFF] p-3 tracking-tight text-muted-fg">
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
</article>
