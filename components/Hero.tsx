import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
	return (
		<div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
			<motion.div
				initial={{ x: 1000 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
			>
				<div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
					<svg
						className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
						viewBox="0 0 100 100"
						fill="currentColor"
						preserveAspectRatio="none slice"
					>
						<path d="M50 0H100L50 100H0L50 0Z" />
					</svg>
					<img
						className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
						src="/meGreece.jpg"
						alt=""
					/>
				</div>
			</motion.div>

			<motion.div
				initial={{ x: -1000 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
			>
				<div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
					<div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
						<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-brand-byellow">
							Profile
						</p>
						<h2 className="mb-5 font-sans text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl md:text-4x sm:text-4xl sm:leading-none">
							Byron Lewis {/* can imagine{" "} */}
							<span className="inline-block text-brand-bred ">Portfolio</span>
							{/* Website{" "} */}
						</h2>
						<p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
							Hi, I{"'"}m Byron Lewis. I{"'"}m a software engineer and a web
							developer. I{"'"}m passionate about building things that live on
							the internet, I create websites, applications, and anything in
							between. My goal is to always build products that provide
							pixel-perfect, performant experiences.
						</p>
						<div className="flex items-center">
							<Link
								href="/"
								className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brand-bred hover:bg-brand-bred600 focus:shadow-outline focus:outline-none"
							>
								Portfolio
							</Link>
							<Link
								href="/"
								aria-label=""
								className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-brand-bred"
							>
								Resume
							</Link>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
