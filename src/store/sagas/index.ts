import { all, fork } from 'redux-saga/effects';
import goalSaga from './goalSaga';
import authSaga from './authSaga';
import statisticsSaga from './statisticsSaga';

export default function* rootSaga() {
	yield all([fork(goalSaga), fork(authSaga), fork(statisticsSaga)]);
}
