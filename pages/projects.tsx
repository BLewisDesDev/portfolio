import Head from "next/head";
import { ProjectInfo } from "../components/ProjectInfo";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

interface Project {
	projectID: number;
	title: string;
	link: string;
	imgSrc: string;
	description: string;
	features: string[];
	technologies: string[];
}

//Dummy data for projects. Will come from database in the future.

export default function Projects() {
	const projectList = [];
	const ReadyBank: Project = {
		projectID: 1,
		title: "ReadyBank",
		link: "",
		imgSrc: "/readybank.png",
		description: "This is a description of ReadyBank",
		features: ["feature 1", "feature 2", "feature 3"],
		technologies: ["tech 1", "tech 2", "tech 3"],
	};
	const TalentoTotal: Project = {
		projectID: 2,
		title: "TalentoTotal",
		link: "",
		imgSrc: "/TalentoTotoalLogo.jpg",
		description: "This is a description of Talento Total",
		features: ["feature 1", "feature 2", "feature 3"],
		technologies: ["tech 1", "tech 2", "tech 3"],
	};
	const OSLi: Project = {
		projectID: 3,
		title: "OSLi",
		link: "",
		imgSrc: "/osli.png",
		description: "This is a description of OSLi",
		features: ["feature 1", "feature 2", "feature 3"],
		technologies: ["tech 1", "tech 2", "tech 3"],
	};
	const Deeplayer: Project = {
		projectID: 4,
		title: "Deeplayer",
		link: "",
		imgSrc: "/deeplayer.png",
		description: "This is a description of Deeplayer",
		features: ["feature 1", "feature 2", "feature 3"],
		technologies: ["tech 1", "tech 2", "tech 3"],
	};

	projectList.push(ReadyBank);
	projectList.push(TalentoTotal);
	projectList.push(OSLi);
	projectList.push(Deeplayer);

	return (
		<>
			<Head>
				<title>Projects</title>
				<meta name="description" content="Projects Page" />
				<link rel="icon" href="/ByronLewisDotDevLogo.png" />
			</Head>
			<Nav />

			{projectList.map((project: Project, index: number) => (
				<>
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
				</>
			))}

			<Footer />
		</>
	);
}
