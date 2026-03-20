import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "#/components/pages/login";

export const Route = createFileRoute("/(auth)/_auth/login")({
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
	return <LoginPage />;
}
