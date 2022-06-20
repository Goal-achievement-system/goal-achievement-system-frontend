import { AxiosError, AxiosResponse } from 'axios';
import { put, all, fork, takeEvery, call } from 'redux-saga/effects';
import statisticsSlice from 'store/slices/statisticsSlice';
import * as statisticsAPI from 'api/statisticsAPI';
import resultSlice from 'store/slices/resultSlice';
import loadingSlice from 'store/slices/loadingSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { GoalCount } from 'types/statistics';

const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;
const { loadGoalCount, loadGoalCountSuccess } = statisticsSlice.actions;

function* loadGoalCountSaga(action: PayloadAction) {
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<GoalCount> = yield call(statisticsAPI.loadGoalCount);
		yield put(loadGoalCountSuccess(result.data));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* watchStatisticsSaga() {
	yield takeEvery(loadGoalCount, loadGoalCountSaga);
}

export default function* statisticsSaga() {
	yield all([fork(watchStatisticsSaga)]);
}
