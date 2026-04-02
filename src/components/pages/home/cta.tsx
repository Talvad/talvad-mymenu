const Cta = () => {
	return (
		<section className="py-24 px-8">
			<div className="max-w-5xl mx-auto bg-(--primary) text-(--on-primary) rounded-xl px-4 md:px-16 py-10 md:py-16 relative overflow-hidden text-center shadow-2xl">
				<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
				<h2 className="text-5xl font-black mb-8 relative z-10">
					Ready to Elevate Your Service?
				</h2>
				<p className="text-xl text-(--on-primary)/90 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
					Join over 2,000 restaurants that have modernized their digital
					presence with OpenMenu.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
					<button
						type="button"
						className="bg-(--surface) text-(--primary) px-10 py-5 rounded-xl font-black text-xl hover:bg-(--surface-bright) transition-all shadow-lg"
					>
						Get Started Free
					</button>
					<button
						type="button"
						className="bg-(--primary-container) text-(--on-primary) px-10 py-5 rounded-xl font-black text-xl hover:bg-(--on-primary-fixed-variant) transition-all"
					>
						Schedule a Demo
					</button>
				</div>
			</div>
		</section>
	);
};

export default Cta;
