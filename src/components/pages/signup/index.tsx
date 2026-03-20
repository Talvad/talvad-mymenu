import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
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
import { signupFn } from "#/funcs/auth";

const passwordValidation = z
	.string()
	.min(8, "Password must be at least 8 characters long")
	.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
	.regex(/[a-z]/, "Password must contain at least one lowercase letter");
const formSchema = z
	.object({
		name: z
			.string()
			.min(3, "Name must be at least 3 characters long")
			.max(30, "Name must be at most 30 characters long"),
		email: z.email("Invalid email"),
		password: passwordValidation,
		confirmPassword: passwordValidation,
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});
export function SignupPage({ ...props }: React.ComponentProps<typeof Card>) {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validators: {
			onSubmit: formSchema,
		},
		onSubmit: async ({ value }) => {
			const result = await signupFn({ data: value });
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
				<CardTitle className="text-xl">Create your account</CardTitle>
				<CardDescription>
					Enter your email below to create your account
				</CardDescription>
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
							name="name"
							// biome-ignore lint/correctness/noChildrenProp: <explanation>
							children={(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>Name</FieldLabel>
										<Input
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											type="text"
											aria-invalid={isInvalid}
											placeholder="John Doe"
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
										<FieldLabel htmlFor={field.name}>Password</FieldLabel>
										<Input
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											type="password"
											aria-invalid={isInvalid}
											placeholder="••••••••"
											required
											autoComplete="off"
										/>
										<FieldDescription>
											Must be at least 8 characters long.
											<br />
											Must contain at least one uppercase letter.
											<br />
											Must contain at least one lowercase letter.
										</FieldDescription>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								);
							}}
						/>

						<form.Field
							name="confirmPassword"
							// biome-ignore lint/correctness/noChildrenProp: <explanation>
							children={(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<FieldLabel htmlFor={field.name}>
											Confirm Password
										</FieldLabel>
										<Input
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											type="password"
											aria-invalid={isInvalid}
											placeholder="••••••••"
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
						<form.Subscribe
							// biome-ignore lint/correctness/noChildrenProp: <explanation>
							children={({ canSubmit }) => (
								<Field>
									<Button type="submit" disabled={!canSubmit}>
										{canSubmit ? "Create Account" : "Creating Account..."}
									</Button>
									<FieldDescription className="text-center">
										Already have an account? <Link to="/login">Login</Link>
									</FieldDescription>
								</Field>
							)}
						/>
					</FieldGroup>
				</form>
			</CardContent>
		</Card>
	);
}
