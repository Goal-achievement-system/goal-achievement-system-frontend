import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadInspectionBody, LoadInspectionResponse } from 'api/adminAPI';
import { LogInBody } from 'api/authAPI';

export interface InitialState {
	inspectionList: LoadInspectionResponse;
}

const initialState: InitialState = {
	inspectionList: [],
};

export const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<LogInBody>) => {},
		loadInspection: (state, action: PayloadAction<LoadInspectionBody>) => {},
		loadInspectionSuccess: (state, { payload }: PayloadAction<LoadInspectionResponse>) => {
			state.inspectionList = payload;
		},
	},
});

export default adminSlice;
