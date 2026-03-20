import { createFileRoute } from "@tanstack/react-router";
import { SignupPage } from "#/components/pages/signup";

export const Route = createFileRoute("/(auth)/_auth/signup")({
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
	return <SignupPage />;
}
