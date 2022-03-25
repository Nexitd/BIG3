import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import UploadImage from "../../components/UploadImage";
import { pushTeams } from "../../store/reducers/teamsReducer";
import styles from "./AddPage.module.css";

const AddTeam = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const sendTeam = values => {
		dispatch(pushTeams(values));
		history.push("/teams");
	};

	return (
		<div className={styles.card}>
			<h3 className={styles.title}>
				<span>Team</span> / <span>Add new team</span>
			</h3>
			<div className={styles.cardBody}>
				<div className={styles.image}>
					<UploadImage />
				</div>
				<div className={styles.form}>
					<Form onFinish={sendTeam}>
						<Form.Item layout="horizontal">
							<Input name="name" title="Name" type="text" />
						</Form.Item>
						<Form.Item layout="horizontal">
							<Input name="division" title="Division" type="text" />
						</Form.Item>
						<Form.Item layout="horizontal">
							<Input name="conference" title="Conference" type="text" />
						</Form.Item>
						<Form.Item layout="horizontal">
							<Input name="year" title="Year of foundation" type="number" />
						</Form.Item>
						<Button
							text="Cancel"
							className={styles.cancel + " " + styles.btn}
						/>
						<Button text="Save" type="submit" className={styles.btn} />
					</Form>
				</div>
			</div>
		</div>
	);
};

export default AddTeam;
