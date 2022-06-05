import { AxiosResponse } from 'axios';
import { put, all, fork, takeEvery, call } from 'redux-saga/effects';
import statisticsSlice from 'store/slices/statisticsSlice';
import { GoalCount } from 'types/statistics';
import * as API from 'api/statisticsAPI';

const { loadGoalCount, loadGoalCountSuccess, loadGoalCountFailure } = statisticsSlice.actions;

function* loadGoalCountSaga() {
	try {
		const result: AxiosResponse<GoalCount> = yield call(API.loadGoalCount);
		yield put(loadGoalCountSuccess(result.data));
	} catch (error) {
		yield put(loadGoalCountFailure(String(error)));
	}
}

function* watchStatisticsSaga() {
	yield takeEvery(loadGoalCount, loadGoalCountSaga);
}

export default function* statisticsSaga() {
	yield all([fork(watchStatisticsSaga)]);
}
