import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@prose-ui/react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { allPosts } from "content-collections";

const getPostByName = (name: string) => {
	return allPosts.find((post) => post._meta.path === name);
};
export const Route = createFileRoute("/(docs)/_docs/terms-of-service")({
	head: () => ({
		meta: [
			{
				title: "Terms of Service - Talvad OpenMenu",
			},
		],
	}),
	component: RouteComponent,
	errorComponent: () => <div>An Error occured</div>,
	loader: async () => {
		const code = getPostByName("terms-of-service");

		if (!code) {
			throw notFound();
		}

		return { code: code.mdx };
	},
});

function RouteComponent() {
	const { code } = Route.useLoaderData();
	if (!code) {
		throw notFound();
	}
	return <MDXContent code={code} components={mdxComponents} />;
}
