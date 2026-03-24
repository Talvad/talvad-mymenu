import Cta from "./cta";
import Hero from "./hero";
import Mission from "./mission";
import Values from "./values";
import WhyWeExist from "./why-we-exist";

const AboutPage = () => {
	return (
		<main>
			<Hero />
			<Mission />
			<WhyWeExist />
			<Values />
			<Cta />
		</main>
	);
};

export default AboutPage;
