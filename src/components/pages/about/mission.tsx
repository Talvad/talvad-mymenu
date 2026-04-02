import { ArrowRight, Utensils } from "lucide-react";

const Mission = () => {
	return (
		<section className="py-24 bg-(--surface-container-low)">
			<div className="max-w-7xl mx-auto px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
					<div className="order-2 md:order-1">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-4">
								<div className="h-48 rounded-lg bg-(--surface-container-highest) flex items-center justify-center p-8">
									<Utensils className="text-(--primary) size-12" />
								</div>
								<div className="h-64 rounded-lg overflow-hidden">
									<img
										className="w-full h-full object-cover"
										alt="Hands holding a digital tablet in a kitchen"
										data-alt="Hands holding a digital tablet in a kitchen"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5fkJgLPvJsyi-revGl63sZ21Uh_qz3E6gzQ2MOHWcuudnSIrOd3aIRKAmi3lvr4BddrJlF2rUfEU62EpVzMdOureuDJdOq_dM7jXx-RWyFDHLnkvee0U0Q_JFd0oB9ezqEqv0K0BhITLrFDyRsMKlNGXyzL-Wn2cWvsTDB6QNUYXwGFw1nUboc4e-yRgJtjSAXvFFJ-iBiJ_lZQx_2pLgYliZvthxkMwwVQBizpNh_jjuc_D68FLwo8VciP0UdcEudgP73fUmHdE"
									/>
								</div>
							</div>
							<div className="space-y-4 pt-12">
								<div className="h-64 rounded-lg overflow-hidden">
									<img
										className="w-full h-full object-cover"
										alt="A beautifully set restaurant table"
										data-alt="A beautifully set restaurant table"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2fQlN0k0u0nZYuK8FlT4lqA8cK8t0IX41GYKW4NgQpQmzDPBfu01cB-PQLRHkakAeqhxUQufwqYWsobWBjZKmE1z3GJYUCkWxjRSEU_OcE3Xy57SqPYnCSaV-4ICMr4g9pKb2R8Yj7e2RDt6a79MOXDkQZZyXDK_usPXGCGvlgh-a_gMgGQrDzA-WQKOsrqD3H32Sd5DzWv-edqyac1tTmT3CAsu4uae2TsWqbpyIdLSJGZjPj8W8ynCB5XSrg4Zx-uyypqSZz2E"
									/>
								</div>
								<div className="h-48 rounded-lg bg-(--primary) text-white flex flex-col justify-end p-6">
									<span className="text-3xl font-bold">98%</span>
									<span className="text-sm opacity-80">
										Partner Satisfaction
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="order-1 md:order-2">
						<h2 className="text-4xl md:text-5xl font-extrabold text-(--on-surface) mb-8">
							Our Mission
						</h2>
						<div className="space-y-6 text-lg text-(--on-surface-variant) leading-relaxed">
							<p>
								At OpenMenu, we believe technology should be felt, not seen. Our
								mission is to empower culinary artisans with tools that
								disappear into the background, allowing the food and the guest
								to take center stage.
							</p>
							<p>
								We are bridge-builders between the timeless traditions of
								hospitality and the frontier of digital efficiency. By
								modernizing operations, we help restaurants reclaim their time
								to focus on what matters most: the craft.
							</p>
							<div className="pt-4">
								<button
									type="button"
									className="flex items-center gap-2 text-(--primary) font-bold group"
								>
									Read our white paper
									<ArrowRight className="group-hover:translate-x-1 transition-transform" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Mission;
