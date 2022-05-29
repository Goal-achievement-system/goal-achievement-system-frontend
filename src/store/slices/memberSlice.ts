import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILogIn } from 'api/authAPI';

export interface MemberState {
	id: string;
}

const initialState: MemberState = {
	id: '',
};

export const memberSlice = createSlice({
	name: 'member',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<ILogIn>) => {},
	},
});

export default memberSlice;
