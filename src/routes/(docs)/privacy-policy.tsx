import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(docs)/privacy-policy")({
	head: () => ({
		meta: [
			{
				title: "Privacy Policy - Talvad OpenMenu",
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(docs)/privacy-policy"!</div>;
}
