import Head from "next/head";
import Image from "next/image";
import gif from "../public/PortfolioSite.gif";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Byron Lewis Dot Dev</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<motion.div
					// animate={{ y: 1000 }}
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					transition={{ duration: 0.5, delay: 2.8 }}
				>
					<Image src={gif} alt="gif"></Image>
				</motion.div>
			</main>
		</div>
	);
}
