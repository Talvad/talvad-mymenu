import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/login")({
	head: () => ({
		meta: [
			{
				title: "Login - Talvad OpenMenu",
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(auth)/login"!</div>;
}
