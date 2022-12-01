import Head from "next/head";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export default function aboutMe() {
	return (
		<>
			<Head>
				<title>About Me</title>
				<meta name="description" content="About Me Page" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>
			<Nav />
			<section>
				<div className="flex flex-col items-center justify-center w-full h-screen">
					<div className="flex flex-col items-center justify-center w-full h-full">
						<h1 className="text-4xl font-bold text-center text-gray-800">
							About Me
						</h1>
						<p className="mt-4 text-center text-gray-700">
							Hello, my name is Byron Lewis. I am a full-stack web developer
							with a passion for creating beautiful and functional websites. I
							am currently working on a few projects that I hope to launch soon.
							I am also looking for a full-time position as a web developer. If
							you are interested in hiring me, please contact me.
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
