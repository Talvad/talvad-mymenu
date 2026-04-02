const Faq = () => {
	return (
		<section className="mt-32 max-w-4xl mx-auto">
			<h3 className="text-3xl font-headline font-bold text-center mb-12">
				Frequently Asked Questions
			</h3>
			<div className="space-y-4">
				<div className="bg-(--surface-container-low) p-6 rounded-xl">
					<h5 className="font-bold text-(--on-surface) mb-2">
						Can I switch plans later?
					</h5>
					<p className="text-(--on-surface-variant) text-sm">
						Yes, you can upgrade or downgrade your plan at any time. Changes
						will be reflected in your next billing cycle.
					</p>
				</div>
				<div className="bg-(--surface-container-low) p-6 rounded-xl">
					<h5 className="font-bold text-(--on-surface) mb-2">
						What happens after I reach the item limit?
					</h5>
					<p className="text-(--on-surface-variant) text-sm">
						You'll still be able to use your existing menu, but you won't be
						able to add new items until you upgrade to a Professional account.
					</p>
				</div>
				<div className="bg-(--surface-container-low) p-6 rounded-xl">
					<h5 className="font-bold text-on-surface mb-2">
						Is there a contract required?
					</h5>
					<p className="text-(--on-surface-variant) text-sm">
						No. Our plans are month-to-month and you can cancel anytime without
						hidden fees or penalties.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Faq;
