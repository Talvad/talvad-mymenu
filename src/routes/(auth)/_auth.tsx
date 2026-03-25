import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Utensils } from "lucide-react";

export const Route = createFileRoute("/(auth)/_auth")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex min-h-svh flex-col items-center gap-6  py-6 md:py-30">
			<div className="flex flex-col gap-6">
				<div className=" flex items-center justify-center mb-6">
					<img
						src="/assets/img/logo.png"
						alt="Logo"
						className="w-20 h-20 bg-white object-contain p-2  shadow-md shadow-orange-900/5 rounded-xl "
					/>
				</div>
				<Outlet />
				<div className="max-w-sm px-6 text-center mx-auto">
					By continuing, you agree to our <br />
					<Link
						to="/terms-of-service"
						className="text-(--primary) hover:underline underline-offset-4 decoration-(--primary)/30"
					>
						Terms of Service
					</Link>{" "}
					and{" "}
					<Link
						to="/privacy-policy"
						className="text-(--primary) hover:underline underline-offset-4 decoration-(--primary)/30"
					>
						Privacy Policy
					</Link>
					.
				</div>
			</div>
		</main>
	);
}
