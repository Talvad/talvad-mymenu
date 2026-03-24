const Hero = () => {
	return (
		<section className="relative min-h-[900px] flex items-center overflow-hidden px-8 pt-20">
			<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
				<div className="lg:col-span-7 z-10">
					<span className="inline-block px-4 py-1.5 rounded-full bg-(--secondary-fixed) text-(--on-secondary-fixed-variant) text-xs font-bold tracking-widest uppercase mb-6">
						Established 2024
					</span>
					<h1 className="text-6xl md:text-8xl font-black text-(--on-surface) leading-[0.9] tracking-tighter mb-8">
						The Digital{" "}
						<span className="text-(--primary) italic">Maître d’</span>
					</h1>
					<p className="text-xl md:text-2xl text-(--on-surface-variant) max-w-xl leading-relaxed font-medium">
						Elevating hospitality through intentional design and invisible
						technology. We don't just build software; we set the table for
						success.
					</p>
				</div>
				<div className="lg:col-span-5 relative">
					<div className="aspect-4/5 rounded-xl overflow-hidden shadow-2xl rotate-3 translate-x-4 scale-105 bg-(--surface-container-high)">
						<img
							className="w-full h-full object-cover"
							alt="Sophisticated restaurant interior with warm lighting"
							data-alt="Sophisticated restaurant interior with warm lighting"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwemXSRk_JKYp5qaXVhsdUPvh4jsqY0t3YK38ZuR_dwYROAxMsVpp-VPu-to0lxo1CHXey6oth7Y7goR66FZATnvCmFPtfx9QHv9hNjDzRRQ6GNFbLEaP3Sl2oebCDGcD-K5Rrlg3-RjpFU29S0hIyQNJSKtNes3qNvQGTfVOUQkstFpjxl3NDOu6BdCdj76bJO5WwR4Nm9e7qRc5yoVfWhKX85F4Rnga9UNOOkSCQ8uWSE4K7K96OEA-xARNRTvA75IkV2jQwa1g"
						/>
					</div>
					<div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-xl overflow-hidden shadow-2xl -rotate-6 hidden md:block border-8 border-surface">
						<img
							className="w-full h-full object-cover"
							alt="A chef carefully plating a fine dining dish"
							data-alt="A chef carefully plating a fine dining dish"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaYQErJqBk03M5V1JkYrBA9y8XyGWKlRc7kpFF3MN37zJJ3toqhUcISMpoH2sQwCL6irLSwReOBdLgfkvjr59QuaBXGd0w1fv0phFnt5OqKjkB8KVJ38RL8YdJc4CVt1VjGsLerL9Yqvszp5nLDswTw4PyqsZe1TjECdvwhTVscTUmO4M7nIq0K0NSXmHmdkxzzIQei5r3Q7HZ-YLXiLJ_HkvvT14C8uQEHPzrjZk08yFGP4zZp99I25kH25bl_4kC7-aAYAftrw8"
						/>
					</div>
				</div>
			</div>
			{/* <!-- Background Decorative Element --> */}
			<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-0"></div>
		</section>
	);
};

export default Hero;
