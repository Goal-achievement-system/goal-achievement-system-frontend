import { all, fork } from 'redux-saga/effects';
import goalSaga from './goalSaga';
import authSaga from './authSaga';
import statisticsSaga from './statisticsSaga';
import MemberSaga from './memberSaga';
import notificationsSaga from './notificationsSaga';

export default function* rootSaga() {
	yield all([fork(goalSaga), fork(authSaga), fork(statisticsSaga), fork(MemberSaga), fork(notificationsSaga)]);
}
