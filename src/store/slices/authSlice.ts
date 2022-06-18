import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LogInBody, SignUpBody } from 'api/authAPI';
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
		login: (state, action: PayloadAction<LogInBody>) => {},

		signUp: (state, action: PayloadAction<SignUpBody>) => {},
		authFailure: (state) => {
			state.isLoggedIn = false;
			state.hasError = true;
			// state.auth = {} as auth;
		},
	},
});

export default authSlice;
