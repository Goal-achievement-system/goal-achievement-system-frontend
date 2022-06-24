import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import pushNoticeSilice from 'store/slices/pushNotice';
import client from 'api/client';
import * as MemberAPI from 'api/memberAPI';

import { IPushNotice } from 'types/notification';
import { AxiosError, AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import resultSlice from 'store/slices/resultSlice';
import loadingSlice from 'store/slices/loadingSlice';

const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;
const { loadNotification, loadNotificationSuccess } = pushNoticeSilice.actions;

export function* loadPushNoticeSaga(action: PayloadAction) {
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<IPushNotice[]> = yield call(MemberAPI.getNotifications);
		yield put(loadNotificationSuccess(result.data));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

export function* watchLoadNotificationsSaga() {
	yield takeLatest(loadNotification, loadPushNoticeSaga);
}

export default function* pushNoticeSaga() {
	yield all([fork(watchLoadNotificationsSaga)]);
}
