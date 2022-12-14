import Head from "next/head";
import { Footer } from "../components/Footer";
import { ProfileCard } from "../components/ProfileCard";
import { useRouter } from "next/router";
import { Nav } from "../components/Nav";
import Typewriter from "../components/Typewriter";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";

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
			<div className="h-125 bg-gradient-to-r from-brand-bred100 via-brand-bblue100 to-brand-byellow100">
				<Nav scrollToContact={redirect} />
				<Typewriter />
				<ProfileCard />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		</>
	);
}
