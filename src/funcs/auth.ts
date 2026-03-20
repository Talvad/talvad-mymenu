import { createServerFn } from "@tanstack/react-start";

export const loginFn = createServerFn({ method: "POST" })
	.inputValidator(
		({ email, password }: { email: string; password: string }) => ({
			email,
			password,
		}),
	)
	.handler(async ({ data }) => {
		const { email, password } = data;
		console.log("Inside server", email, password);
		return { success: true };
	});
