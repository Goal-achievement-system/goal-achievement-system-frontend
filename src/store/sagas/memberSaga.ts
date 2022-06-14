import { call, takeLatest, fork, all, put } from 'redux-saga/effects';
import * as memberAPI from 'api/memberAPI';
import memberSlice from 'store/slices/memberSlice';
import client from 'api/client';
import { Member } from 'types/member';
import { AxiosResponse } from 'axios';
import loadingSlice from 'store/slices/loadingSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import resultSlice from 'store/slices/resultSlice';
import { GoalCount } from 'types/statistics';
import { Goal, GoalsResponse } from 'types/goal';
import { Cert } from 'types/certification';

const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;
const {
	loadMemberInfo,
	loadMemberInfoSuccess,
	loadMemberInfoFailure,
	replaceMemberInfo,
	replaceMemberInfoSuccess,
	replaceMemberInfoFail,
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
		yield put(loadMemberInfoFailure(String(error)));
	}
	yield put(finishLoading(action.type));
}

function* replaceMemberSaga(action: { payload: Member }) {
	try {
		const token: string = localStorage.getItem('goalKeeperToken')!;
		client.defaults.headers.common.Authorization = token;

		const result: AxiosResponse<Member> = yield call(memberAPI.replceMember, action.payload);
		yield put(replaceMemberInfoSuccess(result.data));
	} catch (error) {
		yield put(replaceMemberInfoFail(String(error)));
	}
}

function* chargeMoneySaga(action: PayloadAction<memberAPI.IChargeMoney>) {
	yield put(startLoading(action.type));
	try {
		yield call(memberAPI.chargeMoney, action.payload);
		yield put(chargeMoneySuccess(action.payload.money));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		yield put(getResult({ isSuccess: false, actionType: action.type, errorMsg: String(error) }));
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
		yield put(getResult({ isSuccess: false, actionType: action.type, errorMsg: String(error) }));
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
		yield put(getResult({ isSuccess: false, actionType: action.type, errorMsg: String(error) }));
	}
	yield put(finishLoading(action.type));
}

function* watchLoadMemberSaga() {
	yield takeLatest(loadMemberInfo, loadMemberSaga);
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
		fork(watchGetMemberMenuInfosSaga),
	]);
}
