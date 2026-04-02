const heroData = [
	{
		imageUrl: "./assets/svg/know_the_details.svg",
		heading: "All informations to the customer",
		description:
			"here goes the description about your heading, here goes the description about your heading, here goes the description about your heading",
	},
	{
		imageUrl: "./assets/svg/know_you_have.svg",
		heading: "Customer knows what the store has",
		description:
			"here goes the description about your heading, here goes the description about your heading, here goes the description about your heading",
	},
	{
		imageUrl: "./assets/svg/manage_they_want.svg",
		heading: "Customer Manages what they want",
		description:
			"here goes the description about your heading, here goes the description about your heading, here goes the description about your heading",
	},
	{
		imageUrl: "./assets/svg/plan_they_want.svg",
		heading: "Customers can plan what they want",
		description:
			"here goes the description about your heading, here goes the description about your heading, here goes the description about your heading",
	},
];
const Hero = () => {
	return (
		<section className="relative min-h-screen pb-30 pt-30 md:pt-50 flex items-center overflow-hidden px-8 md:px-20 bg-(--surface)">
			<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div className="z-10">
					<span className="inline-block py-1 px-4 rounded-full bg-(--secondary-container) text-(--on-secondary-container) text-sm font-semibold mb-6">
						The Digital Maître d’
					</span>
					<h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-(--on-surface) leading-[1.1] mb-8">
						Bring Your <span className="text-(--primary) italic">Menu</span> to
						Life.
					</h1>
					<p className="text-xl text-(--on-surface-variant) max-w-lg mb-10 leading-relaxed">
						Transform your restaurant's digital presence with high-fidelity
						editorial layouts. Manage menus in real-time and provide your guests
						with a premium dining experience.
					</p>
					<div className="flex flex-wrap gap-4">
						<button
							type="button"
							className="bg-linear-to-r from-(--primary) to-(--primary-container) text-(--on-primary) px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-(--primary)/20 hover:scale-105 active:scale-95 transition-all"
						>
							Get Started Free
						</button>
						<button
							type="button"
							className="bg-(--surface-container-highest) text-(--on-surface) px-8 py-4 rounded-xl text-lg font-bold hover:bg-(--surface-container-high) transition-all"
						>
							View Demo
						</button>
					</div>
				</div>
				<div className="relative group">
					{/* <!-- Glassmorphic Card Overlay --> */}
					<div className="absolute -top-10 -left-10 w-64 h-64 bg-(--primary)/10 blur-[100px] rounded-full"></div>
					<div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-2">
						<img
							alt="Vibrant restaurant scene"
							className="w-full aspect-4/5 object-cover"
							data-alt="A modern vibrant restaurant with tablets on tables"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuBye1yR9Y3JjYRQ2Bwi6DzDjXGBoukBhJcKf0OFJX1dzhAxgedyaIkJ_TnG9NLreClgRu6N4-frSGtDleJx4sj6cdEl2AI5AJq5HsLxKqFG7qowfm0HNmrQmYq9NuhgjXZt0X5CxbPyy8Ofv4w6gzap6mtzxeU2gLRgJcVE_iOAAw90x2qqOw4qFeuk18cw3eEGuhFFiNey2XUiSbfn-wg8plrtewKI1Evp1XZjm4Q1OjTqrEbpZEfVLR3A8MLh5yKk9spZzuH74jE"
						/>
						<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
						<div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-white/20 border border-white/30 rounded-lg">
							<p className="text-white font-headline font-bold text-xl">
								The Modern Standard
							</p>
							<p className="text-white/80 text-sm">
								Dynamic menus, seamless updates.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
