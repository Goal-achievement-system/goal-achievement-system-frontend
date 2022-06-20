/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError, AxiosResponse } from 'axios';
import { put, all, fork, takeEvery, call } from 'redux-saga/effects';
import { GoalsResponse } from 'types/goal';
import certificationSlice from 'store/slices/certificationSlice';
import resultSlice from 'store/slices/resultSlice';
import loadingSlice from 'store/slices/loadingSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import * as goalAPI from '../../api/goalAPI';

const { loadCertGoalList, loadCertGoalListSuccess } = certificationSlice.actions;
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

function* watchCertGoalSaga() {
	yield takeEvery(loadCertGoalList, loadCertGoalSaga);
}

export default function* goalSaga() {
	yield all([fork(watchCertGoalSaga)]);
}
