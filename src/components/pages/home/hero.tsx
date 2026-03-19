import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "#/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "#/components/ui/carousel";

const heroData = [
	{
		imageUrl: "./assets/svg/know_the_details.svg",
		heading: "All informations to the customer",
		description:
			"here goes the description about your heading, here goes the description about your heading, here goes the description about your heading",
	},
	{
		imageUrl: "./assets/svg/know_you_have.svg",
		heading: "Customer knows what the store has",
		description:
			"here goes the description about your heading, here goes the description about your heading, here goes the description about your heading",
	},
	{
		imageUrl: "./assets/svg/manage_they_want.svg",
		heading: "Customer Manages what they want",
		description:
			"here goes the description about your heading, here goes the description about your heading, here goes the description about your heading",
	},
	{
		imageUrl: "./assets/svg/plan_they_want.svg",
		heading: "Customers can plan what they want",
		description:
			"here goes the description about your heading, here goes the description about your heading, here goes the description about your heading",
	},
];
const Hero = () => {
	return (
		<Carousel
			className="w-full h-screen"
			opts={{
				align: "start",
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 5000,
				}),
			]}
		>
			<CarouselContent>
				{heroData.map((data) => (
					<CarouselItem key={data.imageUrl}>
						<Card className="h-dvh rounded-none p-10">
							<CardContent className="flex  items-center justify-between p-6">
								<img src={data.imageUrl} alt={data.heading} className="w-1/3" />
								<div className="flex items-center justify-center flex-col gap-10">
									<h2 className="text-6xl font-medium text-center">
										{data.heading}
									</h2>
									<p className="text-xl text-gray-800 dark:text-gray-200 text-center">
										{data.description}
									</p>
								</div>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default Hero;
