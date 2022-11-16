import Head from "next/head";
import Image from "next/image";
import gif from "../public/PortfolioSite.gif";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
	const [isIntroReady, setisIntroReady] = useState(false);
	// const [showContent, setShowContent] = useState(false);

	return (
		<div>
			<Head>
				<title>Byron-Lewis-Dot-Dev</title>
				<meta name="description" content="Portoflio Site by by Byron Lewis" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>

			<main>
				<div className="w-full h-screen flex justify-center items-center">
					{/* Container inside main */}
					<div className="relative z-0">
						{/* Gif div */}
						<motion.div
							initial={{ opacity: 1 }}
							animate={{ opacity: 0 }}
							transition={{ duration: 0.5, delay: 2.8 }}
						>
							<Image
								src={gif}
								alt="gif"
								quality={100}
								onLoadingComplete={(e) => setisIntroReady(true)}
							/>
						</motion.div>

						{/* Content */}
						<div className="absolute inset-0 flex justify-center items-center z-10">
							{/* {!isIntroReady && <div>loading</div>} */}

							{isIntroReady && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 2.8 }}
								>
									<p>Hey</p>
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
