import { motion } from "framer-motion";
import Head from "next/head";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Footer } from "../components/Footer";
import { Feature } from "../components/Feature";
import { useRef } from "react";

export default function Home() {
	const myRef = useRef<null | HTMLDivElement>(null);
	const executeScroll = () => {
		if (myRef.current != null) {
			myRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<>
			<Head>
				<title>Byron-Lewis-Dot-Dev</title>
				<meta name="description" content="Portoflio Site by by Byron Lewis" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>
			<section>
				{/* Content */}
				<div className="absolute inset-0 z-10">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<Nav scrollToContact={executeScroll} />
						<Hero />
						<Portfolio />
						<div id="contact" ref={myRef}>
							<Feature />
						</div>
						<Footer />
					</motion.div>
				</div>
			</section>
		</>
	);
}
