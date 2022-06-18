import { call, takeLatest, fork, all, put } from 'redux-saga/effects';
import * as authAPI from 'api/authAPI';
import authSlice from 'store/slices/authSlice';
import client from 'api/client';
import { AxiosError, AxiosResponse } from 'axios';
import resultSlice from 'store/slices/resultSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import loadingSlice from 'store/slices/loadingSlice';

const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;
const { login, signUp } = authSlice.actions;

function* loginSaga(action: PayloadAction<authAPI.LogInBody>) {
	yield put(startLoading(action.type));
	const body = action.payload;
	try {
		const result: AxiosResponse<authAPI.LoginResponse> = yield call(authAPI.login, body);

		const { Authorization: token } = result.data;
		localStorage.setItem('goalKeeperToken', token);
		client.defaults.headers.common.Authorization = token;
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;

		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* signUpSaga(action: PayloadAction<authAPI.SignUpBody>) {
	const body = action.payload;
	yield put(startLoading(action.type));
	try {
		yield call(authAPI.signUp, body);
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
function* watchSignUpSaga() {
	yield takeLatest(signUp, signUpSaga);
}

export default function* authSaga() {
	yield all([fork(watchLoginSaga), fork(watchSignUpSaga)]);
}
