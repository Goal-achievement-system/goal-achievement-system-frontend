/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosResponse } from 'axios';
import { put, all, fork, takeEvery, call } from 'redux-saga/effects';
import goalSlice from 'store/slices/goalSlice';
import { Goal } from 'types/goal';
import * as goalAPI from '../../api/goalAPI';

export interface LoadGoalParam {
	status: string;
	category: string;
	page: number;
}

const { loadGoalListSuccess, loadGoalListFailure, loadGoalList } = goalSlice.actions;

function* loadGoalSaga(action: { payload: LoadGoalParam }) {
	const param = action.payload;

	try {
		const result: AxiosResponse<Goal[]> = yield call(goalAPI.loadGoaliLst, param);
		yield put(loadGoalListSuccess(result.data));
	} catch (error) {
		yield put(loadGoalListFailure(error));
	}
}

function* watchGoalSaga() {
	yield takeEvery(loadGoalList, loadGoalSaga);
}

export default function* goalSaga() {
	yield all([fork(watchGoalSaga)]);
}
