import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import gif from "../public/PortfolioSite.gif";
import { useRouter } from "next/router";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Home() {
	const Router = useRouter();
	const redirect = () => {
		setTimeout(() => {
			Router.push("/home");
		}, 2600);
	};
	const loading = () => {
		return <ScaleLoader color="#C72C3D" />;
	};
	return (
		<>
			<Head>
				<title>Byron-Lewis-Dot-Dev</title>
				<meta name="description" content="Portoflio Site by by Byron Lewis" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>

			<>
				<div className="flex items-center justify-center w-full h-screen">
					<div className="absolute">
						<ScaleLoader className="" height={48} width={6} color="#C72C3D" />
					</div>
					<div className="z-0">
						<motion.div
							initial={{ opacity: 1 }}
							animate={{ opacity: 0 }}
							transition={{ duration: 0.2, delay: 2.6 }}
						>
							<Image
								src={gif}
								alt="gif"
								quality={100}
								onLoadingComplete={(e) => redirect()}
								className="z-0 object-cover w-full h-screen"
							/>
						</motion.div>
					</div>
				</div>
			</>
		</>
	);
}
