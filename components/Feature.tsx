import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

export const Feature = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});
	return (
		<div className="relative">
			<div className="relative bg-brand-bblue700">
				<svg
					className="absolute inset-x-0 bottom-0 text-white"
					viewBox="0 -1 1160 163"
				>
					<path
						fill="currentColor"
						d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
					/>
				</svg>
				<div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="flex flex-col items-center justify-between xl:flex-row">
						<div className="flex items-center justify-center -mx-4 lg:pl-8">
							<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
								<div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center md:text-left lg:text-left">
									<h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
										Reach out
										<br className="hidden md:block" />
										and say{" "}
										<span className="relative inline-block px-2">
											<div className="absolute inset-0 transform -skew-x-12 bg-brand-bgreen" />
											<span className="relative text-teal-900">hello</span>
										</span>
									</h2>
									<p className="mb-6 text-base text-gray-200 lg:w-96 md:text-lg">
										If you{"'"}re interested in working with me, or just want to
										say hello, feel free to reach out to me via email or social
										media.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full max-w-xl xl:px-8 xl:w-5/12">
							<div className="bg-white rounded shadow-2xl p-7 sm:p-10">
								<div className="flex flex-row items-center justify-center">
									<h3 className="px-2 pt-4 mb-4 text-2xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
										Say Hello{" "}
									</h3>
									<motion.div
										ref={ref}
										initial={{ opacity: 0, scale: 2 }}
										animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
										transition={{ delay: 0.5, duration: 0.5 }}
										className="text-6xl "
									>
										👋
									</motion.div>
								</div>
								<form>
									<div className="mb-1 sm:mb-2">
										<label
											htmlFor="name"
											className="inline-block mb-1 font-medium"
										>
											Name
										</label>
										<input
											placeholder="Jane Smith"
											required
											type="text"
											className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-brand-bred focus:outline-none focus:shadow-outline"
											id="name"
											name="name"
										/>
									</div>
									<div className="mb-1 sm:mb-2">
										<label
											htmlFor="email"
											className="inline-block mb-1 font-medium"
										>
											E-mail
										</label>
										<input
											placeholder="jane@example.com"
											required
											type="text"
											className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-brand-bred focus:outline-none focus:shadow-outline"
											id="email"
											name="email"
										/>
									</div>
									<div className="mb-1 sm:mb-2">
										<label
											htmlFor="email"
											className="inline-block mb-1 font-medium"
										>
											Message
										</label>
										<textarea
											placeholder="Hi, I would like to ... "
											required
											rows={8}
											className="flex-grow w-full h-32 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-brand-bred focus:outline-none focus:shadow-outline"
											id="message"
											name="message"
										/>
									</div>
									<div className="mt-4 mb-2 sm:mb-4">
										<button
											type="submit"
											className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brand-bred hover:bg-brand-bred600 focus:shadow-outline focus:outline-none"
										>
											Submit
										</button>
									</div>
									<p className="text-xs text-gray-600 sm:text-sm">
										I hate spam too. I{"'"}ll never share your information.
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
