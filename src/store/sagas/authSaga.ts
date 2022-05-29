import { call, takeLatest, fork, all, put } from 'redux-saga/effects';
import * as authAPI from 'api/authAPI';
import getMember from 'api/memberAPI';
import authSlice from 'store/slices/authSlice';
import client from 'api/client';
import { Member } from 'types/member';

interface IAuth {
	data: {
		Authorization: string;
	};
}
/*
"email": "example@e.com",
"password": "password",

*/
const { login, loginSuccess, loginFailure } = authSlice.actions;
function* loginSaga(action: { payload: authAPI.ILogIn }) {
	const loginData = action.payload;
	try {
		const logInRes: IAuth = yield call(authAPI.login, loginData);
		const { Authorization: token } = logInRes.data;
		localStorage.setItem('goalKeeperToken', token);
		client.defaults.headers.common.Authorization = token;
		yield put(loginSuccess());
	} catch (error) {
		yield put(loginFailure());
	}
}

function* watchLoginSaga() {
	yield takeLatest(login, loginSaga);
}

export default function* authSaga() {
	yield all([fork(watchLoginSaga)]);
}
