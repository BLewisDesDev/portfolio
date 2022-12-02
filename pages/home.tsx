import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Footer } from "../components/Footer";
import gif from "../public/PortfolioSite.gif";
import { Feature } from "../components/Feature";

export default function Home() {
	const [isIntroReady, setisIntroReady] = useState(false);
	useEffect(() => {}, []);
	return (
		<>
			<Head>
				<title>Byron-Lewis-Dot-Dev</title>
				<meta name="description" content="Portoflio Site by by Byron Lewis" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>
			<section>
				<div className="flex justify-center w-full h-screen">
					<div className="relative z-0">
						{/* Gif div */}
						<motion.div initial={{ opacity: 0 }}>
							<Suspense fallback={<p>Loading...</p>}>
								<Image
									src={gif}
									alt="gif"
									quality={100}
									onLoadingComplete={(e) => setisIntroReady(true)}
									className="z-0 object-cover w-full h-screen"
								/>
							</Suspense>
						</motion.div>

						{/* Content */}
						<div className="absolute inset-0 z-10">
							{isIntroReady && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5 }}
								>
									<Nav />
									<Hero />
									<Portfolio />
									{/* <Feature /> */}
									<Footer />
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
