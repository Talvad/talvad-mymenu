const Values = () => {
	return (
		<section className="py-24 bg-(--surface-container-low) px-8">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
				<div className="md:w-1/3">
					<h2 className="text-4xl font-extrabold sticky top-32">Our Values</h2>
				</div>
				<div className="md:w-2/3 space-y-16">
					<div className="group">
						<span className="text-(--primary) font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
							01
						</span>
						<h3 className="text-3xl font-bold mb-4">Hospitality First</h3>
						<p className="text-(--on-surface-variant) text-xl leading-relaxed">
							We measure our success by the quality of the guest's smile, not
							just the speed of the transaction. If it doesn't improve the vibe,
							we don't build it.
						</p>
					</div>
					<div className="group">
						<span className="text-(--primary) font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
							02
						</span>
						<h3 className="text-3xl font-bold mb-4">Radical Simplicity</h3>
						<p className="text-(--on-surface-variant) text-xl leading-relaxed">
							A busy server doesn't have time for a complex UI. We strive for
							one-tap solutions and intuitive flows that feel like second
							nature.
						</p>
					</div>
					<div className="group">
						<span className="text-(--primary) font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
							03
						</span>
						<h3 className="text-3xl font-bold mb-4">Sustainable Innovation</h3>
						<p className="text-(--on-surface-variant) text-xl leading-relaxed">
							We build for the long haul. Our platform is designed to grow with
							your restaurant, from your first pop-up to your global flagship.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
