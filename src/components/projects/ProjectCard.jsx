import React from "react";
import css from "./projectCard.module.css";
import projectImg from "../../assets/projects/project.png";
const ProjectCard = ({ project }) => {
	return (
		<div className={css.cardContainer}>
			<img src={projectImg} className={css.image} />
			<div className={css.cardContent}>
				<h3 className={css.title}>{project.title}</h3>
				<p className={css.desc}>{project.description}</p>
				<ul className={css.skills}>
					{project.skills.map((skill, idx) => (
						<li key={idx} className={css.skill}>
							{skill}
						</li>
					))}
				</ul>
				<div className={css.links}>
					<a href={project.demo} target='_blank' className={css.link}>
						Demo
					</a>
					<a href={project.source} target='_blank' className={css.link}>
						Source
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
