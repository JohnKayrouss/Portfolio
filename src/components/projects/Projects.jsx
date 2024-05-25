import React from "react";
import css from "./projects.module.css";
import ProjectCard from "./ProjectCard";
const Projects = () => {
	const projects = [
		{
			title: "Recipes App",
			imageSrc: "projects/project.png",
			description: "More than 5000 recipes and nutrition info",
			skills: ["React", "Redux", "Firebase"],
			demo: "https://foodwagon.johnkayrous.com",
			source: "https://github.com/JohnKayrouss/recipes",
		},
		{
			title: "Church Template",
			imageSrc: "projects/project.png",
			description: "Responsive & Modern animated template for a church website",
			skills: ["React", "Firestore"],
			demo: "need to change to the new url",
			source: "https://github.com/JohnKayrouss/Church_Template",
		},
		{
			title: "Portfolio Template",
			imageSrc: "projects/project.png",
			description: "Responsive & cool template with cool animatiions",
			skills: ["React"],
			demo: "https://portfolio.johnkayrous.com/",
			source: "https://github.com/JohnKayrouss/Portfolio",
		},
	];

	return (
		<section className={css.projectsContainer} id='projects'>
			<h2 className={css.title}>Projects</h2>
			<div className={css.project}>
				{projects.map((project, idx) => (
					<ProjectCard key={idx} project={project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
