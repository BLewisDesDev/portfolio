import Head from "next/head";
import Image from "next/image";
import gif from "../public/PortfolioSite.gif";
import { motion } from "framer-motion";

export default function Home() {
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
							<Image src={gif} alt="gif"></Image>
						</motion.div>
						<div className="absolute inset-0 flex justify-center items-center z-10">
							{/* This should be the content */}

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 2.8 }}
							>
								<p>Hey</p>
							</motion.div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
