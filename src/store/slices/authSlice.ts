import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LogInBody, SignUpBody } from 'api/authAPI';
import { Member } from 'types/member';

export const authSlice = createSlice({
	name: 'auth',
	initialState: null,
	reducers: {
		login: (state, action: PayloadAction<LogInBody>) => {},
		signUp: (state, action: PayloadAction<SignUpBody>) => {},
		withdrawal: (state, action: PayloadAction<string>) => {},
	},
});

export default authSlice;
