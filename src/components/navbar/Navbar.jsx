import React, { useState } from "react";
import css from "./navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeMenuIcon from "../../assets/nav/closeIcon.png";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const links = [
		{ href: "#about", name: "About" },
		{ href: "#experience", name: "Experience" },
		{ href: "#projects", name: "Projects" },
		{ href: "#contact", name: "Contact" },
	];
	return (
		<nav className={css.navbar}>
			<a href='/' className={css.title}>
				Portfolio
			</a>
			<div className={css.menu}>
				<img
					onClick={() => setMenuOpen(!menuOpen)}
					src={menuOpen ? closeMenuIcon : menuIcon}
					className={css.menuBtn}
				/>
				<ul className={`${css.menuItems} ${menuOpen && css.menuOpen}`}>
					{links.map((link) => (
						<li key={link.name} onClick={() => setMenuOpen(false)}>
							<a href={link.href}>{link.name}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
