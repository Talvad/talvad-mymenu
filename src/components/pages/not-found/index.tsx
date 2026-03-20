export const NotFoundPage = () => {
	return (
		<main className="page-wrap">
			<section className="flex flex-col items-center justify-center gap-10">
				<img
					src="./assets/svg/page-not-found.svg"
					alt="Page Not Found"
					className="w-1/2"
				/>
				<h3 className="md:text-2xl text-center">
					Sorry the item you are looking is not available
				</h3>
			</section>
		</main>
	);
};
