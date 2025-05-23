import React from "react";
import css from "./experience.module.css";
import html from "../../assets/skills/html.png";
import nextjs from "../../assets/skills/Next.js.png";
import typescript from "../../assets/skills/typescript-logo.png";
import prisma from "../../assets/skills/prisma.png";
import tailwind from "../../assets/skills/tailwind.png";
import mongodb from "../../assets/skills/mongodb.png";
import styleCastingSheet from "../../assets/skills/css.png";
import react from "../../assets/skills/react.png";
import redux from "../../assets/skills/redux.png";
import figma from "../../assets/skills/figma.png";
import rest from "../../assets/skills/rest.png";
import javascript from "../../assets/skills/javascript.png";
import bofa from "../../assets/history/bofa.png";
import ecpi from "../../assets/history/ecpi.png";
const Experience = () => {
	const experiences = [
		{
			title: "NEXT.js",
			imageSrc: nextjs,
		},
		{
			title: "React",
			imageSrc: react,
		},
		{
			title: "Redux",
			imageSrc: redux,
		},
		{
			title: "TypeScript",
			imageSrc: typescript,
		},
		{
			title: "JavaScript",
			imageSrc: javascript,
		},
		{
			title: "prisma",
			imageSrc: prisma,
		},
		{
			title: "mongodb",
			imageSrc: mongodb,
		},
		{
			title: "REST",
			imageSrc: rest,
		},

		{
			title: "CSS",
			imageSrc: styleCastingSheet,
		},
		{
			title: "Tailwind",
			imageSrc: tailwind,
		},

		{
			title: "Figma",
			imageSrc: figma,
		},
		{
			title: "HTML",
			imageSrc: html,
		},
	];
	const workExperience = [
		{
			role: "Federal Work Study (FWS)",
			organisation: "Campus Internal Website",
			startDate: "July, 2021",
			endDate: "November, 2022",
			experiences: [
				"Maintained campus internal website",
				"Assisted with various projects",
				"Helped students with their queries",
			],
			imageSrc: ecpi,
		},
		{
			role: "Technical Support",
			organisation: "Bank of America",
			startDate: "June, 2023",
			endDate: "Present",
			experiences: [
				"Assisted merchants with POS system",
				"Troubleshooted software and hardware issues",
			],
			imageSrc: bofa,
		},
	];

	return (
		<section className={css.experienceContainer} id='experience'>
			<h2 className={css.experienceTitle}>Experience</h2>
			<div className={css.experienceContent}>
				<div className={css.skills}>
					{experiences.map((skill, idx) => (
						<div key={idx} className={css.skill}>
							<div className={css.skillImgContainer}>
								<img src={skill.imageSrc} />
							</div>
							<p>{skill.title}</p>
						</div>
					))}
				</div>
				<ul className={css.history}>
					{workExperience.map((item, idx) => (
						<li key={idx} className={css.historyItem}>
							<img src={item.imageSrc} />
							<div className={css.historyItemDetials}>
								<h3>{`${item.role}, ${item.organisation}`}</h3>
								<p>{`${item.startDate} - ${item.endDate}`}</p>
								<ul>
									{item.experiences.map((experience, idx) => (
										<li key={idx}>{experience}</li>
									))}
								</ul>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Experience;
