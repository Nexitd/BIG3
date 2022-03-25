import React, { useState } from "react";
import classNames from "classnames";
import closeEye from "../../assets/images/auth/close_eye.svg";
import eye from "../../assets/images/auth/eye.svg";
import styles from "./Input.module.css";

const Input = ({
	type = "text",
	name,
	title = "",
	className = "",
	placeholder = "",
}) => {
	const [visibility, setVisibility] = useState(type);

	return (
		<>
			<label className={styles.label} htmlFor={name}>
				{title}
			</label>
			<div className={styles.eyeBlock}>
				<input
					placeholder={placeholder}
					type={visibility}
					name={name}
					id={name}
					className={classNames(styles.input, className)}
				/>
				{type === "password" && (
					<img
						src={visibility === "text" ? eye : closeEye}
						alt=""
						className={styles.view}
						onClick={() =>
							setVisibility(visibility === "text" ? "password" : "text")
						}
					/>
				)}
			</div>
		</>
	);
};

export default Input;
