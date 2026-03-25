// import { useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";
import {
	ArrowRight,
	Eye,
	LockKeyhole,
	Mail,
	ShieldHalf,
	Utensils,
} from "lucide-react";
// import { z } from "zod";
// import { Button } from "#/components/ui/button";
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle,
// } from "#/components/ui/card";
// import {
// 	Field,
// 	FieldDescription,
// 	FieldError,
// 	FieldGroup,
// 	FieldLabel,
// } from "#/components/ui/field";
// import { Input } from "#/components/ui/input";

// const formSchema = z.object({
// 	email: z.email("Invalid email"),
// 	code: z.string().length(6, "Code must be 6 digits"),
// });

export function ConfirmSignupForm({
	email,
	...props
}: React.ComponentProps<"section"> & { email: string }) {
	// const navigate = useNavigate();
	// const form = useForm({
	// 	defaultValues: {
	// 		email,
	// 		code: "",
	// 	},
	// 	validators: {
	// 		onSubmit: formSchema,
	// 	},
	// 	onSubmit: async ({ value }) => {
	// 		console.log(value);
	// 		// const result = await signupFn({ data: value });
	// 		// if (result.success) {
	// 		//     navigate({
	// 		//         search: (prev) => ({
	// 		//             ...prev,
	// 		//             email: value.email,
	// 		//         }),
	// 		//     });
	// 		// } else {
	// 		//     // Handle login failure
	// 		//     console.error("Login failed");
	// 		// }
	// 	},
	// });

	return (
		<section
			className="bg-(--background) font-body text-(--on-surface) min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
			{...props}
		>
			{/* <!-- Subtle Background Elements --> */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-(--primary)/5 rounded-full blur-[120px]"></div>
				<div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-(--tertiary)/5 rounded-full blur-[120px]"></div>
			</div>
			{/* <!-- Main Content Container --> */}
			<main className="relative z-10 w-full max-w-md px-6 flex flex-col items-center">
				{/* <!-- Authentication Card --> */}
				<div className="w-full glass-card p-8 rounded-xl border border-white border-t-3 border-t-(--primary) shadow-lg shadow-(--primary)/5">
					<div className="mb-8">
						<h2 className="font-headline text-2xl font-bold text-(--on-surface)">
							Verify your email
						</h2>
						<p className="text-(--on-surface-variant) mt-1">
							We sent a 6-digit code to your email. Enter it below to activate
							your account.
						</p>
					</div>
					<form className="space-y-6">
						{/* <!-- Email Field --> */}
						<div className="space-y-2">
							<label
								className="font-label text-sm font-medium text-(--on-surface-variant) ml-1"
								htmlFor="email"
							>
								Email Address
							</label>
							<div className="relative group">
								<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
									<Mail className="size-4 text-(--on-surface-variant) group-focus-within:text-(--primary) transition-colors" />
								</div>
								<input
									className="w-full bg-(--surface-container-low) border border-(--outline-variant)/30 text-(--on-surface) rounded-lg pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-(--primary)/20 focus:bg-white placeholder:text-(--outline-variant)/60 transition-all outline-none"
									id="email"
									name="email"
									placeholder="name@restaurant.com"
									type="email"
									value={email}
									readOnly
									disabled
								/>
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-(--primary) transition-all duration-300 group-focus-within:w-full"></div>
							</div>
						</div>
						{/* <!-- Email Field --> */}
						<div className="space-y-2">
							<label
								className="font-label text-sm font-medium text-(--on-surface-variant) ml-1"
								htmlFor="code"
							>
								Code
							</label>
							<div className="relative group">
								<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
									<Mail className="size-4 text-(--on-surface-variant) group-focus-within:text-(--primary) transition-colors" />
								</div>
								<input
									className="w-full bg-(--surface-container-low) border border-(--outline-variant)/30 text-(--on-surface) rounded-lg pl-12 pr-4 py-3.5 focus:ring-2 focus:ring-(--primary)/20 focus:bg-white placeholder:text-(--outline-variant)/60 transition-all outline-none"
									id="code"
									name="code"
									placeholder="123456"
									type="text"
								/>
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-(--primary) transition-all duration-300 group-focus-within:w-full"></div>
							</div>
						</div>

						{/* <!-- Primary Action --> */}
						<button
							className="w-full bg-gradient-primary text-white font-headline font-bold py-4 rounded-xl shadow-lg shadow-(--primary)/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
							type="submit"
						>
							Verify Account
						</button>
					</form>
					{/* <!-- Bottom Navigation Link --> */}
					<div className="mt-8 text-center">
						<p className="text-(--on-surface-variant) text-sm">
							Didn't receive a code?
							<br />
							<Link
								className="flex items-center justify-center gap-2 text-(--primary) font-bold ml-1 hover:underline underline-offset-4 decoration-(--primary)/30"
								to="/signup"
							>
								Resend Code <ArrowRight className="size-4" />
							</Link>
						</p>
					</div>
				</div>
				{/* <!-- Secure Badge --> */}
				<div className="mt-12 flex items-center gap-2 text-(--on-surface-variant)/40">
					<ShieldHalf className="size-3.5" />
					<span className="font-label text-[10px] uppercase tracking-widest font-semibold">
						Secure Enterprise Authentication
					</span>
				</div>
			</main>
		</section>
		// <Card {...props}>
		// 	<CardHeader className="text-center">
		// 		<CardTitle className="text-xl">Confirm your account</CardTitle>
		// 		<CardDescription>
		// 			Enter the code sent to your email to confirm your account
		// 		</CardDescription>
		// 	</CardHeader>
		// 	<CardContent>
		// 		<form
		// 			onSubmit={(e) => {
		// 				e.preventDefault();
		// 				form.handleSubmit(e);
		// 			}}
		// 		>
		// 			<FieldGroup>
		// 				<form.Field
		// 					name="email"
		// 					// biome-ignore lint/correctness/noChildrenProp: <explanation>
		// 					children={(field) => {
		// 						const isInvalid =
		// 							field.state.meta.isTouched && !field.state.meta.isValid;
		// 						return (
		// 							<Field data-invalid={isInvalid}>
		// 								<FieldLabel htmlFor={field.name}>Email</FieldLabel>
		// 								<Input
		// 									id={field.name}
		// 									name={field.name}
		// 									value={field.state.value}
		// 									// onBlur={field.handleBlur}
		// 									// onChange={(e) => field.handleChange(e.target.value)}
		// 									type="email"
		// 									aria-invalid={isInvalid}
		// 									// placeholder="m@example.com"
		// 									required
		// 									autoComplete="off"
		// 									readOnly
		// 									disabled
		// 								/>
		// 								{isInvalid && (
		// 									<FieldError errors={field.state.meta.errors} />
		// 								)}
		// 							</Field>
		// 						);
		// 					}}
		// 				/>
		// 				<form.Field
		// 					name="code"
		// 					// biome-ignore lint/correctness/noChildrenProp: <explanation>
		// 					children={(field) => {
		// 						const isInvalid =
		// 							field.state.meta.isTouched && !field.state.meta.isValid;
		// 						return (
		// 							<Field data-invalid={isInvalid}>
		// 								<div className="flex items-center justify-between">
		// 									<FieldLabel htmlFor={field.name}>Code</FieldLabel>
		// 									<Button type="button" variant="link">
		// 										Click to resend code
		// 									</Button>
		// 								</div>
		// 								<Input
		// 									id={field.name}
		// 									name={field.name}
		// 									value={field.state.value}
		// 									onBlur={field.handleBlur}
		// 									onChange={(e) => field.handleChange(e.target.value)}
		// 									type="text"
		// 									aria-invalid={isInvalid}
		// 									placeholder="123456"
		// 									required
		// 									autoComplete="off"
		// 								/>
		// 								{isInvalid && (
		// 									<FieldError errors={field.state.meta.errors} />
		// 								)}
		// 							</Field>
		// 						);
		// 					}}
		// 				/>

		// 				<form.Subscribe
		// 					// biome-ignore lint/correctness/noChildrenProp: <explanation>
		// 					children={({ canSubmit }) => (
		// 						<Field>
		// 							<Button type="submit" disabled={!canSubmit}>
		// 								{canSubmit ? "Confirm" : "Confirming..."}
		// 							</Button>
		// 							<FieldDescription className="text-center">
		// 								Already have an account? <Link to="/login">Login</Link>
		// 							</FieldDescription>
		// 						</Field>
		// 					)}
		// 				/>
		// 			</FieldGroup>
		// 		</form>
		// 	</CardContent>
		// </Card>
	);
}
