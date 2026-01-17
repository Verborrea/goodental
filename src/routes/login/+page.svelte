<script>
	import Header from '$lib/components/Header.svelte';
	import Input from '$lib/components/Input.svelte';
	import Title from '$lib/components/Title.svelte';
	import { Eye, EyeClosed } from '@lucide/svelte';

	let { form } = $props();

	let loading = $state(false);
	let email = $state('');
	let password = $state('');
	let showError = $state(false);
	let visible = $state(false);
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
		<form class="flex flex-col gap-4">
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
			<a href="/recover" class="link self-end">¿Olvidó su contraseña?</a>
			<button type="submit" class="btn btn-primary">Continuar</button>
		</form>
	</main>
	<footer class="text-center text-lg leading-5.5">
		<p>¿No tiene una cuenta?</p>
		<a href="/signup" class="link">Cree una ahora</a>
	</footer>
</div>
