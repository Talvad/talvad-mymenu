import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import z from "zod";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { loginFn } from "#/funcs/auth";

const formSchema = z.object({
	email: z.email("Invalid email"),
	password: z.string().min(1, "Password is required"),
	// .min(8, "Password must be at least 8 characters long"),
	// .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
	// .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
});
export function LoginPage({ ...props }: React.ComponentProps<typeof Card>) {
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onSubmit: formSchema,
		},
		onSubmit: async ({ value }) => {
			console.log("Inside cleint", value);
			const result = await loginFn({ data: value });
			if (result.success) {
				// Handle successful login
				console.log("Login successful");
			} else {
				// Handle login failure
				console.error("Login failed");
			}
		},
	});
	return (
		<Card {...props}>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">Welcome back</CardTitle>
				<CardDescription>Login with your Email</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						form.handleSubmit(e);
					}}
				>
					<FieldGroup>
						<form.Field
							name="email"
							// biome-ignore lint/correctness/noChildrenProp: <explanation>
							children={(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>Email</FieldLabel>
										<Input
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											type="email"
											aria-invalid={isInvalid}
											placeholder="m@example.com"
											required
											autoComplete="off"
										/>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								);
							}}
						/>
						<form.Field
							name="password"
							// biome-ignore lint/correctness/noChildrenProp: <explanation>
							children={(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<div className="flex items-center justify-between">
											<FieldLabel htmlFor={field.name}>Password</FieldLabel>
											<Link to="/forgot-password">Forgot your password?</Link>
										</div>
										<Input
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											type="password"
											aria-invalid={isInvalid}
											required
											autoComplete="off"
										/>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								);
							}}
						/>
						<Field>
							<Button type="submit">Login</Button>
							<FieldDescription className="text-center">
								Don&apos;t have an account? <Link to="/signup">Sign up</Link>
							</FieldDescription>
						</Field>
					</FieldGroup>
				</form>
			</CardContent>
		</Card>
	);
}
