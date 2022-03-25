import React from "react";
import styles from "./EmptyCard.module.css";

const Card = ({ img, text }) => {
	return (
		<div className={styles.card}>
			<img src={img} alt="" />
			<h3 className={styles.title}>Empty here</h3>
			<p className={styles.text}>Add new {text} to continue</p>
		</div>
	);
};

export default Card;
