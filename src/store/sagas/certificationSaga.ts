/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError, AxiosResponse } from 'axios';
import { put, all, fork, takeEvery, call } from 'redux-saga/effects';
import certificationSlice from 'store/slices/certificationSlice';
import resultSlice from 'store/slices/resultSlice';
import loadingSlice from 'store/slices/loadingSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import * as certAPI from 'api/certAPI';

const { loadCertList, loadCertListSuccess, loadCert, loadCertSuccess, pushCertResult } = certificationSlice.actions;
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
	yield put(finishLoading(action.type));
}

function* pushCertResultSaga(action: PayloadAction<certAPI.PushCertResultParam>) {
	const param = action.payload;
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse = yield call(certAPI.putCertResult, param);
		console.log(result);
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
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

export default function* certificationSaga() {
	yield all([fork(watchLoadCertListSaga), fork(watchLoadCertSaga), fork(watchPushCertResultSaga)]);
}
