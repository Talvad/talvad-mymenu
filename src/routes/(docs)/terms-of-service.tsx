import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(docs)/terms-of-service")({
	head: () => ({
		meta: [
			{
				title: "Terms of Service - Talvad OpenMenu",
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(docs)/terms-of-service"!</div>;
}
