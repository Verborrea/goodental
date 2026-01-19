import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		// 1. Simulación de errores de validación
		const errors: Record<string, string> = {};

		if (!email.includes('@')) {
			errors.email = "Email no válido.";
		}
		if (password.length < 6) {
			errors.password = "Contraseña incorrecta";
		}

		// Si hay errores, devolvemos un 400 con los mensajes
		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, email });
		}

		// 2. Demora artificial de 2 segundos (Simulando guardado en DB)
		await new Promise((resolve) => setTimeout(resolve, 2000));

		// 3. Redirección final
		throw redirect(303, '/home');
	}
};