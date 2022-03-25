import React from "react";
import classNames from "classnames";
import styles from "./Form.module.css";

const Form = ({ children, className, onFinish = () => {} }) => {
	const setValues = e => {
		e.preventDefault();
		const values = Array.from(e.target.children)
			.filter(el => el.tagName !== "BUTTON")
			.reduce(
				(acc, curr) => ({
					...acc,
					[curr.children[1].children[0].getAttribute("name")]:
						curr.children[1].children[0].value,
				}),
				{}
			);
		onFinish(values);
	};

	return <form className={className} onSubmit={setValues}>{children}</form>;
};

Form.Item = ({ children, layout, className = "" }) => (
	<div className={classNames(styles.container, styles[layout], className)}>
		{children}
	</div>
);

export default Form;
