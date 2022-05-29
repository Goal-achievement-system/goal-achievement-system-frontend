import { all, fork } from 'redux-saga/effects';
import goalSaga from './goalSaga';
import loginSaga from './memberSaga';

export default function* rootSaga() {
	yield all([fork(goalSaga), fork(loginSaga)]);
}
