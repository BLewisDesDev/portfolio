import Head from "next/head";
import Image from "next/image";
import gif from "../public/PortfolioSite.gif";
import { motion } from "framer-motion";
import { useState } from "react";
import { Nav } from "../components/Nav";
// import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export default function Home() {
	const [isIntroReady, setisIntroReady] = useState(false);
	return (
		<div>
			<Head>
				<title>Byron-Lewis-Dot-Dev</title>
				<meta name="description" content="Portoflio Site by by Byron Lewis" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>

			<main>
				<div className="flex justify-center w-full h-screen">
					{/* Gif div */}
					<div className="relative z-0">
						<motion.div
							initial={{ opacity: 1 }}
							animate={{ opacity: 0 }}
							transition={{ duration: 0.2, delay: 2.8 }}
						>
							<Image
								src={gif}
								alt="gif"
								quality={100}
								onLoadingComplete={(e) => setisIntroReady(true)}
							/>
						</motion.div>

						{/* Content */}
						<div className="absolute inset-0 z-10">
							{isIntroReady && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.2, delay: 2.8 }}
								>
									<Nav />
									<Hero />
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
