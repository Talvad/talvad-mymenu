import { createFileRoute } from "@tanstack/react-router";
import PricingPage from "#/components/pages/pricing";

export const Route = createFileRoute("/pricing")({
	component: RouteComponent,
});

function RouteComponent() {
	return <PricingPage />;
}
