import React from "react";
import css from "./about.module.css";
import Lottie from "lottie-react";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";
import animationYoga from "../../assets/animation/yoga.json";

const About = () => {
	return (
		<section className={css.aboutContainer} id='about'>
			<h2 className={css.aboutTitle}>About</h2>
			<div className={css.aboutContent}>
				<Lottie animationData={animationYoga} className={css.aboutAnimation} />
				<ul className={css.aboutItems}>
					<li className={css.aboutItem}>
						<img src={cursorIcon} />
						<div className={css.aboutItemText}>
							<h3>Front-end Developer</h3>
							<p>
								I create interactive and user-friendly interfaces using modern
								web technologies
							</p>
						</div>
					</li>
					<li className={css.aboutItem}>
						<img src={serverIcon} />
						<div className={css.aboutItemText}>
							<h3>React</h3>
							<p>
								I design and build robust UI components for responsive web
								applications, ensuring smooth and intuitive user interactions
							</p>
						</div>
					</li>
					<li className={css.aboutItem}>
						<img src={uiIcon} />
						<div className={css.aboutItemText}>
							<h3>Redux</h3>
							<p>
								I implement scalable state management solutions to maintain
								consistent data flow and application behavior
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default About;
