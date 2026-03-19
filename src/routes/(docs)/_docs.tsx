import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(docs)/_docs")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="page-wrap prose-ui px-8 py-4 my-2">
			<Outlet />
		</main>
	);
}
