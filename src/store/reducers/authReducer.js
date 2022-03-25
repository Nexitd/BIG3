import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Fetch from "../../api/api";

export const login = createAsyncThunk("auth/login", async values => {
	const data = await Fetch.post("api/Auth/SignIn", values);

	return data;
});

const initialState = {
	nameText: "",
	avatarUrl: "",
	loginText: "",
	passwordText: "",
	confirmPasswordText: "",
	regFlag: false,
	isAuth: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},

	extraReducers: {
		[login.fulfilled]: (state, action) => {
			state.isAuth = true;
			state.nameText = action.payload.name;
			state.avatarUrl = action.payload.avatarUrl;
			localStorage.setItem("access_token", action.payload.token);
		},
	},
});

// export const {  } = authSlice.actions;

export default authSlice.reducer;
