export interface CardData {
	id: string;
	category: string;
	title: string;
	pointOfInterest: number;
	backgroundColor: string;
}

interface Project {
	projectID: number;
	title: string;
	link: string;
	imgSrc: string;
	description: string;
	features: string[];
	technologies: string[];
}
