import { motion } from "framer-motion";

export const Feature = () => {
	return (
		<div className="bg-brand-bgreen600">
			<div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-44">
				<motion.div
				// animate={{
				// 	// scale: [1, 1.1, 1.2, 1.1, 1],
				// 	opacity: [1, 0.8, 1, 0.8, 1],
				// }}
				// transition={{
				// 	duration: 4,
				// 	ease: "easeInOut",
				// 	times: [0, 0.2, 0.5, 0.8, 1],
				// 	repeat: Infinity,
				// 	// repeatDelay: 1,
				// }}
				>
					<div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
						<svg
							viewBox="0 0 88 88"
							className="w-full max-w-screen-xl text-brand-bgreen700"
						>
							<circle
								fill="currentColor"
								fillOpacity="0.3"
								cx="44"
								cy="44"
								r="15.5"
							/>
							<circle
								fillOpacity="0.2"
								fill="currentColor"
								cx="44"
								cy="44"
								r="44"
							/>
							<circle
								fillOpacity="0.2"
								fill="currentColor"
								cx="44"
								cy="44"
								r="37.5"
							/>
							<circle
								fillOpacity="0.2"
								fill="currentColor"
								cx="44"
								cy="44"
								r="29.5"
							/>
							<circle
								fillOpacity="0.2"
								fill="currentColor"
								cx="44"
								cy="44"
								r="22.5"
							/>
						</svg>
					</div>
				</motion.div>
				<div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					<div className="px-10 py-20 text-center transition duration-300 transform rounded shadow-2xl bg-brand-bblue hover:scale-105 md:shadow-xl hover:shadow-2xl">
						<p className="font-semibold text-gray-200">
							Sed ut perspiciatis unde omnis iste
						</p>
					</div>
					<div className="px-10 py-20 text-center transition duration-300 transform rounded shadow-2xl bg-brand-bblue hover:scale-105 md:shadow-xl hover:shadow-2xl">
						<p className="font-semibold text-gray-200">
							Well, the way they make shows is
						</p>
					</div>
					<div className="px-10 py-20 text-center transition duration-300 transform rounded shadow-2xl bg-brand-bblue hover:scale-105 md:shadow-xl hover:shadow-2xl">
						<p className="font-semibold text-gray-200">
							Some don{"'"}t, become nothing again
						</p>
					</div>
					<div className="px-10 py-20 text-center transition duration-300 transform rounded shadow-2xl bg-brand-bblue hover:scale-105 md:shadow-xl hover:shadow-2xl">
						<p className="font-semibold text-gray-200">
							Pommy ipsum smeg head whizz morris
						</p>
					</div>
					<div className="px-10 py-20 text-center transition duration-300 transform rounded shadow-2xl bg-brand-bblue hover:scale-105 md:shadow-xl hover:shadow-2xl">
						<p className="font-semibold text-gray-200">
							Taking the mick middle class bog
						</p>
					</div>
					<div className="px-10 py-20 text-center transition duration-300 transform rounded shadow-2xl bg-brand-bblue hover:scale-105 md:shadow-xl hover:shadow-2xl">
						<p className="font-semibold text-gray-200">
							Sportacus andrew weatherall goose
						</p>
					</div>
					<div className="px-10 py-20 text-center transition duration-300 transform rounded shadow-2xl bg-brand-bblue hover:scale-105 md:shadow-xl hover:shadow-2xl">
						<p className="font-semibold text-gray-200">
							Semi beard cream bun disaster alpha
						</p>
					</div>
					<div className="px-10 py-20 text-center transition duration-300 transform rounded shadow-2xl bg-brand-bblue hover:scale-105 md:shadow-xl hover:shadow-2xl">
						<p className="font-semibold text-gray-200">
							Bro ipsum dolor sit amet gaper dart
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
