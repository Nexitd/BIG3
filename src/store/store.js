import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import registrationReducer from "./reducers/registration-reducer";
import teamsReducer from "./reducers/teamsReducer";

const store = configureStore({
	reducer: {
		registartion: registrationReducer,
		auth: authReducer,
		teams: teamsReducer
	},
});

export default store;
