import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ ...rest }) => {
	const { isAuth } = useSelector(state => state.auth);
	return isAuth ? <Redirect to="/teams" /> : <Route {...rest} />;
};

export default AuthRoute;
