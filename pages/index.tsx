import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Footer } from "../components/Footer";
import gif from "../public/PortfolioSite.gif";

export default function Home() {
	const [isIntroReady, setisIntroReady] = useState(false);
	useEffect(() => {}, []);
	return (
		<div>
			<Head>
				<title>Byron-Lewis-Dot-Dev</title>
				<meta name="description" content="Portoflio Site by by Byron Lewis" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>

			<main>
				<div className="flex justify-center w-full h-screen">
					<div className="relative z-0">
						{/* Gif div */}
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
								className="z-0 object-cover w-full h-screen"
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
									<Portfolio />
									<Footer />
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
