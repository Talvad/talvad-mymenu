import { createServerFn } from "@tanstack/react-start";

type loginFnInput = {
	email: string;
	password: string;
};

export const loginFn = createServerFn({ method: "POST" })
	.inputValidator(({ email, password }: loginFnInput) => ({
		email,
		password,
	}))
	.handler(async ({ data }) => {
		const { email, password } = data;
		console.log("Inside server", email, password);
		return { success: true };
	});
type signupFnInput = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};
export const signupFn = createServerFn({ method: "POST" })
	.inputValidator(
		({ name, email, password, confirmPassword }: signupFnInput) => ({
			name,
			email,
			password,
			confirmPassword,
		}),
	)
	.handler(async ({ data }) => {
		const { name, email, password, confirmPassword } = data;
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log("Inside server", name, email, password, confirmPassword);
		return { success: true };
	});
