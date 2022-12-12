import Image from "next/image";
// typescript prop defs
interface Project {
	projectID: number;
	title: string;
	link: string;
	imgSrc: string;
	description: string;
	features: string[];
	technologies: string[];
}

export const ProjectInfo = ({
	projectID,
	title,
	link,
	imgSrc,
	description,
	features,
	technologies,
}: Project) => {
	return (
		<>
			{projectID % 2 === 0 ? (
				<>
					<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
						<div className="grid gap-5 row-gap-10 lg:grid-cols-2">
							<div className="flex flex-col justify-center">
								<div className="max-w-xl mb-6">
									<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
										{title}
									</h2>
									<p className="text-base text-gray-700 md:text-lg">
										{description}
									</p>
								</div>
								<p className="mb-4 text-sm font-bold tracking-widest uppercase">
									Technologies & Features
								</p>
								<div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
									<ul className="space-y-3">
										{features.map((feature) => (
											<li key={feature} className="flex">
												<span className="mr-1">
													<svg
														className="w-5 h-5 mt-px text-brand-bred"
														stroke="currentColor"
														viewBox="0 0 52 52"
													>
														<polygon
															strokeWidth="4"
															strokeLinecap="round"
															strokeLinejoin="round"
															fill="none"
															points="29 13 14 29 25 29 23 39 38 23 27 23"
														/>
													</svg>
												</span>
												{feature}
											</li>
										))}
									</ul>
									<ul className="space-y-3">
										{technologies.map((technology) => (
											<li key={technology} className="flex">
												<span className="mr-1">
													<svg
														className="w-5 h-5 mt-px text-brand-bred"
														stroke="currentColor"
														viewBox="0 0 52 52"
													>
														<polygon
															strokeWidth="4"
															strokeLinecap="round"
															strokeLinejoin="round"
															fill="none"
															points="29 13 14 29 25 29 23 39 38 23 27 23"
														/>
													</svg>
												</span>
												{technology}
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="">
								<Image
									className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
									src={imgSrc}
									alt=""
									width={500}
									height={500}
								/>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
						<div className="grid gap-5 row-gap-10 lg:grid-cols-2">
							<div>
								<Image
									className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
									src={imgSrc}
									alt=""
									width={500}
									height={500}
								/>
							</div>
							<div className="flex flex-col justify-center lg:pl-36">
								<div className="max-w-xl mb-6">
									<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
										{title}
									</h2>
									<p className="text-base text-gray-700 md:text-lg">
										{description}
									</p>
								</div>
								<p className="mb-4 text-sm font-bold tracking-widest uppercase">
									Technologies & Features
								</p>
								<div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
									<ul className="space-y-3">
										{features.map((feature) => (
											<li key={feature} className="flex">
												<span className="mr-1">
													<svg
														className="w-5 h-5 mt-px text-brand-bred"
														stroke="currentColor"
														viewBox="0 0 52 52"
													>
														<polygon
															strokeWidth="4"
															strokeLinecap="round"
															strokeLinejoin="round"
															fill="none"
															points="29 13 14 29 25 29 23 39 38 23 27 23"
														/>
													</svg>
												</span>
												{feature}
											</li>
										))}
									</ul>
									<ul className="space-y-3">
										{technologies.map((technology) => (
											<li key={technology} className="flex">
												<span className="mr-1">
													<svg
														className="w-5 h-5 mt-px text-brand-bred"
														stroke="currentColor"
														viewBox="0 0 52 52"
													>
														<polygon
															strokeWidth="4"
															strokeLinecap="round"
															strokeLinejoin="round"
															fill="none"
															points="29 13 14 29 25 29 23 39 38 23 27 23"
														/>
													</svg>
												</span>
												{technology}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
