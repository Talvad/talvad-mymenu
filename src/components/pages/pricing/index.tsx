import Faq from "./faq";
import Features from "./features";
import Hero from "./hero";
import PricingBento from "./pricing-bento";

const PricingPage = () => {
	return (
		<main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
			<Hero />
			<PricingBento />
			<Features />
			<Faq />
		</main>
	);
};

export default PricingPage;
