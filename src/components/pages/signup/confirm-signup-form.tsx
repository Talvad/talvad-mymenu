import { useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";
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

const formSchema = z.object({
	email: z.email("Invalid email"),
	code: z.string().length(6, "Code must be 6 digits"),
});

export function ConfirmSignupForm({
	email,
	...props
}: React.ComponentProps<typeof Card> & { email: string }) {
	const navigate = useNavigate();
	const form = useForm({
		defaultValues: {
			email,
			code: "",
		},
		validators: {
			onSubmit: formSchema,
		},
		onSubmit: async ({ value }) => {
			console.log(value);
			// const result = await signupFn({ data: value });
			// if (result.success) {
			//     navigate({
			//         search: (prev) => ({
			//             ...prev,
			//             email: value.email,
			//         }),
			//     });
			// } else {
			//     // Handle login failure
			//     console.error("Login failed");
			// }
		},
	});

	return (
		<Card {...props}>
			<CardHeader className="text-center">
				<CardTitle className="text-xl">Confirm your account</CardTitle>
				<CardDescription>
					Enter the code sent to your email to confirm your account
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
											// onBlur={field.handleBlur}
											// onChange={(e) => field.handleChange(e.target.value)}
											type="email"
											aria-invalid={isInvalid}
											// placeholder="m@example.com"
											required
											autoComplete="off"
											readOnly
											disabled
										/>
										{isInvalid && (
											<FieldError errors={field.state.meta.errors} />
										)}
									</Field>
								);
							}}
						/>
						<form.Field
							name="code"
							// biome-ignore lint/correctness/noChildrenProp: <explanation>
							children={(field) => {
								const isInvalid =
									field.state.meta.isTouched && !field.state.meta.isValid;
								return (
									<Field data-invalid={isInvalid}>
										<div className="flex items-center justify-between">
											<FieldLabel htmlFor={field.name}>Code</FieldLabel>
											<Button type="button" variant="link">
												Click to resend code
											</Button>
										</div>
										<Input
											id={field.name}
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
											type="text"
											aria-invalid={isInvalid}
											placeholder="123456"
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
										{canSubmit ? "Confirm" : "Confirming..."}
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
