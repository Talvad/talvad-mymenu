import Cta from "./cta";
import Features from "./features";
import Hero from "./hero";
import ProductPreview from "./product-preview";

const HomePage = () => {
	return (
		<main className="">
			<Hero />
			<Features />
			<ProductPreview />
			<Cta />
		</main>
	);
};

export default HomePage;
