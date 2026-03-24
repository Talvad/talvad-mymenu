import { Link } from "@tanstack/react-router";
import {
	ArrowLeft,
	ArrowRight,
	Eye,
	Lock,
	Mail,
	User,
	Utensils,
} from "lucide-react";

export function ForgotPasswordPage({
	...props
}: React.ComponentProps<"section">) {
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
								Forgot Password?
							</h2>
							<p className="text-(--on-surface-variant) text-sm">
								No worries! Enter your email and we'll send you a recovery code.
							</p>
						</div>
						<form className="space-y-6">
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

							{/* <!-- CTA --> */}
							<div className="pt-4">
								<button
									className="w-full bg-gradient-primary text-white font-headline font-bold py-4 rounded-xl shadow-lg shadow-(--primary)/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
									type="submit"
								>
									Send Code
									<ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
								</button>
							</div>
						</form>
						<div className="mt-8 ">
							<p className="text-(--on-surface-variant) text-sm grid place-items-center">
								<Link
									to="/login"
									className="flex items-center gap-4 text-(--primary) font-bold hover:underline underline-offset-4 ml-1 transition-colors"
								>
									<ArrowLeft className="size-5" />
									Back to Sign In
								</Link>
							</p>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
}
