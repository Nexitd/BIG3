import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const PrivateRoute = ({ ...rest }) => {
	const { isAuth } = useSelector(state => state.auth);
	return isAuth ? (
		<Wrapper>
			<Route {...rest} />
		</Wrapper>
	) : (
		<Redirect to="/" />
	);
};

export default PrivateRoute;
