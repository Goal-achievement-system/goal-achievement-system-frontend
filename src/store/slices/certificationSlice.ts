/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Goal, GoalsResponse } from 'types/goal';
import {
	CertFormState,
	LoadCertListParam,
	LoadCertListResponse,
	LoadCertParam,
	PushCertResultParam,
} from 'api/certAPI';
import { Certification } from 'types/certification';

export interface InitialState {
	goalList: Goal[];
	certGoal: Certification;
	maxPage: number;
}

const initialState: InitialState = {
	goalList: [],
	certGoal: {} as Certification,
	maxPage: 1,
};

export const certificationSlice = createSlice({
	name: 'certification',
	initialState,
	reducers: {
		loadCertList: (state, action: PayloadAction<LoadCertListParam>) => {},
		loadCertListSuccess: (state, { payload }: PayloadAction<LoadCertListResponse>) => {
			state.goalList = payload.goals;
			state.maxPage = payload.maxPage;
		},
		submitCertGoal: (state, action: PayloadAction<CertFormState>) => {
			console.log('start');
		},
		submitCertGoalSuccess: (state) => {},
		loadCert: (state, action: PayloadAction<LoadCertParam>) => {},
		loadCertSuccess: (state, { payload }: PayloadAction<Certification>) => {
			state.certGoal = payload;
		},
		pushCertResult: (state, action: PayloadAction<PushCertResultParam>) => {},
	},
});

export default certificationSlice;
