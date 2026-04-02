import { CheckCircle, Hamburger, University, Utensils } from "lucide-react";

const PricingBento = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch py-30">
			{/* <!-- Starter Plan --> */}
			<div className="bg-(--surface-container-lowest) p-8 rounded-xl flex flex-col justify-between group transition-all hover:translate-y-[-4px]">
				<div>
					<div className="flex items-center gap-2 mb-4">
						<Hamburger className="text-(--tertiary)" />
						<span className="text-sm font-bold tracking-widest uppercase text-tertiary">
							Starter
						</span>
					</div>
					<div className="mb-8">
						<span className="text-4xl font-headline font-extrabold text-on-surface">
							Free
						</span>
						<span className="text-on-surface-variant">/forever</span>
					</div>
					<ul className="space-y-4 mb-8">
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--tertiary) size-3.5 mt-1" />

							<span className="text-(--on-surface-variant) font-body">
								Up to 25 Menu Items
							</span>
						</li>
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--tertiary) size-3.5 mt-1" />
							<span className="text-(--on-surface-variant) font-body">
								Basic QR Code Menu
							</span>
						</li>
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--tertiary) size-3.5 mt-1" />
							<span className="text-(--on-surface-variant) font-body">
								Community Support
							</span>
						</li>
					</ul>
				</div>
				<button
					type="button"
					className="w-full py-4 px-6 rounded-xl font-bold bg-(--surface-container-high) text-(--on-surface) hover:bg-(--surface-container-highest) transition-colors font-label"
				>
					Get Started Free
				</button>
			</div>
			{/* <!-- Professional Plan (Featured) --> */}
			<div className="relative bg-(--surface-container-lowest) p-8 rounded-xl flex flex-col justify-between shadow-2xl ring-2 ring-(--primary) transition-all hover:translate-y-[-4px]">
				<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-(--primary) text-(--on-primary) text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
					Most Popular
				</div>
				<div>
					<div className="flex items-center gap-2 mb-4">
						<Utensils className="text-(--primary)" />
						<span className="text-sm font-bold tracking-widest uppercase text-(--primary)">
							Professional
						</span>
					</div>
					<div className="mb-8">
						<div className="flex items-baseline gap-1">
							<span className="text-5xl font-headline font-extrabold text-on-surface">
								$49
							</span>
							<span className="text-(--on-surface-variant)">/month</span>
						</div>
						<p className="text-xs text-(--primary-fixed-dim) font-semibold mt-1 italic">
							Billed annually
						</p>
					</div>
					<ul className="space-y-4 mb-12">
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--primary) size-3.5 mt-1" />
							<span className="text-(--on-surface) font-semibold font-body">
								Unlimited Menu Items
							</span>
						</li>
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--primary) size-3.5 mt-1" />
							<span className="text-(--on-surface) font-semibold font-body">
								Advanced Analytics Dashboard
							</span>
						</li>
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--primary) size-3.5 mt-1" />
							<span className="text-(--on-surface) font-semibold font-body">
								Custom Branding &amp; Fonts
							</span>
						</li>
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--primary) size-3.5 mt-1" />
							<span className="text-(--on-surface) font-semibold font-body">
								Inventory Management Lite
							</span>
						</li>
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--primary) size-3.5 mt-1" />
							<span className="text-(--on-surface) font-semibold font-body">
								Priority Email Support
							</span>
						</li>
					</ul>
				</div>
				<button
					type="button"
					className="w-full py-4 px-6 rounded-xl font-bold bg-linear-to-br from-(--primary) to-(--primary-container) text-(--on-primary) shadow-xl shadow-(--primary)/20 hover:opacity-90 transition-all font-label"
				>
					Go Professional
				</button>
			</div>
			{/* <!-- Enterprise Plan --> */}
			<div className="bg-(--surface-container-lowest) p-8 rounded-xl flex flex-col justify-between transition-all hover:translate-y-[-4px]">
				<div>
					<div className="flex items-center gap-2 mb-4">
						<University className="text-(--secondary)" />
						<span className="text-sm font-bold tracking-widest uppercase text-secondary">
							Enterprise
						</span>
					</div>
					<div className="mb-8">
						<span className="text-4xl font-headline font-extrabold text-(--on-surface)">
							Custom
						</span>
						<p className="text-(--on-surface-variant) text-sm mt-2">
							Tailored for large-scale operations
						</p>
					</div>
					<ul className="space-y-4 mb-8">
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--secondary) size-3.5 mt-1" />
							<span className="text-(--on-surface-variant) font-body">
								Multi-location Management
							</span>
						</li>
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--secondary) size-3.5 mt-1" />
							<span className="text-(--on-surface-variant) font-body">
								API Access &amp; Custom Webhooks
							</span>
						</li>
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--secondary) size-3.5 mt-1" />
							<span className="text-on-surface-variant font-body">
								Dedicated Account Manager
							</span>
						</li>
						<li className="flex items-start gap-3">
							<CheckCircle className="text-(--secondary) size-3.5 mt-1" />
							<span className="text-(--on-surface-variant) font-body">
								SLA &amp; Premium Security
							</span>
						</li>
					</ul>
				</div>
				<button
					type="button"
					className="w-full py-4 px-6 rounded-xl font-bold bg-(--on-surface) text-(--surface) hover:bg-(--on-surface)/90 transition-colors font-label"
				>
					Contact Sales
				</button>
			</div>
		</div>
	);
};

export default PricingBento;
