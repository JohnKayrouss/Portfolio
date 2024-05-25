import React from "react";
import css from "./hero.module.css";
import Lottie from "lottie-react";
import heroAnimation from "../../assets/animation/Animation - 1714447537411.json";

const Hero = () => {
	return (
		<section className={css.heroContainer}>
			<div className={css.content}>
				<h1 className={css.title}>Hi, I'm John</h1>
				<p className={css.desc}>
					I'm a front-end developer with 3 years of experience of using React
					and Redux and NodeJS. Reach out if you'd to learn more!
				</p>
				<a
					href='mailto:johnkayrous@gmail.com'
					target='_blank'
					className={css.contactBtn}>
					Contact Me
				</a>
			</div>
			<Lottie animationData={heroAnimation} className={css.heroAnimation} />
			<div className={css.topBlur} />
			<div className={css.bottomBlur} />
		</section>
	);
};

export default Hero;
