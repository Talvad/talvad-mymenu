import { ArrowRight, Earth, Users, UtensilsCrossed, Zap } from "lucide-react";

const Features = () => {
	return (
		<section className="py-24 px-8 bg-(--surface-container-low)">
			<div className="max-w-7xl mx-auto">
				<div className="mb-16">
					<h2 className="text-4xl md:text-5xl font-black text-(--on-surface) mb-4">
						Precision and Grace.
					</h2>
					<p className="text-(--on-surface-variant) text-lg">
						Sophisticated tools for the modern restaurateur.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* <!-- Feature 1: Easy Menu Management --> */}
					<div className="md:col-span-2 bg-(--surface-container-lowest) p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
						<div>
							<div className="w-14 h-14 bg-(--primary-fixed) rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
								<UtensilsCrossed className="text-(--primary) size-7.5" />
							</div>
							<h3 className="text-3xl font-bold text-(--on-surface) mb-4">
								Easy Menu Management
							</h3>
							<p className="text-(--on-surface-variant) text-lg max-w-md">
								Intuitive interface designed for high-paced environments. Update
								ingredients, descriptions, and prices with editorial precision.
							</p>
						</div>
						<div className="mt-12 flex gap-4 overflow-hidden">
							<div className="bg-(--surface-container-low) px-6 py-3 rounded-lg border border-(--outline-variant)/20 whitespace-nowrap">
								Signature Steaks
							</div>
							<div className="bg-(--surface-container-low) px-6 py-3 rounded-lg border border-(--outline-variant)/20 whitespace-nowrap">
								Wine List 2024
							</div>
							<div className="bg-(--surface-container-low) px-6 py-3 rounded-lg border border-(--outline-variant)/20 whitespace-nowrap">
								Cocktails
							</div>
						</div>
					</div>
					{/* <!-- Feature 2: Real-time Updates --> */}
					<div className="bg-linear-to-br from-(--tertiary) to-(--tertiary-container) p-10 rounded-xl text-(--on-tertiary) shadow-xl flex flex-col justify-center">
						<Zap className="mb-6 size-12" />

						<h3 className="text-3xl font-bold mb-4">Real-time Updates</h3>
						<p className="text-(--on-tertiary)/80 text-lg">
							No more refreshing. Instantly push 86'd items or price changes
							across all customer devices.
						</p>
					</div>
					{/* <!-- Feature 3: Public Store Pages --> */}
					<div className="bg-(--surface-container-lowest) p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:col-span-3 lg:col-span-1">
						<div className="w-14 h-14 bg-(--secondary-fixed) rounded-lg flex items-center justify-center mb-8">
							<Earth className="text-(--secondary) size-7.5" />
						</div>
						<h3 className="text-2xl font-bold text-(--on-surface) mb-4">
							Public Store Pages
						</h3>
						<p className="text-(--on-surface-variant) text-base mb-8">
							Beautifully rendered, SEO-optimized store pages that mirror the
							premium feel of your physical establishment.
						</p>
						<div className="mt-auto border-t border-(--surface-container-high) pt-6 flex items-center justify-between">
							<span className="text-sm font-bold text-(--on-surface)">
								openmenu.io/your-bistro
							</span>
							<ArrowRight className="text-(--primary)" />
						</div>
					</div>
					{/* <!-- Occupancy Meter (Brand Element) --> */}
					<div className="md:col-span-2 bg-(--surface-container-highest) p-10 rounded-xl flex items-center gap-12 overflow-hidden">
						<div className="flex-1">
							<h4 className="text-sm font-bold uppercase tracking-widest text-(--on-surface-variant) mb-4">
								Current Capacity
							</h4>
							<div className="h-4 w-full bg-(--surface-container) rounded-full overflow-hidden">
								<div className="h-full bg-(--primary) w-[75%] rounded-full"></div>
							</div>
							<p className="mt-4 text-sm font-medium text-(--on-surface)">
								Lunch Rush Active — 75% Capacity
							</p>
						</div>
						<div className="hidden lg:block w-32 h-32 opacity-20">
							<Users className="size-32" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
