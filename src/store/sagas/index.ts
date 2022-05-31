import { all, fork } from 'redux-saga/effects';
import goalSaga from './goalSaga';
import statisticsSaga from './statisticsSaga';

export default function* rootSaga() {
	yield all([fork(goalSaga), fork(statisticsSaga)]);
}
