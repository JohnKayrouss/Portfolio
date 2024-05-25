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
			demo: "https://recipes.johnkayrous.com",
			source: "https://www.github.com",
		},
		{
			title: "Project B",
			imageSrc: "projects/project.png",
			description: "This is a project made to",
			skills: ["React", "Express", "Node", "Sass"],
			demo: "https://www.example.com",
			source: "https://www.github.com",
		},
		{
			title: "Project C",
			imageSrc: "projects/project.png",
			description: "This is a efnripfeifeufipwerfuerf",
			skills: ["React", "Express", "Node"],
			demo: "https://www.example.com",
			source: "https://www.github.com",
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
