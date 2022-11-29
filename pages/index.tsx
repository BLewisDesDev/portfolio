import { Suspense } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import gif from "../public/PortfolioSite.gif";
import { useRouter } from "next/router";

export default function Home() {
	const Router = useRouter();
	const redirect = () => {
		setTimeout(() => {
			Router.push("/home");
		}, 2800);
	};
	return (
		<>
			<Head>
				<title>Byron-Lewis-Dot-Dev</title>
				<meta name="description" content="Portoflio Site by by Byron Lewis" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>

			<>
				<div className="flex justify-center w-full h-screen">
					<div className="relative z-0">
						{/* Gif div */}
						<motion.div
							initial={{ opacity: 1 }}
							animate={{ opacity: 0 }}
							transition={{ duration: 0.2, delay: 2.6 }}
						>
							<Suspense fallback={<p>Loading...</p>}>
								<Image
									src={gif}
									alt="gif"
									quality={100}
									onLoadingComplete={(e) => redirect()}
									className="z-0 object-cover w-full h-screen"
								/>
							</Suspense>
						</motion.div>
					</div>
				</div>
			</>
		</>
	);
}
