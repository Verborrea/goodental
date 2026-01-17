<script lang="ts">
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Header from '$lib/components/Header.svelte';
	import Input from '$lib/components/Input.svelte';
	import Title from '$lib/components/Title.svelte';
	import { Eye, EyeClosed, Loader } from '@lucide/svelte';

	let { form } = $props();

	let loading = $state(false);
	let dni = $state('');
	let name = $state('');
	let email = $state('');
	let password = $state('');
	let showError = $state(false);
	let visible = $state(false);
</script>

<div class="flex h-screen flex-col items-center justify-between gap-8 p-6">
	<Header>
		<Title />
	</Header>
	<main class="space-y-8 self-stretch">
		<div class="space-y-1 text-center">
			<h1 class="title">Crear Cuenta</h1>
			<p>Ingrese sus datos para continuar.</p>
		</div>
		<form class="flex flex-col gap-4">
			<Input
				id="name"
				label="Nombre Completo"
				required
				aria-invalid={showError}
				oninput={() => (showError = false)}
				bind:value={name}
			/>
			<Input
				id="dni"
				label="DNI"
				inputmode="tel"
				pattern="[0-9+]*"
				oninput={({ currentTarget }: any) => {
					currentTarget.value = currentTarget.value.replace(/[^0-9+]/g, '');
					dni = currentTarget.value;
					showError = false;
				}}
				required
				aria-invalid={showError}
				bind:value={dni}
			/>
			<Input
				id="email"
				label="Correo Electrónico"
				type="email"
				required
				aria-invalid={showError}
				oninput={() => (showError = false)}
				bind:value={email}
			/>
			<div class="relative">
				<Input
					id="pass"
					type={visible ? 'text' : 'password'}
					label="Contraseña"
					required
					aria-invalid={showError}
					oninput={() => (showError = false)}
					bind:value={password}
				/>
				<button
					type="button"
					class="btn btn-ghost btn-icon absolute top-2.5 right-2 size-7 p-0"
					onclick={() => (visible = !visible)}
				>
					{#if visible}
						<EyeClosed />
					{:else}
						<Eye />
					{/if}
				</button>
			</div>
			<Checkbox required id="terminos" />
			<button type="submit" class="btn btn-primary" disabled={loading}>
				{#if loading}
					<Loader class="animate-spin" />
				{/if}
				{loading ? 'Cargando' : 'Crear Cuenta'}</button
			>
		</form>
	</main>
	<footer class="text-center text-lg leading-5.5">
		<p>¿Ya tiene una cuenta?</p>
		<a href="/login" class="link">Ingrese por acá</a>
	</footer>
</div>
