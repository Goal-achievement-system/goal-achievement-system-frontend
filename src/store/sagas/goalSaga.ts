import { put, all, fork, takeEvery, call } from 'redux-saga/effects';
import goalSlice from 'store/slices/goalSlice';
import { Goal } from 'types/goal';
import * as API from '../../api/goalAPI';

export interface GoalListParams {
	list: Goal[];
}

export interface LoadGoalParam {
	status: string;
	category: string;
	page: number;
}

const { loadGoalListSuccess, loadGoalListFailure, loadGoalList } = goalSlice.actions;

function* loadGoalSaga(action: { payload: LoadGoalParam }) {
	const param = action.payload;

	try {
		const result: GoalListParams = yield call(API.loadGoaliLst, param);
		console.log(result, 'result');
		yield put(loadGoalListSuccess({ list: [] }));
	} catch (error) {
		console.log(error, 'error');
		yield put(loadGoalListFailure(error));
	}
}

function* watchGoalSaga() {
	yield takeEvery(loadGoalList, loadGoalSaga);
}

export default function* goalSaga() {
	yield all([fork(watchGoalSaga)]);
}
