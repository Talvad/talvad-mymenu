import { Gauge, Languages } from "lucide-react";

const Features = () => {
	return (
		<section className="mt-32 grid grid-cols-12 gap-6">
			<div className="col-span-12 md:col-span-5 flex flex-col justify-center">
				<h2 className="font-headline font-extrabold text-4xl text-(--on-surface) mb-6 leading-tight">
					Every detail served with perfection.
				</h2>
				<p className="text-(--on-surface-variant) mb-8 text-lg">
					We don't just host menus; we create digital dining experiences that
					increase average order value and guest satisfaction.
				</p>
				<div className="space-y-6">
					<div className="flex gap-4">
						<div className="bg-(--tertiary-fixed) w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
							<Gauge className="text-(--on-tertiary-fixed-variant)" />
						</div>
						<div>
							<h4 className="font-bold text-(--on-surface)">Lightning Fast</h4>
							<p className="text-sm text-(--on-surface-variant)">
								Menus load in under 200ms globally.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="bg-(--secondary-fixed) w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
							<Languages className="text-(--on-secondary-fixed-variant)" />
						</div>
						<div>
							<h4 className="font-bold text-(--on-surface)">
								Auto-Translation
							</h4>
							<p className="text-sm text-(--on-surface-variant)">
								Support for 40+ languages with AI precision.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-12 md:col-start-7 md:col-span-6 bg-(--surface-container-low) rounded-xl p-2 relative overflow-hidden h-[400px]">
				<div className="absolute inset-0 bg-linear-to-tr from-(--primary)/10 to-transparent"></div>
				<div className="relative h-full w-full rounded-lg bg-(--surface-container-lowest) shadow-sm p-6 overflow-hidden">
					<div className="flex justify-between items-center mb-8">
						<div className="flex gap-2">
							<div className="w-3 h-3 rounded-full bg-(--error-container)"></div>
							<div className="w-3 h-3 rounded-full bg-(--tertiary-fixed)"></div>
							<div className="w-3 h-3 rounded-full bg-(--surface-container-highest)"></div>
						</div>
						<div className="h-4 w-32 bg-(--surface-container-low) rounded"></div>
					</div>
					<div className="space-y-4">
						<div className="h-10 w-full bg-(--surface-container-low) rounded-lg animate-pulse"></div>
						<div className="grid grid-cols-2 gap-4">
							<div className="h-32 bg-(--primary)/5 rounded-lg border border-(--primary)/10 flex flex-col items-center justify-center">
								<span className="text-(--primary) font-bold text-2xl font-headline">
									+14%
								</span>
								<span className="text-[10px] text-(--on-surface-variant) uppercase font-bold tracking-widest">
									Revenue Growth
								</span>
							</div>
							<div className="h-32 bg-(--tertiary)/5 rounded-lg border border-(--tertiary)/10 flex flex-col items-center justify-center">
								<span className="text-(--tertiary) font-bold text-2xl font-headline">
									2.4m
								</span>
								<span className="text-[10px] text-(--on-surface-variant) uppercase font-bold tracking-widest">
									Total Views
								</span>
							</div>
						</div>
						<div className="h-24 w-full bg-(--surface-container-low) rounded-lg"></div>
					</div>
					<img
						className="absolute bottom-[-20%] right-[-10%] w-2/3 rounded-xl shadow-2xl rotate-[-5deg] opacity-40"
						alt="Modern minimalist restaurant interior dashboard view"
						data-alt="Modern minimalist restaurant interior dashboard view"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhpPznkzjv6Glf7effPSD16L5nQ-ML6pZ1-cjci9fgzFfNMI-uAtTAx0t2AvbwvnhOF32VJTaur-T1MUoI9018jC5tQ94oWIgfF4tZC-1dWWFpYn4U2n71PCjDgXmreGQ_jxDCpE9Gcfr-zUuukIVmQvvAw1wuEy4_fFJXN5vPjzfur9hjSyUTRApsl_7U1MIoU-ex67KY9NBjHMiyHS9SFNKECrRUYwgQO1iWUjzu7sag7Bk8-v1qSO4szjTiVuQ1m4IsMSHMcsw"
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
