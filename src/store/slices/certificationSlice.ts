/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Goal } from 'types/goal';
import {
	CertFormState,
	GetCertImageParam,
	LoadCertListParam,
	LoadCertListResponse,
	LoadCertParam,
	PushCertResultParam,
} from 'api/certAPI';
import { Certification } from 'types/certification';

export interface InitialState {
	goalList: Goal[];
	certGoal: Certification;
	certImage: string | null;
	maxPage: number;
}

const initialState: InitialState = {
	goalList: [],
	certGoal: {} as Certification,
	certImage: null,
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
		submitCertGoal: (state, action: PayloadAction<CertFormState>) => {},
		submitCertGoalSuccess: (state) => {},
		loadCert: (state, action: PayloadAction<LoadCertParam>) => {},
		loadCertSuccess: (state, { payload }: PayloadAction<Certification>) => {
			state.certGoal = payload;
		},
		pushCertResult: (state, action: PayloadAction<PushCertResultParam>) => {},
		addSuccessCount: (state) => {
			console.log('성공 인증');
			state.certGoal = { ...state.certGoal, successCount: state.certGoal.successCount + 1 };
			console.log('성공 인증');
		},
		getCertImage: (state, action: PayloadAction<GetCertImageParam>) => {},
		getCertImageSuccess: (state, { payload }: PayloadAction<any>) => {
			state.certImage = payload;
		},
	},
});

export default certificationSlice;
