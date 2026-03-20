import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { FieldDescription } from "#/components/ui/field";

export const Route = createFileRoute("/(auth)/_auth")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="flex min-h-svh flex-col items-center gap-6  p-6 md:p-10">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<div className="flex flex-col gap-6">
					<Outlet />
					<FieldDescription className="px-6 text-center">
						By clicking continue, you agree to our{" "}
						<Link to="/terms-of-service">Terms of Service</Link> and{" "}
						<Link to="/privacy-policy">Privacy Policy</Link>.
					</FieldDescription>
				</div>
			</div>
		</main>
	);
}
