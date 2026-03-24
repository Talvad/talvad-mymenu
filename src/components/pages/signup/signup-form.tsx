import { Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Lock, Mail, User, Utensils } from "lucide-react";

// const passwordValidation = z
// 	.string()
// 	.min(8, "Password must be at least 8 characters long")
// 	.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
// 	.regex(/[a-z]/, "Password must contain at least one lowercase letter");
// const formSchema = z
// 	.object({
// 		name: z
// 			.string()
// 			.min(3, "Name must be at least 3 characters long")
// 			.max(30, "Name must be at most 30 characters long"),
// 		email: z.email("Invalid email"),
// 		password: passwordValidation,
// 		confirmPassword: passwordValidation,
// 	})
// 	.refine((data) => data.password === data.confirmPassword, {
// 		message: "Passwords do not match",
// 		path: ["confirmPassword"],
// 	});
export function SignupForm({ ...props }: React.ComponentProps<"section">) {
	// const navigate = useNavigate({ from: "/signup" });
	// const form = useForm({
	// 	defaultValues: {
	// 		name: "",
	// 		email: "",
	// 		password: "",
	// 		confirmPassword: "",
	// 	},
	// 	validators: {
	// 		onSubmit: formSchema,
	// 	},
	// 	onSubmit: async ({ value }) => {
	// 		const result = await signupFn({ data: value });
	// 		if (result.success) {
	// 			navigate({
	// 				search: (prev) => ({
	// 					...prev,
	// 					email: value.email,
	// 				}),
	// 			});
	// 		} else {
	// 			// Handle login failure
	// 			console.error("Login failed");
	// 		}
	// 	},
	// });

	return (
		<section className="bg-(--surface) font-body text-(--on-surface) min-h-screen flex flex-col">
			{/* <!-- Linear/Transactional Page per Conflict Resolution Protocol --> */}
			<main className="grow flex items-center justify-center px-6 py-12 relative overflow-hidden">
				{/* <!-- Subtle Background Elements matching Light Theme style --> */}
				<div className="fixed inset-0 overflow-hidden pointer-events-none">
					<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-(--primary)/5 rounded-full blur-[120px]"></div>
					<div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-(--tertiary)/5 rounded-full blur-[120px]"></div>
				</div>
				<div className="w-full max-w-[480px] z-10">
					{/* <!-- Branding Anchor --> */}
					<div className="flex flex-col items-center mb-10 text-center">
						<div className="mb-6 flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md shadow-orange-900/5">
							<Utensils className="text-(--primary) size-9" />
						</div>
						<h1 className="font-headline font-black text-3xl tracking-tight text-(--on-surface) mb-2">
							OpenMenu
						</h1>
						<p className="font-label text-(--on-surface-variant) text-sm uppercase tracking-widest">
							The Digital Maître d’
						</p>
					</div>
					{/* <!-- Sign Up Card --> */}
					<div className="glass-card p-8 md:p-10 rounded-xl shadow-lg shadow-(--primary)/5 border border-white">
						<div className="mb-8">
							<h2 className="text-2xl font-headline font-bold mb-1 text-(--on-surface)">
								Create your account
							</h2>
							<p className="text-(--on-surface-variant) text-sm">
								Join the network of premium dining establishments.
							</p>
						</div>
						<form className="space-y-6">
							{/* <!-- Full Name --> */}
							<div className="space-y-2">
								<label
									className="block text-xs font-label uppercase tracking-widest text-(--on-surface-variant) ml-1"
									htmlFor="full-name"
								>
									Full Name
								</label>
								<div className="relative group">
									<User className="absolute left-4 top-1/2 -translate-y-1/2   text-(--on-surface-variant) group-focus-within:text-(--primary) transition-colors" />

									<input
										className="w-full pl-12 pr-4 py-3.5 bg-(--surface-container-low) border border-(--outline-variant)/30 text-(--on-surface) rounded-lg focus:ring-2 focus:ring-(--primary/20) focus:bg-white placeholder:text-(--outline-variant)/60 transition-all outline-none"
										id="full-name"
										name="full-name"
										placeholder="Auguste Escoffier"
										type="text"
									/>
									<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-focus-within:w-full"></div>
								</div>
							</div>
							{/* <!-- Email Address --> */}
							<div className="space-y-2">
								<label
									className="block text-xs font-label uppercase tracking-widest text-(--on-surface-variant) ml-1"
									htmlFor="email"
								>
									Email Address
								</label>

								<div className="relative group">
									<Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-(--on-surface-variant) group-focus-within:text-(--primary) transition-colors" />

									<input
										className="w-full pl-12 pr-4 py-3.5 bg-(--surface-container-low) border border-(--outline-variant)/30 text-(--on-surface) rounded-lg focus:ring-2 focus:ring-(--primary)/20 focus:bg-white placeholder:text-(--outline-variant)/60 transition-all outline-none"
										id="email"
										name="email"
										placeholder="maitred@openmenu.com"
										type="email"
									/>
									<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-(--primary) transition-all duration-300 group-focus-within:w-full"></div>
								</div>
							</div>
							{/* <!-- Password Fields Grid --> */}
							<div className="grid grid-cols-1 gap-6">
								<div className="space-y-2">
									<label
										className="block text-xs font-label uppercase tracking-widest text-(--on-surface-variant) ml-1"
										htmlFor="password"
									>
										Password
									</label>
									<div className="relative group">
										<Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-(--on-surface-variant) group-focus-within:text-(--primary) transition-colors" />
										<input
											className="w-full pl-12 pr-4 py-3.5 bg-(--surface-container-low) border border-(--outline-variant)/30 text-(--on-surface) rounded-lg focus:ring-2 focus:ring-(--primary)/20 focus:bg-white placeholder:text-(--outline-variant)/60 transition-all outline-none"
											id="password"
											name="password"
											placeholder="••••••••"
											type="password"
										/>
										<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-focus-within:w-full"></div>
									</div>
								</div>
								<div className="space-y-2">
									<label
										className="block text-xs font-label uppercase tracking-widest text-(--on-surface-variant) ml-1"
										htmlFor="confirm-password"
									>
										Confirm Password
									</label>
									<div className="relative group">
										<Eye className="absolute left-4 top-1/2 -translate-y-1/2 text-(--on-surface-variant) group-focus-within:text-(--primary) transition-colors" />

										<input
											className="w-full pl-12 pr-4 py-3.5 bg-(--surface-container-low) border border-(--outline-variant)/30 text-(--on-surface) rounded-lg focus:ring-2 focus:ring-(--primary)/20 focus:bg-white placeholder:text-(--outline-variant)/60 transition-all outline-none"
											id="confirm-password"
											name="confirm-password"
											placeholder="••••••••"
											type="password"
										/>
										<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-(--primary) transition-all duration-300 group-focus-within:w-full"></div>
									</div>
								</div>
							</div>
							{/* <!-- CTA --> */}
							<div className="pt-4">
								<button
									className="w-full bg-gradient-primary text-white font-headline font-bold py-4 rounded-xl shadow-lg shadow-(--primary)/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
									type="submit"
								>
									Create Account
									<ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
								</button>
							</div>
						</form>
						<div className="mt-8 text-center">
							<p className="text-(--on-surface-variant) text-sm">
								Already have an account?
								<Link
									to="/login"
									className="text-(--primary) font-bold hover:underline underline-offset-4 ml-1 transition-colors"
								>
									Sign In
								</Link>
							</p>
						</div>
					</div>
				</div>
			</main>
		</section>
		// <Card {...props}>
		// 	<CardHeader className="text-center">
		// 		<CardTitle className="text-xl">Create your account</CardTitle>
		// 		<CardDescription>
		// 			Enter your email below to create your account
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
		// 					name="name"
		// 					// biome-ignore lint/correctness/noChildrenProp: <explanation>
		// 					children={(field) => {
		// 						const isInvalid =
		// 							field.state.meta.isTouched && !field.state.meta.isValid;
		// 						return (
		// 							<Field data-invalid={isInvalid}>
		// 								<FieldLabel htmlFor={field.name}>Name</FieldLabel>
		// 								<Input
		// 									id={field.name}
		// 									name={field.name}
		// 									value={field.state.value}
		// 									onBlur={field.handleBlur}
		// 									onChange={(e) => field.handleChange(e.target.value)}
		// 									type="text"
		// 									aria-invalid={isInvalid}
		// 									placeholder="John Doe"
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
		// 									onBlur={field.handleBlur}
		// 									onChange={(e) => field.handleChange(e.target.value)}
		// 									type="email"
		// 									aria-invalid={isInvalid}
		// 									placeholder="m@example.com"
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
		// 				<form.Field
		// 					name="password"
		// 					// biome-ignore lint/correctness/noChildrenProp: <explanation>
		// 					children={(field) => {
		// 						const isInvalid =
		// 							field.state.meta.isTouched && !field.state.meta.isValid;
		// 						return (
		// 							<Field data-invalid={isInvalid}>
		// 								<FieldLabel htmlFor={field.name}>Password</FieldLabel>
		// 								<Input
		// 									id={field.name}
		// 									name={field.name}
		// 									value={field.state.value}
		// 									onBlur={field.handleBlur}
		// 									onChange={(e) => field.handleChange(e.target.value)}
		// 									type="password"
		// 									aria-invalid={isInvalid}
		// 									placeholder="••••••••"
		// 									required
		// 									autoComplete="off"
		// 								/>
		// 								<FieldDescription>
		// 									Must be at least 8 characters long.
		// 									<br />
		// 									Must contain at least one uppercase letter.
		// 									<br />
		// 									Must contain at least one lowercase letter.
		// 								</FieldDescription>
		// 								{isInvalid && (
		// 									<FieldError errors={field.state.meta.errors} />
		// 								)}
		// 							</Field>
		// 						);
		// 					}}
		// 				/>

		// 				<form.Field
		// 					name="confirmPassword"
		// 					// biome-ignore lint/correctness/noChildrenProp: <explanation>
		// 					children={(field) => {
		// 						const isInvalid =
		// 							field.state.meta.isTouched && !field.state.meta.isValid;
		// 						return (
		// 							<Field data-invalid={isInvalid}>
		// 								<FieldLabel htmlFor={field.name}>
		// 									Confirm Password
		// 								</FieldLabel>
		// 								<Input
		// 									id={field.name}
		// 									name={field.name}
		// 									value={field.state.value}
		// 									onBlur={field.handleBlur}
		// 									onChange={(e) => field.handleChange(e.target.value)}
		// 									type="password"
		// 									aria-invalid={isInvalid}
		// 									placeholder="••••••••"
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
		// 								{canSubmit ? "Create Account" : "Creating Account..."}
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
