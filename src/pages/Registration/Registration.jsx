import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Form from "../../components/Form";
import Button from "../../components/Button";
import img from "../../assets/images/auth/signup.svg";
import styles from "./Registration.module.css";

const Registration = () => {
	const sendRegData = valuse => {
		fetch("http://dev.trainee.dex-it.ru/api/Auth/SignUp", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},

			body: JSON.stringify(valuse),
		});
	};

	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<div className={styles.cont}>
					<h2 className={styles.title}>Sign Up</h2>

					<Form onFinish={sendRegData}>
						<Form.Item layout="horizontal">
							<Input name="userName" title="Name" />
						</Form.Item>
						<Form.Item layout="horizontal">
							<Input name="login" title="Login" />
						</Form.Item>
						<Form.Item layout="horizontal">
							<Input name="password" title="Password" type="password" />
						</Form.Item>
						<Form.Item layout="horizontal">
							<Input
								name="confPassword"
								title="Enter your password again"
								type="password"
							/>
						</Form.Item>
						<Form.Item className={styles.reverse} layout="vertical">
							<Input
								className={styles.check}
								name="checkbox"
								title="I accept the agreement"
								type="checkbox"
							/>
						</Form.Item>
						<Button text="Sign Up" type="submit" />
					</Form>

					<p className={styles.text}>
						Not a member yet? <Link to="/">Sign in</Link>
					</p>
				</div>
			</div>
			<div className={styles.image}>
				<img src={img} alt="" />
			</div>
		</div>
	);
};

export default Registration;
