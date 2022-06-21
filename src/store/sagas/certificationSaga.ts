/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError, AxiosResponse } from 'axios';
import { put, all, fork, takeEvery, call, takeLatest } from 'redux-saga/effects';
import { GoalsResponse } from 'types/goal';
import certificationSlice from 'store/slices/certificationSlice';
import resultSlice from 'store/slices/resultSlice';
import loadingSlice from 'store/slices/loadingSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { CertResponse } from 'types/certification';
import * as goalAPI from '../../api/goalAPI';
import * as certAPI from '../../api/certAPI';

export interface LoadCertGoalParam {
	category: string;
	page: number;
}
const { loadCertGoalList, loadCertGoalListSuccess, submitCertGoal } = certificationSlice.actions;
const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;

function* loadCertGoalSaga(action: PayloadAction<goalAPI.LoadCertGoalParam>) {
	const param = action.payload;
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<GoalsResponse> = yield call(goalAPI.loadCertGoalList, param);
		yield put(loadCertGoalListSuccess(result?.data));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* submitCertGoalSaga(action: PayloadAction<certAPI.CertFormState>) {
	console.log('submitCertSaga');
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<CertResponse> = yield call(certAPI.submitCertGoal, action.payload);
		console.log(result);
		// yield put(certificationSlice.actions.submitCertGoalSuccess(result?.data));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
}

function* watchCertGoalSaga() {
	yield takeEvery(loadCertGoalList, loadCertGoalSaga);
}

function* watchSubmitCertGoalSaga() {
	yield takeLatest(submitCertGoal, submitCertGoalSaga);
}

export default function* goalSaga() {
	yield all([fork(watchCertGoalSaga), fork(watchSubmitCertGoalSaga)]);
}
