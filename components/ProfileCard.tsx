import Image from "next/image";

export const ProfileCard = () => {
	return (
		<section className="pt-16 bg-blueGray-50">
			<div className="w-full px-4 mx-auto lg:w-4/12">
				<div className="relative flex flex-col w-full min-w-0 mt-16 mb-6 break-words bg-white rounded-lg shadow-xl">
					<div className="px-6">
						<div className="flex flex-wrap justify-center">
							<div className="flex justify-center w-full px-4">
								<div className="relative">
									<Image
										alt="profileImage"
										src="/MeArmsFolded.png"
										className="h-auto ml-0.5 -m-28 align-middle border-none rounded-full"
										width={350}
										height={350}
									/>
								</div>
							</div>
							<div className="w-full px-4 mt-20 text-center">
								<div className="flex justify-center py-4 pt-8 lg:pt-16">
									<div className="p-3 m-4 text-center">
										<span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
											X
										</span>
										<span className="text-sm text-blueGray-400">X</span>
									</div>
									<div className="p-3 m-4 text-center">
										<span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
											x
										</span>
										<span className="text-sm text-blueGray-400">x</span>
									</div>
									<div className="p-3 text-center lg:m-4">
										<span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
											X
										</span>
										<span className="text-sm text-blueGray-400">X</span>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-6 text-center">
							<h3 className="mb-2 text-xl font-semibold leading-normal text-blueGray-700">
								Byron Lewis
							</h3>
							<div className="mt-0 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400">
								<i className="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400"></i>
								Sydney, Australia
							</div>
							<div className="mt-10 mb-2 text-blueGray-600">
								<i className="mr-2 text-lg fas fa-briefcase text-blueGray-400"></i>
								Software Engineer, Web Developer
							</div>
							<div className="mb-2 text-blueGray-600">
								<i className="mr-2 text-lg fas fa-university text-blueGray-400"></i>
								Western Sydney University
							</div>
						</div>
						<div className="flex items-center justify-center mt-10">
							<div className="w-1/2 border-t border-blueGray-200"></div>
						</div>

						<div className="py-10 mt-5 text-center ">
							<div className="flex flex-wrap justify-center">
								<div className="w-full px-4 lg:w-9/12">
									<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
										Byron is a software engineer and web developer based in
										Sydney, Australia. Has recently completed a Bachelor of
										Computer Science at Western Sydney University. He has a
										passion for web development and is always looking to learn
										new technologies.
									</p>
									{/* <a
										href="javascript:void(0);"
										className="font-normal text-pink-500"
									>
										Show more
									</a> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="relative pt-8 pb-6 mt-8">
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap items-center justify-center md:justify-between">
						<div className="w-full px-4 mx-auto text-center md:w-6/12"></div>
					</div>
				</div>
			</footer>
		</section>
	);
};
