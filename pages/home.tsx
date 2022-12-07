// import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
// import Image from "next/image";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Footer } from "../components/Footer";
import { Feature } from "../components/Feature";
import { ScaleLoader } from "react-spinners";

export default function Home() {
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
						<Nav />
						<Hero />
						<Portfolio />
						<Feature />
						<Footer />
					</motion.div>
				</div>
			</section>
		</>
	);
}
