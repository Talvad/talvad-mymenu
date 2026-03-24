import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_auth")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex min-h-svh flex-col items-center gap-6  py-6 md:py-10">
			<div className="flex flex-col gap-6">
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
