import { call, takeLatest, fork, all, put } from 'redux-saga/effects';
import * as authAPI from 'api/authAPI';
import authSlice from 'store/slices/authSlice';
import client from 'api/client';
import { Member } from 'types/member';
import { AxiosError } from 'axios';
import resultSlice from 'store/slices/resultSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import loadingSlice from 'store/slices/loadingSlice';

interface Token {
	data: {
		Authorization: string;
	};
}
interface Status {
	status: number;
}

/*
"email": "example@e.com",
"password": "password",

*/
const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;
const { login, loginSuccess, signUp, authFailure } = authSlice.actions;

function* loginSaga(action: PayloadAction<authAPI.ILogIn>) {
	yield put(startLoading(action.type));
	const loginData = action.payload;
	try {
		const logInRes: Token = yield call(authAPI.login, loginData);
		const { Authorization: token } = logInRes.data;
		localStorage.setItem('goalKeeperToken', token);
		client.defaults.headers.common.Authorization = token;
		yield put(loginSuccess());
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
		yield put(authFailure());
	}
	yield put(finishLoading(action.type));
}

function* signUpSaga(action: { payload: authAPI.ISignUp }) {
	const signUpData = action.payload;
	const { email, password } = signUpData;
	try {
		const signUpRes: Status = yield call(authAPI.signUp, signUpData);
		console.log(signUpData, signUpRes);
		yield put(login({ email, password }));
	} catch (error) {
		yield put(authFailure());
	}
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
