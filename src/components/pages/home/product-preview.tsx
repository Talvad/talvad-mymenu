import { CheckCircle, Menu } from "lucide-react";

const ProductPreview = () => {
	return (
		<section className="py-24 bg-(--surface) overflow-hidden">
			<div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-20 items-center">
				<div className="lg:w-1/2 order-2 lg:order-1">
					<div className="relative bg-(--surface-container-lowest) rounded-xl shadow-2xl p-4 max-w-md border border-(--outline-variant)/10">
						<div className="flex justify-between items-center mb-6 px-4 pt-4">
							<span className="font-headline font-extrabold text-xl">
								The Grill House
							</span>
							<Menu />
						</div>
						<div className="space-y-6 p-4">
							<div className="flex gap-4 items-center">
								<div className="w-20 h-20 bg-(--surface-container-low) rounded-lg shrink-0">
									<img
										alt="Ribeye steak"
										className="w-full h-full object-cover rounded-lg"
										data-alt="Gourmet ribeye steak on a plate"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyzyADiANgEovq60fM42029EI9QYpXPUOkzbhFSkkEPf9y3BfGQUPbqNPamDghJxNPSwaDSBd83rjfj6DgL2bKmmkQ6s-4XjfA409Vkn-HwBaGpnxOKSHVPpziaowJxBmn92G9A4jLTIueCGGxUCrn2aClMPFv1jurokju8wVTPRczqzOf4yvzqP-CB2FsLqd838nJfGIUgw3xKrnNns318DmvYWnKrguVqNRk0_GBOMJMF-R8Io9nVfhMdlK6Sb-h0OVGQ9_rNF8"
									/>
								</div>
								<div className="flex-1">
									<div className="flex justify-between font-bold">
										<span>Dry-Aged Ribeye</span>
										<span className="text-(--primary)">$42</span>
									</div>
									<p className="text-xs text-(--on-surface-variant)">
										28-day aged, bone-in, peppercorn crust.
									</p>
								</div>
							</div>
							<div className="flex gap-4 items-center">
								<div className="w-20 h-20 bg-(--surface-container-low) rounded-lg shrink-0">
									<img
										alt="Craft cocktail"
										className="w-full h-full object-cover rounded-lg"
										data-alt="Elegant cocktail in a crystal glass"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlLc8qHW0l4QTYenfpj37IRKfJf5TalpjRjksT2zGW73VrQ_JCBOovY2VRlDBVD6oi9z3MYMvTPyKuvCqu3JKx_UiQ5WrJ9PdTk6K-MO5ryYC00BOEe8SxOFQ9w5ewlDQqVNxRS-zAXDlZsVKbjnrJi0zYV4BMwP7BcPZbSGvtQD3sWd85C_U6rJahyUNGQgmeWGKgD8Atfx6w7cEqyFic6TGFMAb9XC9-n9jjTy8cQqnfDGj_xTKIVBROZTOVC-FFrLKrAQDUX1g"
									/>
								</div>
								<div className="flex-1">
									<div className="flex justify-between font-bold">
										<span>Smoked Old Fashioned</span>
										<span className="text-(--primary)">$16</span>
									</div>
									<p className="text-xs text-(--on-surface-variant)">
										Bourbon, maple syrup, orange peel.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:w-1/2 order-1 lg:order-2">
					<h2 className="text-5xl font-extrabold text-(--on-surface) mb-8 leading-tight">
						Menus that look as good as they taste.
					</h2>
					<p className="text-xl text-(--on-surface-variant) mb-8 leading-relaxed">
						Don't settle for generic lists. Our system generates beautiful,
						high-contrast layouts that guide your customers through your
						culinary journey.
					</p>
					<ul className="space-y-4 mb-10">
						<li className="flex items-center gap-3">
							<CheckCircle className="text-(--primary)" />

							<span className="font-medium text-(--on-surface)">
								Automatic Image Optimization
							</span>
						</li>
						<li className="flex items-center gap-3">
							<CheckCircle className="text-(--primary)" />
							<span className="font-medium text-(--on-surface)">
								Smart Allergies Tagging
							</span>
						</li>
						<li className="flex items-center gap-3">
							<CheckCircle className="text-(--primary)" />
							<span className="font-medium text-(--on-surface)">
								One-Click Translations
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ProductPreview;
