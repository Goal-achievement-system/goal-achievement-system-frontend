import { all, fork } from 'redux-saga/effects';
import goalSaga from './goalSaga';
import authSaga from './authSaga';
import statisticsSaga from './statisticsSaga';
import MemberSaga from './memberSaga';
import pushNoticeSaga from './pushNotice';
import certificationSaga from './certificationSaga';
import adminSaga from './adminSaga';

export default function* rootSaga() {
	yield all([
		fork(goalSaga),
		fork(authSaga),
		fork(statisticsSaga),
		fork(MemberSaga),
		fork(pushNoticeSaga),
		fork(certificationSaga),
		fork(adminSaga),
	]);
}
