import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_auth/forgot-password")({
	head: () => ({
		meta: [
			{
				title: "Forgot Password - Talvad OpenMenu",
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(auth)/forgot-password"!</div>;
}
