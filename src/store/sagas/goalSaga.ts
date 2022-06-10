/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosResponse } from 'axios';
import { put, all, fork, takeEvery, call } from 'redux-saga/effects';
import goalSlice from 'store/slices/goalSlice';
import { Goal } from 'types/goal';
import resultSlice from 'store/slices/resultSlice';
import loadingSlice from 'store/slices/loadingSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import * as goalAPI from '../../api/goalAPI';

export interface LoadGoalParam {
	status: string;
	category: string;
	page: number;
}

export interface RegisterGoalParam {
	memberEmail: string;
	goalName: string;
	content: string;
	money: number;
	limitDate: Date;
	reward: 'low' | 'high';
	// 디자인 완성되면  고치기
	category: string;
}

const { loadGoalListSuccess, loadGoalListFailure, loadGoalList, registerGoal } = goalSlice.actions;
const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;
function* loadGoalSaga(action: { payload: LoadGoalParam }) {
	const param = action.payload;

	try {
		const result: AxiosResponse<Goal[]> = yield call(goalAPI.loadGoaliLst, param);
		console.log(result);
		yield put(loadGoalListSuccess(result.data));
	} catch (error) {
		yield put(loadGoalListFailure(error));
	}
}

function* registerGoalSaga(action: PayloadAction<RegisterGoalParam>) {
	const param = action.payload;
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse = yield call(goalAPI.registerGoal, param);

		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		// 에러 처리 하기
		console.log(error);
		yield put(getResult({ isSuccess: false, actionType: action.type, errorMsg: String(error) }));
	}
	yield put(finishLoading(action.type));
}

function* watchGoalSaga() {
	yield takeEvery(loadGoalList, loadGoalSaga);
}

function* watchRegisterGoalSaga() {
	yield takeEvery(registerGoal, registerGoalSaga);
}

export default function* goalSaga() {
	yield all([fork(watchGoalSaga), fork(watchRegisterGoalSaga)]);
}
