import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import Registration from "../../pages/Registration";
import AuthRoute from "../AuthRoute";
import Login from "../../pages/Login";
import Teams from "../../pages/Teams";
import AddPage from "../../pages/AddTeam";
import Players from "../../pages/Players";

const Main = () => {
	return (
		<BrowserRouter>
			<Switch>
				<AuthRoute exact path="/" component={Login} />
				<AuthRoute exact path="/registration" component={Registration} />
				<PrivateRoute path="/teams" component={Teams} />
				<PrivateRoute path="/players" component={Players} />
				<PrivateRoute path="/add" render={() => <AddPage />} />
			</Switch>
		</BrowserRouter>
	);
};

export default Main;
