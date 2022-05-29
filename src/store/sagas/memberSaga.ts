import { call, takeLatest, fork, all, put } from 'redux-saga/effects';
import * as authAPI from 'api/authAPI';
import memberSlice from 'store/slices/memberSlice';

interface IAUth {
	data: {
		Authorization: string;
	};
}
function* loginSaga(action: { payload: authAPI.ILogIn }) {
	const loginData = action.payload;
	const result: IAUth = yield call(authAPI.login, loginData);
	const { Authorization: token } = result.data;
	localStorage.setItem('goalKeeperToken', token);
}

const { login } = memberSlice.actions;

function* watchLoginSaga() {
	yield takeLatest(login, loginSaga);
}

export default function* memberSaga() {
	yield all([fork(watchLoginSaga)]);
}
