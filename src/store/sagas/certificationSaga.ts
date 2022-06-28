/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosError, AxiosResponse } from 'axios';
// import { GoalsResponse } from 'types/goal';
import { put, all, fork, takeEvery, call } from 'redux-saga/effects';
import certificationSlice from 'store/slices/certificationSlice';
import resultSlice from 'store/slices/resultSlice';
import loadingSlice from 'store/slices/loadingSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { CertResponse } from 'types/certification';
import * as certAPI from 'api/certAPI';
import { Buffer } from 'buffer';

export interface LoadCertGoalParam {
	category: string;
	page: number;
}
const {
	loadCertList,
	loadCertListSuccess,
	submitCertGoal,
	submitCertGoalSuccess,
	loadCert,
	loadCertSuccess,
	pushCertResult,
	getCertImage,
	getCertImageSuccess,
	addSuccessCount,
} = certificationSlice.actions;
const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;

function* loadCertListSaga(action: PayloadAction<certAPI.LoadCertListParam>) {
	const param = action.payload;
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<certAPI.LoadCertListResponse> = yield call(certAPI.getCertList, param);
		yield put(loadCertListSuccess(result?.data));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* submitCertGoalSaga(action: PayloadAction<certAPI.CertFormState>) {
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<CertResponse> = yield call(certAPI.submitCertGoal, action.payload);
		console.log(result);
		// yield put(submitCertGoalSuccess(result?.data));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* loadCertSaga(action: PayloadAction<certAPI.LoadCertParam>) {
	const param = action.payload;
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<certAPI.CertResponse> = yield call(certAPI.getCert, param);
		yield put(loadCertSuccess(result?.data));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
}

function* pushCertResultSaga(action: PayloadAction<certAPI.PushCertResultParam>) {
	const param = action.payload;
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse = yield call(certAPI.putCertResult, param);
		yield put(getResult({ isSuccess: true, actionType: action.type }));
		if (param.result) yield put(addSuccessCount());
	} catch (error) {
		console.log(error);
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* getCertImageSaga(action: PayloadAction<certAPI.GetCertImageParam>) {
	const param = action.payload;
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse = yield call(certAPI.getCertImage, param);
		const stringifiedBuffer = Buffer.from(result?.data).toString('base64');
		const base64Image = `data:${result?.headers['content-type']};base64,${stringifiedBuffer}`;
		yield put(getResult({ isSuccess: true, actionType: action.type }));
		yield put(getCertImageSuccess(base64Image));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* watchSubmitCertGoalSaga() {
	yield takeEvery(submitCertGoal, submitCertGoalSaga);
}
function* watchLoadCertListSaga() {
	yield takeEvery(loadCertList, loadCertListSaga);
}
function* watchLoadCertSaga() {
	yield takeEvery(loadCert, loadCertSaga);
}
function* watchPushCertResultSaga() {
	yield takeEvery(pushCertResult, pushCertResultSaga);
}

function* watchGetCertImageSaga() {
	yield takeEvery(getCertImage, getCertImageSaga);
}

export default function* certificationSaga() {
	yield all([
		fork(watchSubmitCertGoalSaga),
		fork(watchLoadCertListSaga),
		fork(watchLoadCertSaga),
		fork(watchPushCertResultSaga),
		fork(watchGetCertImageSaga),
	]);
}
