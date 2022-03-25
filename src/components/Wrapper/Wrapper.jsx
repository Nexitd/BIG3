import React from "react";
import { useSelector } from "react-redux";
import Header from "../../pages/Header";
import Sidebar from "../../pages/Sidebar";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
	const { nameText, avatarUrl } = useSelector(state => state.auth);
	
	return (
		<div className={styles.container}>
			<Header name={nameText} logoUrl={avatarUrl}/>
			<Sidebar />
			<div className={styles.mainCont}>{children}</div>
		</div>
	);
};

export default Wrapper;
