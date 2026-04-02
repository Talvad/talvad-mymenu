import { ChartNetwork, Coffee, Gauge, UnfoldVertical } from "lucide-react";

const WhyWeExist = () => {
	return (
		<section className="py-24 bg-(--surface) px-8">
			<div className="max-w-7xl mx-auto">
				<div className="mb-16">
					<h2 className="text-4xl md:text-5xl font-extrabold text-(--on-surface) mb-4">
						Why We Exist
					</h2>
					<p className="text-(--on-surface-variant) text-xl max-w-2xl">
						Traditional restaurant software is broken. We're fixing it with a
						focus on the diner's experience and the operator's peace of mind.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* <!-- Bento Box 1 --> */}
					<div className="md:col-span-2 bg-(--surface-container-lowest) p-10 rounded-xl shadow-sm border-l-4 border-(--primary)">
						<div className="flex flex-col h-full justify-between">
							<div>
								<UnfoldVertical className="text-(--primary) mb-6 size-9" />
								<h3 className="text-2xl font-bold mb-4">
									Scaling Human Connection
								</h3>
								<p className="text-(--on-surface-variant) text-lg max-w-md">
									Automation shouldn't be cold. We use data to help hosts
									remember a guest's favorite vintage or their anniversary,
									making every visit feel like coming home.
								</p>
							</div>
							<div className="mt-8 flex gap-4">
								<div className="px-4 py-2 bg-(--surface-container) rounded-lg text-sm font-semibold">
									Personalization
								</div>
								<div className="px-4 py-2 bg-(--surface-container) rounded-lg text-sm font-semibold">
									Guest Memory
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Bento Box 2 --> */}
					<div className="bg-(--tertiary) text-(--on-tertiary) p-10 rounded-xl flex flex-col justify-between">
						<div>
							<Gauge className="mb-6 size-9" />

							<h3 className="text-2xl font-bold mb-4">The Rush, Simplified</h3>
							<p className="opacity-80">
								Real-time floor management that adapts as fast as your kitchen
								does. No more bottlenecks.
							</p>
						</div>
						<div className="mt-8 h-2 w-full bg-white/20 rounded-full overflow-hidden">
							<div className="h-full bg-white w-3/4"></div>
						</div>
					</div>
					{/* <!-- Bento Box 3 --> */}
					<div className="bg-(--surface-container-high) p-10 rounded-xl">
						<ChartNetwork className="text-(--secondary) size-9 mb-6" />

						<h3 className="text-2xl font-bold mb-4">Invisible Analytics</h3>
						<p className="text-(--on-surface-variant)">
							Sophisticated insights without the spreadsheet headache. Know your
							margins in a glance.
						</p>
					</div>
					{/* <!-- Bento Box 4 --> */}
					<div className="md:col-span-2 bg-linear-to-br from-(--primary) to-(--primary-container) text-white p-10 rounded-xl overflow-hidden relative">
						<div className="relative z-10">
							<h3 className="text-3xl font-bold mb-4">Born in the Kitchen</h3>
							<p className="text-white/90 text-lg max-w-xl">
								Our founders aren't just engineers; they're former chefs and
								floor managers who know exactly what it's like when the printer
								stops working during a Friday night rush.
							</p>
						</div>
						<Coffee className=" absolute -bottom-10 -right-10 size-50 opacity-10" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyWeExist;
