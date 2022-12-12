import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import gif from "../public/PortfolioSite.gif";
import { useRouter } from "next/router";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect } from "react";

export default function Home() {
	const Router = useRouter();
	const redirect = (time: number) => {
		setTimeout(() => {
			Router.push("/home");
		}, time);
	};

	// Loading animation
	const loading = () => {
		return <ScaleLoader color="#C72C3D" />;
	};

	// Redirect to home page after 4 seconds
	useEffect(() => {
		redirect(4000);
	}, []);

	return (
		<>
			<Head>
				<title>Byron-Lewis-Dot-Dev</title>
				<meta name="description" content="Portoflio Site by by Byron Lewis" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>

			<div className="flex items-center justify-center w-full h-screen">
				<ScaleLoader
					className="absolute z-0"
					height={48}
					width={6}
					color="#C72C3D"
				/>
				<motion.div
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					transition={{ duration: 0.2, delay: 2.6 }}
					className="absolute z-10 w-full h-screen"
				>
					<Image
						src={gif}
						alt="gif"
						quality={100}
						onLoadingComplete={(e) => redirect(2800)}
						className="object-cover w-full h-screen"
					/>
				</motion.div>
			</div>
		</>
	);
}
