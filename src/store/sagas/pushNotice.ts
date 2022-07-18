import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import pushNoticeSilice from 'store/slices/pushNotice';
import * as MemberAPI from 'api/memberAPI';

import { IPushNotice, IPushNoticeView } from 'types/notification';
import { AxiosError, AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import resultSlice from 'store/slices/resultSlice';
import loadingSlice from 'store/slices/loadingSlice';

const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;
const { loadNotification, loadNotificationSuccess, processReadNotification, processReadNotificationSuccess } =
	pushNoticeSilice.actions;

export function* loadPushNoticeSaga(action: PayloadAction) {
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<IPushNotice[]> = yield call(MemberAPI.getNotifications);
		const pushNoticeList = result.data.map((pushNotice: IPushNotice): IPushNoticeView => {
			const [fullCategory, content] = pushNotice.content.split(';').map((ele) => ele.trim());
			const category = fullCategory.split(':')[1];
			return { ...pushNotice, content, category };
		});
		yield put(loadNotificationSuccess(pushNoticeList));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

export function* processReadNotificationSaga(action: PayloadAction<number>) {
	yield put(startLoading(action.type));
	try {
		const result: AxiosResponse<any> = yield call(MemberAPI.processReadNotifications, action.payload);
		yield put(processReadNotificationSuccess(result.status));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}
export function* watchLoadNotificationsSaga() {
	yield takeLatest(loadNotification, loadPushNoticeSaga);
}

export function* watchProcessReadNotificationSaga() {
	yield takeLatest(processReadNotification, processReadNotificationSaga);
}

export default function* pushNoticeSaga() {
	yield all([fork(watchLoadNotificationsSaga), fork(watchProcessReadNotificationSaga)]);
}
