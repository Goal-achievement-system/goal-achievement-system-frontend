import { all, fork } from 'redux-saga/effects';
import goalSaga from './goalSaga';
import authSaga from './authSaga';
import statisticsSaga from './statisticsSaga';
import MemberSaga from './memberSaga';
import notificationsSaga from './notificationsSaga';
import certificationSaga from './certificationSaga';

export default function* rootSaga() {
	yield all([
		fork(goalSaga),
		fork(authSaga),
		fork(statisticsSaga),
		fork(MemberSaga),
		fork(notificationsSaga),
		fork(certificationSaga),
	]);
}
