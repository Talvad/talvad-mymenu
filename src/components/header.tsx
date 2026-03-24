import { Link } from "@tanstack/react-router";
import ThemeToggle from "./theme-toggle";

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
export default function Header() {
	return (
		<header>
			<nav className="fixed top-0 w-full flex justify-between items-center px-8 h-20 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md z-50 shadow-sm dark:shadow-none tonal-shift-bg-(--surface-container-low)">
				<div className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
					OpenMenu
				</div>
				<div className="hidden md:flex items-center gap-8">
					{navMain.map((nav) => (
						<Link
							key={nav.title}
							to={nav.href}
							className="text-zinc-600 dark:text-zinc-400 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
							activeProps={{
								className:
									"text-orange-600 dark:text-orange-500 font-bold border-b-2 border-orange-600",
							}}
						>
							{nav.title}
						</Link>
					))}
				</div>
				<div className="flex items-center gap-4">
					<button
						type="button"
						className="bg-linear-to-br from-(--primary) to-(--primary-container) text-(--on-primary) px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-(--primary)/20 scale-95 active:scale-90 transition-transform"
					>
						Get Started
					</button>
					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
}
