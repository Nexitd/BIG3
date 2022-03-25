import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ text, className = "", ...rest }) => {
	return <button className={classNames(styles.btn, className)} {...rest}>{text}</button>;
};

export default Button;
