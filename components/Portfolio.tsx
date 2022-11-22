import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export const Portfolio = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0,
	});
	return (
		<>
			{/* <div ref={ref}>
				<h2>{`Header inside viewport ${inView}.`}</h2>
			</div> */}

			{/* Heading */}
			<section></section>

			{/* Content 1 */}
			{/* <section className="snap-y snap-center">
				<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="grid gap-10 lg:grid-cols-2">
						<div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
							<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
								<svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
									<polyline
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeMiterlimit="10"
										points=" 8,5 8,1 16,1 16,5"
										strokeLinejoin="round"
									/>
									<polyline
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeMiterlimit="10"
										points="9,15 1,15 1,5 23,5 23,15 15,15"
										strokeLinejoin="round"
									/>
									<polyline
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeMiterlimit="10"
										points="22,18 22,23 2,23 2,18"
										strokeLinejoin="round"
									/>
									<rect
										x="9"
										y="13"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeMiterlimit="10"
										width="6"
										height="4"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="max-w-xl mb-6">
								<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
									Let us handle
									<br className="hidden md:block" />
									your next{" "}
									<span className="inline-block text-brand-bred">
										destination
									</span>
								</h2>
								<p className="text-base text-gray-700 md:text-lg">
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae. explicabo.
								</p>
							</div>
							<div>
								<a
									href="/"
									aria-label=""
									className="inline-flex items-center font-semibold transition-colors duration-200 text-brand-bred hover:text-brand-bred"
								>
									Learn more
									<svg
										className="inline-block w-3 ml-2"
										fill="currentColor"
										viewBox="0 0 12 12"
									>
										<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
									</svg>
								</a>
							</div>
						</div>
						<div className="flex items-center justify-center -mx-4 lg:pl-8">
							<div className="flex flex-col items-end px-3">
								<img
									className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
									src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
									alt=""
								/>
								<img
									className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
									src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
									alt=""
								/>
							</div>
							<div className="px-3">
								<img
									className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
									src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* Content 2 */}
			<section>
				<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
						<h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
							<span className="inline-block mb-1 sm:mb-4">
								Projects: <br className="hidden md:block" />
								Ongoing and Past
							</span>
							<div className="h-1 ml-auto duration-300 origin-left transform bg-brand-bgreen scale-x-30 group-hover:scale-x-100" />
						</h2>
						<p className="text-gray-700 lg:text-sm lg:max-w-md">
							{/* I build projects with Typescritpt and React. I also have
							experience with Node.js, Express, and MongoDB. I am currently
							learning React-Native and GraphQL. I am also learning how to use
							the Stripe API to accept payments. */}
						</p>
					</div>
					<div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
						<Link href="/projects/readybank" aria-label="View Item">
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
						<Link href="/" aria-label="View Item">
							<div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
								<img
									className="object-cover w-full h-56 md:h-64 xl:h-80"
									src="osli.png"
									alt=""
								/>
								<div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
									<p className="mb-4 text-lg font-bold text-gray-100">OSLi</p>
									<p className="text-sm tracking-wide text-gray-300">
										An open source sample library used to organise sound files
										and samples. OSLi will provide a a free alternative to the
										Splice sample library plugin that can be used with any
										existing file structure. Plans to extend file type
									</p>
								</div>
							</div>
						</Link>
						<Link href="/" aria-label="View Item">
							<div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
								<img
									className="object-cover w-full h-56 md:h-64 xl:h-80"
									src="TTlogo.jpg"
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
						<Link href="/" aria-label="View Item">
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
					</div>
					<div className="text-center">
						<Link
							href="/"
							aria-label=""
							className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-brand-bred"
						>
							View GitHub
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
