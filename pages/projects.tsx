import Head from "next/head";
import { ProjectInfo } from "../components/ProjectInfo";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { useRouter } from "next/router";

interface Project {
	projectID: number;
	title: string;
	link: string;
	imgSrc: string;
	description: string;
	features: string[];
	technologies: string[];
}

//Data for projects. Will come from database in the future.
export default function Projects() {
	const projectList = [];
	const ReadyBank: Project = {
		projectID: 1,
		title: "ReadyBank",
		link: "",
		imgSrc: "/readybank.png",
		description:
			"Ready Bank is a social media platform with added Payments and Banking features. Created for a client as part of the final project for the Professional Experience capstone unit at University of Western Sydney.",
		features: ["Custom Auth", "Rest API", "Payments"],
		technologies: ["MERN", "Express.js", "MongoDB"],
	};
	const TalentoTotal: Project = {
		projectID: 2,
		title: "TalentoTotal",
		link: "",
		imgSrc: "/TalentoTotoalLogo.jpg",
		description: "This is a description of Talento Total",
		features: ["Tailwind", "Typescript", "Rest API"],
		technologies: ["Next.js", "Prisma/SQL", "Docker"],
	};
	const OSLi: Project = {
		projectID: 3,
		title: "OSLi",
		link: "",
		imgSrc: "/osli.png",
		description: "This is a description of OSLi",
		features: ["Electron.js/React", "Typescript", "OpenSource"],
		technologies: ["React", "DaisyUI/Tailwind", "Node.js"],
	};
	const Deeplayer: Project = {
		projectID: 4,
		title: "Deeplayer",
		link: "",
		imgSrc: "/deeplayer.png",
		description:
			"Deeplayer is an application in development that uses an LSTM/Diffusion Model to generate novel MIDI patterns based on a Custom Training Set of popular songs.",
		features: ["Custom Training Set", "Closed Source", "DAW Integration"],
		technologies: ["LSTM/Diffusion Model", "TensorFlow", "Pytorch"],
	};

	projectList.push(ReadyBank);
	projectList.push(TalentoTotal);
	projectList.push(OSLi);
	projectList.push(Deeplayer);

	const router = useRouter();

	const redirect = () => {
		router.push("/home#contact");
	};

	return (
		<>
			<Head>
				<title>Projects</title>
				<meta name="description" content="Projects Page" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>
			<Nav scrollToContact={redirect} />

			{projectList.map((project: Project, index: number) => (
				<>
					<div className="lg:my-16 md:my-12 sm:my-4" id={project.title}>
						<ProjectInfo
							key={project.projectID}
							projectID={project.projectID}
							title={project.title}
							link={project.link}
							imgSrc={project.imgSrc}
							description={project.description}
							features={project.features}
							technologies={project.technologies}
						/>
					</div>
					<div className="relative flex items-center justify-center py-5 ">
						<div className="w-1/2 border-t border-gray-200 "></div>
					</div>
				</>
			))}

			<Footer />
		</>
	);
}
