import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";

export const Portfolio = () => {
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<>
			<section>
				<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-44">
					<div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
						<h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
							<span className="inline-block mb-1 sm:mb-4">
								Projects: <br className="hidden md:block" />
								Past and Present
							</span>
							<div className="h-1 ml-auto duration-300 origin-left transform bg-brand-bgreen scale-x-30 group-hover:scale-x-100" />
						</h2>
					</div>
					<div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
						<motion.div
							ref={ref}
							initial={{ opacity: 0, y: -20 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="/projects" aria-label="View Item">
								<div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
									<img
										className="object-cover w-full h-56 md:h-64 xl:h-80"
										src="/readybank.png"
										alt="Readybank"
									/>
									<div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
										<p className="mb-4 text-lg font-bold text-gray-100">
											Ready Bank
										</p>
										<p className="text-sm tracking-wide text-gray-300">
											Social Media site with banking features. Built as a
											prototype for my major project in my final semester at
											university.
										</p>
									</div>
								</div>
							</Link>
						</motion.div>
						<motion.div
							ref={ref}
							initial={{ opacity: 0, y: -20 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<Link href="/projects" aria-label="View Item">
								<div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
									<img
										className="object-cover w-full h-56 md:h-64 xl:h-80"
										src="osli.png"
										alt=""
									/>
									<div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
										<p className="mb-4 text-lg font-bold text-gray-100">OSLi</p>
										<p className="text-sm tracking-wide text-gray-300">
											An open source sample library. OSLi will provide a
											platform agnostic alternative to the subscription
											services.
										</p>
									</div>
								</div>
							</Link>
						</motion.div>
						<motion.div
							ref={ref}
							initial={{ opacity: 0, y: -20 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Link href="/projects" aria-label="View Item">
								<div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
									<img
										className="object-cover w-full h-56 md:h-64 xl:h-80"
										src="TalentoTotoalLogo.jpg"
										alt=""
									/>
									<div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
										<p className="mb-4 text-lg font-bold text-gray-100">
											Talento Total
										</p>
										<p className="text-sm tracking-wide text-gray-300">
											A Demo site for the Talento Total education non-profit.
										</p>
									</div>
								</div>
							</Link>
						</motion.div>
						<motion.div
							ref={ref}
							initial={{ opacity: 0, y: -20 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Link href="/projects" aria-label="View Item">
								<div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
									<img
										className="object-cover w-full h-56 md:h-64 xl:h-80"
										src="deeplayer.png"
										alt=""
									/>
									<div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
										<p className="mb-4 text-lg font-bold text-gray-100">
											Deeplayer
										</p>
										<p className="text-sm tracking-wide text-gray-300">
											A machine learning model that genereates MIDI chord
											progressions and melodies. Uses a LSTM neural network to
											generate notes based on my private dataset of MIDI files.
										</p>
									</div>
								</div>
							</Link>
						</motion.div>
					</div>

					<div className="text-center">
						<Link
							href="/projects"
							aria-label=""
							className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-brand-bred"
						>
							View Projects
							<svg
								className="inline-block w-3 ml-2"
								fill="currentColor"
								viewBox="0 0 12 12"
							>
								<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
							</svg>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};
