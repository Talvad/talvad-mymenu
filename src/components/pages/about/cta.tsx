const Cta = () => {
	return (
		<section className="py-24 px-8">
			<div className="max-w-5xl mx-auto bg-(--on-surface) text-(--surface) rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
				<div className="relative z-10">
					<h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
						Ready to welcome the future?
					</h2>
					<p className="text-(--surface)/70 text-xl mb-12 max-w-2xl mx-auto">
						Join the 1,200+ restaurants redefining modern dining with OpenMenu.
					</p>
					<div className="flex flex-col md:flex-row justify-center gap-4">
						<button
							type="button"
							className="px-10 py-4 bg-(--primary) text-white rounded-full font-bold text-lg hover:bg-(--primary-container) transition-colors shadow-xl shadow-(--primary)/30"
						>
							Get Started
						</button>
						<button
							type="button"
							className="px-10 py-4 bg-transparent border border-(--surface)/20 hover:bg-(--surface)/10 rounded-full font-bold text-lg transition-colors"
						>
							Book a Demo
						</button>
					</div>
				</div>
				<div className="absolute inset-0 bg-linear-to-tr from-(--primary)/20 to-transparent"></div>
			</div>
		</section>
	);
};

export default Cta;
