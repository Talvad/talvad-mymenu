// import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import {
	ArrowRight,
	Eye,
	LockKeyhole,
	Mail,
	ShieldHalf,
	Utensils,
} from "lucide-react";
// import z from "zod";

// import { loginFn } from "#/funcs/auth";

// const formSchema = z.object({
// 	email: z.email("Invalid email"),
// 	password: z.string().min(1, "Password is required"),
// 	// .min(8, "Password must be at least 8 characters long"),
// 	// .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
// 	// .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
// });
export function LoginPage({ ...props }: React.ComponentProps<"section">) {
	// const form = useForm({
	// 	defaultValues: {
	// 		email: "",
	// 		password: "",
	// 	},
	// 	validators: {
	// 		onSubmit: formSchema,
	// 	},
	// 	onSubmit: async ({ value }) => {
	// 		const result = await loginFn({ data: value });
	// 		if (result.success) {
	// 			// Handle successful login
	// 			console.log("Login successful");
	// 		} else {
	// 			// Handle login failure
	// 			console.error("Login failed");
	// 		}
	// 	},
	// });
	return (
		<section
			className="bg-(--background) font-body text-(--on-surface) min-h-screen flex flex-col items-center justify-center overflow-hidden"
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
				<div className="w-full glass-card p-8 rounded-xl border border-white shadow-lg shadow-(--primary)/5 border-t-3 border-t-(--primary)">
					<div className="mb-8">
						<h2 className="font-headline text-2xl font-bold text-(--on-surface)">
							Welcome back
						</h2>
						<p className="text-(--on-surface-variant) mt-1">
							Please enter your details to sign in.
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
								/>
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-(--primary) transition-all duration-300 group-focus-within:w-full"></div>
							</div>
						</div>
						{/* <!-- Password Field --> */}
						<div className="space-y-2">
							<div className="flex justify-between items-center px-1">
								<label
									className="font-label text-sm font-medium text-(--on-surface-variant)"
									htmlFor="password"
								>
									Password
								</label>
								<Link
									className="text-xs text-(--primary) font-medium hover:underline underline-offset-4 decoration-(--primary)/30"
									to="/forgot-password"
								>
									Forgot Password?
								</Link>
							</div>
							<div className="relative group">
								<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
									<LockKeyhole className="size-4 text-(--on-surface-variant) group-focus-within:text-(--primary) transition-colors" />
								</div>
								<input
									className="w-full bg-(--surface-container-low) border border-(--outline-variant)/30 text-(--on-surface) rounded-lg pl-12 pr-12 py-3.5 focus:ring-2 focus:ring-(--primary)/20 focus:bg-white placeholder:text-(--outline-variant)/60 transition-all outline-none"
									id="password"
									name="password"
									placeholder="••••••••"
									type="password"
								/>
								<div className="absolute inset-y-0 right-4 flex items-center">
									<button
										className="text-(--on-surface-variant) hover:text-(--on-surface) transition-colors"
										type="button"
									>
										<Eye className="size-4" />
									</button>
								</div>
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-(--primary) transition-all duration-300 group-focus-within:w-full"></div>
							</div>
						</div>
						{/* <!-- Remember Me (Optional Visual Support) --> */}
						<div className="flex items-center px-1">
							<input
								className="w-4 h-4 rounded bg-white border-(--outline-variant) text-(--primary) focus:ring-(--primary) focus:ring-offset-(--background)"
								id="remember"
								type="checkbox"
							/>
							<label
								className="ml-2 text-sm text-(--on-surface-variant) select-none"
								htmlFor="remember"
							>
								Keep me signed in
							</label>
						</div>
						{/* <!-- Primary Action --> */}
						<button
							className="w-full bg-gradient-primary text-white font-headline font-bold py-4 rounded-xl shadow-lg shadow-(--primary)/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
							type="submit"
						>
							Sign In
							<ArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
						</button>
					</form>
					{/* <!-- Bottom Navigation Link --> */}
					<div className="mt-8 text-center">
						<p className="text-(--on-surface-variant) text-sm">
							Don't have an account yet?
							<Link
								className="text-(--primary) font-bold ml-1 hover:underline underline-offset-4 decoration-(--primary)/30"
								to="/signup"
							>
								Sign Up
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
	);
}
