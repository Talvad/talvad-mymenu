import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(docs)/_docs")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="prose-ui px-8 py-20 my-2">
			<Outlet />
		</main>
	);
}
