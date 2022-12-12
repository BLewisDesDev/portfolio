import Head from "next/head";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Feature2 } from "../components/Feature2";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function AboutMe() {
	const router = useRouter();
	const redirect = () => {
		router.push("/home#contact");
	};

	return (
		<>
			<Head>
				<title>About Me</title>
				<meta name="description" content="About Me Page" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>
			<Nav scrollToContact={redirect} />
			<Feature2 />
			<Footer />
		</>
	);
}
