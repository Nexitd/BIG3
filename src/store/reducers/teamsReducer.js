import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Fetch from "../../api/api";

export const getTeams = createAsyncThunk("teams/getTeams", async () => {
	const data = await Fetch.get("api/Team/GetTeams");
	
	return data.data;
});

export const pushTeams = createAsyncThunk("teams/PushTeams", async (values) => {
	const data = Fetch.post("api/Team/Add", values);

	return data;
})

export const teamsReducer = createSlice({
	name: "teams",
	initialState: {
		teamsData: [],
	},
	reducers: {},

	extraReducers: {
		[getTeams.fulfilled]: (state, action) => {
			state.teamsData = action.payload;
		},
	},
});

export default teamsReducer.reducer;
