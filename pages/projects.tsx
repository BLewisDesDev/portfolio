import { useState } from "react";
import { ProjectInfo } from "../components/ProjectInfo";

interface Project {
	projectID: number;
	title: string;
	link: string;
	imgSrc: string;
	description: string;
	features: string[];
	technologies: string[];
}

// interface projectList {
// 	projects: ProjectProps[];
// }

export default function Projects() {
	const projectList = [];
	const ReadyBank: Project = {
		projectID: 1,
		title: "ReadyBank",
		link: "https://www.google.com",
		imgSrc: "https://picsum.photos/200",
		description: "This is a description of project 1",
		features: ["feature 1", "feature 2", "feature 3"],
		technologies: ["tech 1", "tech 2", "tech 3"],
	};
	const TalentoTotal: Project = {
		projectID: 2,
		title: "TalentoTotal",
		link: "https://www.google.com",
		imgSrc: "https://picsum.photos/200",
		description: "This is a description of project 1",
		features: ["feature 1", "feature 2", "feature 3"],
		technologies: ["tech 1", "tech 2", "tech 3"],
	};
	const OSLi: Project = {
		projectID: 3,
		title: "OSLi",
		link: "https://www.google.com",
		imgSrc: "https://picsum.photos/200",
		description: "This is a description of project 1",
		features: ["feature 1", "feature 2", "feature 3"],
		technologies: ["tech 1", "tech 2", "tech 3"],
	};
	const Deeplayer: Project = {
		projectID: 4,
		title: "Deeplayer",
		link: "https://www.google.com",
		imgSrc: "https://picsum.photos/200",
		description: "This is a description of project 1",
		features: ["feature 1", "feature 2", "feature 3"],
		technologies: ["tech 1", "tech 2", "tech 3"],
	};

	projectList.push(ReadyBank);
	projectList.push(TalentoTotal);
	projectList.push(OSLi);
	projectList.push(Deeplayer);

	return (
		<>
			<h1>Projects Pages</h1>
			{projectList.map((project: Project) => (
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
			))}
		</>
	);
}
