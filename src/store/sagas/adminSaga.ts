import { call, takeLatest, fork, all, put } from 'redux-saga/effects';
import * as adminPAI from 'api/adminAPI';
import client from 'api/client';
import { AxiosError, AxiosResponse } from 'axios';
import resultSlice from 'store/slices/resultSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import loadingSlice from 'store/slices/loadingSlice';
import adminSlice from 'store/slices/adminSlice';
import { Announcements } from 'types/announcements';

const { getResult } = resultSlice.actions;
const { startLoading, finishLoading } = loadingSlice.actions;
const {
	login,
	loadInspection,
	loadInspectionSuccess,
	loadAnnouncementsList,
	loadAnnouncementsListSuccess,
	inspectCertification,
	registAnnouncements,
	registAnnouncementsSuccess,
} = adminSlice.actions;

function* loginSaga(action: PayloadAction<adminPAI.LogInBody>) {
	yield put(startLoading(action.type));
	const body = action.payload;
	try {
		const result: AxiosResponse<adminPAI.LoginResponse> = yield call(adminPAI.login, body);
		const { Authorization: token } = result.data;
		localStorage.setItem('adminToken', token);
		client.defaults.headers.common.Authorization = token;
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* loadInspectionSaga(action: PayloadAction<adminPAI.LoadInspectionBody>) {
	yield put(startLoading(action.type));
	const body = action.payload;
	try {
		const result: AxiosResponse<adminPAI.LoadInspectionResponse> = yield call(adminPAI.loadInspection, body);
		yield put(loadInspectionSuccess(result?.data));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* loadAnnouncementsListSaga(action: PayloadAction<adminPAI.LoadAnnouncementsListBody>) {
	yield put(startLoading(action.type));
	const body = action.payload;
	try {
		const result: AxiosResponse<adminPAI.LoadAnnouncementsListResponse> = yield call(
			adminPAI.loadAnnouncementsList,
			body
		);
		console.log(result?.data, 'result');
		yield put(loadAnnouncementsListSuccess(result?.data));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* registAnnouncementsSaga(action: PayloadAction<adminPAI.RegistAnnouncementsBody>) {
	yield put(startLoading(action.type));
	const body = action.payload;
	try {
		const result: AxiosResponse<Announcements> = yield call(adminPAI.registAnnouncements, body);
		console.log(result?.data, 'result?.data');
		yield put(registAnnouncementsSuccess(result?.data));
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* inspectCertificationSaga(action: PayloadAction<adminPAI.InspectCertificationBody>) {
	yield put(startLoading(action.type));
	const body = action.payload;
	try {
		const result: AxiosResponse = yield call(adminPAI.inspectCertification, body);
		yield put(getResult({ isSuccess: true, actionType: action.type }));
	} catch (error) {
		const axiosError = error as AxiosError<any>;
		yield put(getResult({ isSuccess: false, actionType: action.type, error: axiosError }));
	}
	yield put(finishLoading(action.type));
}

function* watchLoginSaga() {
	yield takeLatest(login, loginSaga);
}

function* watchLoadInspectionSaga() {
	yield takeLatest(loadInspection, loadInspectionSaga);
}

function* watchLoadAnnouncementsListSaga() {
	yield takeLatest(loadAnnouncementsList, loadAnnouncementsListSaga);
}

function* watchRegistAnnouncementsSaga() {
	yield takeLatest(registAnnouncements, registAnnouncementsSaga);
}

function* watchInspectCertificationSaga() {
	yield takeLatest(inspectCertification, inspectCertificationSaga);
}

export default function* adminSaga() {
	yield all([
		fork(watchLoginSaga),
		fork(watchLoadInspectionSaga),
		fork(watchLoadAnnouncementsListSaga),
		fork(watchInspectCertificationSaga),
		fork(watchRegistAnnouncementsSaga),
	]);
}
