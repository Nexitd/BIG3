import React from "react";
import styles from "./Card.module.css";

const Card = ({ img, title, text, id = "", ...rest }) => {
	return (
		<div className={styles.card}>
			<div className={styles.head}>
				<img src={img} alt="" />
			</div>
			<div className={styles.body}>
				<h3 className={styles.title}>{title}</h3>
				<span>{id}</span>
				<p className={styles.text}>{text}</p>
			</div>
		</div>
	);
};

export default Card;
