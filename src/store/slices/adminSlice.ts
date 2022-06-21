import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LogInBody } from 'api/authAPI';

export const adminSlice = createSlice({
	name: 'admin',
	initialState: null,
	reducers: {
		login: (state, action: PayloadAction<LogInBody>) => {},
	},
});

export default adminSlice;
