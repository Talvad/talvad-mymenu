import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: About,
});

function About() {
	return (
		<main className="page-wrap px-4 py-12">
			<section className="h-screen">
				<section className="island-shell rise-in relative overflow-hidden rounded-4xl px-6 py-10 sm:px-10 sm:py-14">
					<div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
					<div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
					<h2>Hero page</h2>
				</section>
			</section>
			<section className="island-shell rounded-2xl p-6 sm:p-8">
				<p className="island-kicker mb-2">About</p>
				<h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
					A small starter with room to grow.
				</h1>
				<p className="m-0 max-w-3xl text-base leading-8 text-(--sea-ink-soft)">
					TanStack Start gives you type-safe routing, server functions, and
					modern SSR defaults. Use this as a clean foundation, then layer in
					your own routes, styling, and add-ons.
				</p>
			</section>
		</main>
	);
}
