import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "#/components/pages/about";

export const Route = createFileRoute("/about")({
	head: () => ({
		meta: [
			{
				title: "About - Talvad OpenMenu",
			},
		],
	}),
	component: About,
});

function About() {
	return <AboutPage />;
}
