import { createReducer } from "@reduxjs/toolkit";

const UPDATE_NAME = "UPDATE-NAME";
const UPDATE_LOGIN = "UPDATE-LOGIN";
const UPDATE_PASSWORD = "UPDATE-PASSWORD";
const UPDATE_CONFIRMING_PASSWORD = "UPDATE-CONFIRMING-PASSWORD";
const UPDATE_REG_FLAG = "UPDATE-REG-FLAG";

let initialState = {
	nameText: "",
	loginText: "",
	passwordText: "",
	confirmPasswordText: "",
	regFlag: false,
};

const registrationReducer = createReducer(initialState, builder => {
	builder
		.addCase(UPDATE_NAME, (state = initialState, action) => {
			let stateCopy = { ...state };

			stateCopy.nameText = action.newNameText;

			return stateCopy;
		})
		.addCase(UPDATE_LOGIN, (state = initialState, action) => {
			let stateCopy = { ...state };

			stateCopy.loginText = action.newLoginText;

			return stateCopy;
		})
		.addCase(UPDATE_PASSWORD, (state = initialState, action) => {
			let stateCopy = { ...state };

			stateCopy.passwordText = action.newPasswText;

			return stateCopy;
		})
		.addCase(UPDATE_CONFIRMING_PASSWORD, (state = initialState, action) => {
			let stateCopy = { ...state };

			stateCopy.confirmPasswordText = action.newConfirmPasswText;

			return stateCopy;
		})
		.addCase(UPDATE_REG_FLAG, (state = initialState, action) => {
			let stateCopy = { ...state };

			stateCopy.regFlag = action.newRegFlag;

			return stateCopy;
		});
});

export const updateNameAC = name => ({ type: UPDATE_NAME, newNameText: name });
export const updateLoginAC = login => ({
	type: UPDATE_LOGIN,
	newLoginText: login,
});
export const updatePasswordAC = passw => ({
	type: UPDATE_PASSWORD,
	newPasswText: passw,
});
export const updateConfrimPasswordAC = text => ({
	type: UPDATE_CONFIRMING_PASSWORD,
	newConfirmPasswText: text,
});
export const updateRegFlagAC = flag => ({
	type: UPDATE_REG_FLAG,
	newRegFlag: flag,
});

export default registrationReducer;
