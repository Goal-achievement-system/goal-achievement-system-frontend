import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILogIn } from 'api/authAPI';
import { Member } from 'types/member';

export interface AuthState {
	isLoggedIn: boolean;
	hasError: boolean;
}

const initialState: AuthState = {
	isLoggedIn: false,
	hasError: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<ILogIn>) => {},
		loginSuccess: (state) => {
			console.log('lalalal');
			state.isLoggedIn = true;
			// state.auth = { ...action.payload };
		},
		loginFailure: (state) => {
			state.isLoggedIn = false;
			state.hasError = true;
			// state.auth = {} as auth;
		},
	},
});

export default authSlice;
