import { all, fork } from 'redux-saga/effects';
import goalSaga from './goalSaga';
import authSaga from './authSaga';

export default function* rootSaga() {
	yield all([fork(goalSaga), fork(authSaga)]);
}
