import { all, fork } from 'redux-saga/effects';
import goalSaga from './goalSaga';

export default function* rootSaga() {
	yield all([fork(goalSaga)]);
}
