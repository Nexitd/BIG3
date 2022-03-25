import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../store/reducers/teamsReducer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import emptyTeams from "../../assets/images/Teams/illustration.svg";
import Card from "../../components/Card";
import styles from "./Teams.module.css";
import { useHistory } from "react-router-dom";
import EmptyCard from "../../components/EmptyCard";

const Teams = () => {
	const dispatch = useDispatch();
	let history = useHistory();
	const { teamsData } = useSelector(state => state.teams);

	useEffect(() => {
		dispatch(getTeams());
	}, [dispatch]);

	const routeChange = () => {
		history.push("/add");
	};

	return (
		<div className={styles.teams}>
			<div className={styles.teamsCont}>
				<div className={styles.teamsHeader}>
					<div className={styles.teamsHeaderCont}>
						<Input
							type="search"
							name="search"
							className={styles.search}
							placeholder="Search..."
						/>
					</div>
					<div className={styles.teamsHeaderCont + ' ' + styles.btnCont}>
						<Button
							text="Add +"
							className={styles.addBtn}
							onClick={routeChange}
						/>
					</div>
				</div>
				<div className={styles.teamsBody}>
					{teamsData.length === 0 ? (
						<EmptyCard img={emptyTeams} text="teams" />
					) : (
						teamsData.map(el => (
							<Card
								key={el.id}
								img={el.imageUrl}
								title={el.name}
								text={`Year of foundation: ${el.foundationYear}`}
							/>
						))
					)}
				</div>
				<div className={styles.teamsFooter}>pagination</div>
			</div>
		</div>
	);
};

export default Teams;
