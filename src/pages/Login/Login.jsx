import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../store/reducers/authReducer";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import img from "../../assets/images/auth/signin.svg";
import styles from "./Login.module.css";

const Login = () => {
	const dispatch = useDispatch();
  const sendLoginData = values => {
		dispatch(login(values))
	};

	return (
		<div className={styles.container}>
			<div className={styles.form}>
				<div className={styles.cont}>
					<h2 className={styles.title}>Sign In</h2>

					<Form onFinish={sendLoginData}>
						<Form.Item layout="horizontal">
							<Input name="login" title="Login" />
						</Form.Item>
						<Form.Item layout="horizontal">
							<Input name="password" title="Password" type="password" />
						</Form.Item>
						<Button text="Sign In" type="submit" />
					</Form>

					<p className={styles.text}>
						Not a member yet? <Link to="/registration">Sign up</Link>
					</p>
				</div>
			</div>
			<div className={styles.image}>
				<img src={img} alt="" />
			</div>
		</div>
	);
};

export default Login;
