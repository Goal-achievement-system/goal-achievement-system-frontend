import { call, takeLatest, fork, all, put } from 'redux-saga/effects';
import * as adminPAI from 'api/adminAPI';
import client from 'api/client';
import { AxiosError, AxiosResponse } from 'axios';
import resultSlice from 'store/slices/resultSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import loadingSlice from 'store/slices/loadingSlice';
import adminSlice from 'store/slices/adminSlice';

const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;
const { login, loadInspection, loadInspectionSuccess } = adminSlice.actions;

function* loginSaga(action: PayloadAction<adminPAI.LogInBody>) {
	yield put(startLoading(action.type));
	const body = action.payload;
	try {
		const result: AxiosResponse<adminPAI.LoginResponse> = yield call(adminPAI.login, body);
		const { Authorization: token } = result.data;
		localStorage.setItem('adminToken', token);
		client.defaults.headers.common.Authorization = token;
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;

		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* loadInspectionSaga(action: PayloadAction<adminPAI.LoadInspectionBody>) {
	yield put(startLoading(action.type));
	const body = action.payload;
	try {
		const result: AxiosResponse<adminPAI.LoadInspectionResponse> = yield call(adminPAI.loadInspection, body);
		yield put(loadInspectionSuccess(result?.data));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;

		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* watchLoginSaga() {
	yield takeLatest(login, loginSaga);
}

function* watchLoadInspectionSaga() {
	yield takeLatest(loadInspection, loadInspectionSaga);
}

export default function* adminSaga() {
	yield all([fork(watchLoginSaga), fork(watchLoadInspectionSaga)]);
}
