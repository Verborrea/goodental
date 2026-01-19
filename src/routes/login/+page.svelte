<script>
	import { enhance } from '$app/forms';
	import Header from '$lib/components/Header.svelte';
	import Input from '$lib/components/Input.svelte';
	import Title from '$lib/components/Title.svelte';
	import { Eye, EyeClosed, Loader } from '@lucide/svelte';

	let { form } = $props();

	let loading = $state(false);
	let email = $state('');
	let password = $state('');
	let visible = $state(false);

	let serverErrors = $derived(form?.errors || {});
</script>

<svelte:head>
	<title>Iniciar Sesión - Goodental</title>
</svelte:head>

<div class="flex h-screen flex-col items-center justify-between gap-8 p-6">
	<Header>
		<Title />
	</Header>
	<main class="space-y-8 self-stretch">
		<header class="space-y-1 text-center">
			<h1 class="title">Iniciar Sesión</h1>
			<p>¡Qué bueno verte de nuevo!</p>
		</header>
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
			<div class="relative">
				<Input
					id="password"
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
			<a href="/recover" class="link self-end">¿Olvidó su contraseña?</a>
			<button type="submit" class="btn btn-primary" disabled={loading}>
				{#if loading}
					<Loader class="animate-spin" />
					Verificando...
				{:else}
					Continuar
				{/if}
			</button>
		</form>
	</main>
	<footer class="text-center text-lg leading-5.5">
		<p>¿No tiene una cuenta?</p>
		<a href="/signup" class="link">Cree una ahora</a>
	</footer>
</div>
