import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/signup")({
	head: () => ({
		meta: [
			{
				title: "Signup - Talvad OpenMenu",
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(auth)/signup"!</div>;
}
