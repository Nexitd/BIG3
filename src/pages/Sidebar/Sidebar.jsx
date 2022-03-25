import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import teams from "../../assets/images/Sidebar/group_person.svg";
import players from "../../assets/images/Sidebar/person.svg";
import exit from "../../assets/images/Sidebar/input.svg";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarCont}>
        <div className={styles.sidebarItem}>
          <Link to='/teams' activeClassName='active' className={styles.text}>
            <img src={teams} alt='' />
            <p>Teams</p>
          </Link>
        </div>
        <div className={styles.sidebarItem}>
          <Link to='/players' activeClassName='active' className={styles.text}>
            <img src={players} alt='' />
            <p>Players</p>
          </Link>
        </div>
      </div>  
      <div className={styles.sidebarCont}>
        <Link to='/' className={classNames(styles.text, styles.exit)}>
          <img src={exit} alt='' />
          <p>Sign out</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
