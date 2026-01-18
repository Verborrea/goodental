<script lang="ts">
	import { enhance } from '$app/forms';
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
	let visible = $state(false);

	let serverErrors = $derived(form?.errors || {});
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
		<form
			class="flex flex-col gap-4"
			method="POST"
			use:enhance={() => {
				loading = true;
				return async ({ update }) => {
					loading = false;
					await update();
				};
			}}
		>
			<Input id="name" label="Nombre Completo" required bind:value={name} />
			<div class="space-y-1">
				<Input
					id="dni"
					label="DNI"
					inputmode="numeric"
					maxlength="8"
					oninput={({ currentTarget }: any) => {
						currentTarget.value = currentTarget.value.replace(/[^0-9]/g, '');
						dni = currentTarget.value;
					}}
					required
					aria-invalid={!!serverErrors.dni}
					bind:value={dni}
				/>
				{#if serverErrors.dni}
					<span class="text-xs text-red-500">{serverErrors.dni}</span>
				{/if}
			</div>
			<div class="space-y-1">
				<Input
					id="email"
					label="Correo Electrónico"
					type="email"
					required
					aria-invalid={!!serverErrors.email}
					bind:value={email}
				/>
				{#if serverErrors.email}
					<span class="text-xs text-red-500">{serverErrors.email}</span>
				{/if}
			</div>
			<div class="relative space-y-1">
				<Input
					id="password"
					name="password"
					type={visible ? 'text' : 'password'}
					label="Contraseña"
					required
					aria-invalid={!!serverErrors.password}
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
				{#if serverErrors.password}
					<span class="text-xs text-red-500">{serverErrors.password}</span>
				{/if}
			</div>
			<Checkbox required id="terminos" />
			<button type="submit" class="btn btn-primary" disabled={loading}>
				{#if loading}
					<Loader class="animate-spin" />
					Procesando...
				{:else}
					Crear Cuenta
				{/if}
			</button>
		</form>
	</main>
	<footer class="text-center text-lg leading-5.5">
		<p>¿Ya tiene una cuenta?</p>
		<a href="/login" class="link">Ingrese por acá</a>
	</footer>
</div>
