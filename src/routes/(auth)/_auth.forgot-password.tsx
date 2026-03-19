import { createFileRoute } from "@tanstack/react-router";
import { ForgotPasswordPage } from "#/components/pages/forgot-password";

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
	return <ForgotPasswordPage />;
}
