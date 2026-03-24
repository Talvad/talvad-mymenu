import { Link } from "@tanstack/react-router";

const navMain = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "About",
		href: "/about",
	},
	{
		title: "Pricing",
		href: "/pricing",
	},
];
export default function Footer() {
	return (
		<footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-12">
			<div className="w-full flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
				<div className="flex flex-col gap-2">
					<span className="text-xl font-black text-zinc-900 dark:text-zinc-50">
						OpenMenu
					</span>
					<p className="text-sm font-inter text-zinc-500 dark:text-zinc-400 max-w-xs">
						The premium digital maître d’ for modern restaurants and bistros.
					</p>
				</div>
				<div className="flex gap-8">
					{navMain.map((nav) => (
						<Link
							key={nav.title}
							to={nav.href}
							className="text-zinc-500 hover:underline decoration-orange-500 transition-all"
						>
							{nav.title}
						</Link>
					))}
				</div>
				<div className="text-sm font-inter text-zinc-500 dark:text-zinc-400">
					© 2024 OpenMenu. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
