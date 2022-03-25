import React from "react";
import logo from "../../assets/images/Header/logo.svg";
import profile from "../../assets/images/Header/profile.svg";
import styles from "./Header.module.css";

const Header = ({ name, logoUrl }) => {
	return (
		<div className={styles.header}>
			<img src={logo} alt="" />
			<div className={styles.profile}>
				<span>{name}</span>
				<img src={logoUrl || profile} alt="" />
			</div>
		</div>
	);
};

export default Header;
