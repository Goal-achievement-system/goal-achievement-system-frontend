/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadCertListParam, LoadCertListResponse, LoadCertParam } from 'api/certAPI';
import { Certification } from 'types/certification';
import { Goal } from 'types/goal';

export interface InitialState {
	goalList: Goal[];
	certGoal: Certification;
	maxPage: number;
}

const initialState: InitialState = {
	goalList: [],
	certGoal: {} as Certification,
	maxPage: 0,
};

export const certificationSlice = createSlice({
	name: 'goal',
	initialState,
	reducers: {
		loadCertList: (state, action: PayloadAction<LoadCertListParam>) => {},
		loadCertListSuccess: (state, { payload }: PayloadAction<LoadCertListResponse>) => {
			state.goalList = payload.goals;
			state.maxPage = payload.maxPage;
		},
		loadCert: (state, action: PayloadAction<LoadCertParam>) => {},
		loadCertSuccess: (state, { payload }: PayloadAction<Certification>) => {
			state.certGoal = payload;
		},
	},
});

export default certificationSlice;
