import React from "react";
import Select from "react-select";
import Input from "../../components/Input";
import Button from "../../components/Button";
import EmptyCard from "../../components/EmptyCard";
import Card from "../../components/EmptyCard/EmptyCard";
import img from "../../assets/images/Players/illustration.svg";
import styles from "./Players.module.css";

export const Players = () => {
	let style = {
		width: "100%",
		marginLeft: "24px",
	};

	let colourOptions = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];

	return (
		<div className={styles.teams}>
			<div className={styles.teamsCont}>
				<div className={styles.teamsHeader}>
					<div className={styles.teamsHeaderCont}>
						<div className={styles.cont}>
							<Input
								type="search"
								name="search"
								className={styles.search}
								placeholder="Search..."
							/>
						</div>
						<div className={styles.cont}>
							<Select
								isMulti
								name="colors"
								options={colourOptions}
								styles={style}
								width="100%"
								className="basic-multi-select inpSelect"
								classNamePrefix="select"
							/>
						</div>
					</div>
					<div className={styles.teamsHeaderCont + ' ' + styles.btnCont}>
						<Button text="Add +" className={styles.addBtn} />
					</div>
				</div>
				<div className={styles.teamsBody}>
					{/* {teamsData.length === 0 ? ( */}
					<EmptyCard img={img} text="players" />
					{/* ) : ( */}
					{/* teamsData.map(el => (
							<Card
								img={el.imageUrl}
								title={el.name}
								text={`Year of foundation: ${el.foundationYear}`}
							/>
						))
					)} */}
				</div>
				<div className={styles.teamsFooter}>pagination</div>
			</div>
		</div>
	);
};

export default Players;
