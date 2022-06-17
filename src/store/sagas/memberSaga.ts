import { AxiosError, AxiosResponse } from 'axios';
import { call, takeLatest, fork, all, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import memberSlice from 'store/slices/memberSlice';
import loadingSlice from 'store/slices/loadingSlice';
import resultSlice from 'store/slices/resultSlice';
import * as memberAPI from 'api/memberAPI';
import client from 'api/client';
import { Member } from 'types/member';
import { GoalCount } from 'types/statistics';
import { Goal, GoalsResponse } from 'types/goal';
import { Cert } from 'types/certification';

const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;
const {
	loadMemberInfo,
	loadMemberInfoSuccess,
	getMemberGoals,
	getMemberGoalsSuccess,
	replaceMemberInfo,
	replaceMemberInfoSuccess,
	chargeMoney,
	chargeMoneySuccess,
	transferMoney,
	transferMoneySuccess,
	getMemberMenuInfos,
	getMemberMenuInfosSuccess,
} = memberSlice.actions;

function* loadMemberSaga(action: PayloadAction) {
	yield put(startLoading(action.type));
	try {
		const token: string = localStorage.getItem('goalKeeperToken')!;
		client.defaults.headers.common.Authorization = token;
		const result: AxiosResponse<Member> = yield call(memberAPI.getMember);
		yield put(loadMemberInfoSuccess(result.data));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* getMemberGoalsSaga(action: PayloadAction<memberAPI.IGetMemberGoals>) {
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<memberAPI.IGetMemberGoalsResult> = yield call(memberAPI.getMemberGoals, action.payload);
		yield put(getMemberGoalsSuccess(result.data));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* replaceMemberSaga(action: PayloadAction<Member>) {
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<Member> = yield call(memberAPI.replceMember, action.payload);
		yield put(replaceMemberInfoSuccess(result.data));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* chargeMoneySaga(action: PayloadAction<memberAPI.IChargeMoney>) {
	yield put(startLoading(action.type));
	try {
		yield call(memberAPI.chargeMoney, action.payload);
		yield put(chargeMoneySuccess(action.payload.money));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* transferMoneySaga(action: PayloadAction<memberAPI.IChargeMoney>) {
	yield put(startLoading(action.type));
	try {
		yield call(memberAPI.transferMoney, action.payload);
		yield put(transferMoneySuccess(action.payload.money));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* getMemberMenuInfosSaga(action: PayloadAction) {
	yield put(startLoading(action.type));
	try {
		const goalStatistics: AxiosResponse<GoalCount> = yield call(memberAPI.getMemberGoalStatistics);
		const menuGoals: AxiosResponse<GoalsResponse> = yield call(memberAPI.getMemberGoals, {
			state: 'ongoing',
			page: 1,
		});
		// const menuCerts: AxiosResponse<Cert[]> = yield call(memberAPI.getMemberCerts, {
		// 	state: 'ongoing',
		// 	page: 1,
		// });
		yield put(
			getMemberMenuInfosSuccess({
				goalStatistics: goalStatistics.data,
				menuGoals: menuGoals.data.goals,
				menuCerts: [],
			})
		);
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* watchLoadMemberSaga() {
	yield takeLatest(loadMemberInfo, loadMemberSaga);
}
function* watchGetMemberGoalsSaga() {
	yield takeLatest(getMemberGoals, getMemberGoalsSaga);
}
function* watchReplaceMemberSaga() {
	yield takeLatest(replaceMemberInfo, replaceMemberSaga);
}
function* watchChargeMoneySaga() {
	yield takeLatest(chargeMoney, chargeMoneySaga);
}
function* watchTransferMoneySaga() {
	yield takeLatest(transferMoney, transferMoneySaga);
}
function* watchGetMemberMenuInfosSaga() {
	yield takeLatest(getMemberMenuInfos, getMemberMenuInfosSaga);
}

export default function* MemberSaga() {
	yield all([
		fork(watchLoadMemberSaga),
		fork(watchReplaceMemberSaga),
		fork(watchChargeMoneySaga),
		fork(watchTransferMoneySaga),
		fork(watchGetMemberGoalsSaga),
		fork(watchGetMemberMenuInfosSaga),
	]);
}
