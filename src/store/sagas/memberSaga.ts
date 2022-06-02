import { call, takeLatest, fork, all, put } from 'redux-saga/effects';
import * as memberAPI from 'api/memberAPI';
import memberSlice from 'store/slices/memberSlice';
import client from 'api/client';
import { Member } from 'types/member';
import { AxiosResponse } from 'axios';

const {
	loadMemberInfo,
	loadMemberInfoSuccess,
	loadMemberInfoFailure,
	replaceMemberInfo,
	replaceMemberInfoSuccess,
	replaceMemberInfoFail,
} = memberSlice.actions;

function* loadMemberSaga() {
	try {
		const token: string = localStorage.getItem('goalKeeperToken')!;
		client.defaults.headers.common.Authorization = token;
		const result: AxiosResponse<Member> = yield call(memberAPI.getMember);
		yield put(loadMemberInfoSuccess(result.data));
	} catch (error) {
		yield put(loadMemberInfoFailure(String(error)));
	}
}

function* replaceMemberSaga(action: { payload: Member }) {
	try {
		const token: string = localStorage.getItem('goalKeeperToken')!;
		client.defaults.headers.common.Authorization = token;

		const result: Member = yield call(memberAPI.replceMember, action.payload);
		yield put(replaceMemberInfoSuccess(result));
	} catch (error) {
		yield put(replaceMemberInfoFail(String(error)));
	}
}

function* watchLoadMemberSaga() {
	yield takeLatest(loadMemberInfo, loadMemberSaga);
}

function* watchReplaceMemberSaga() {
	yield takeLatest(replaceMemberInfo, replaceMemberSaga);
}

export default function* MemberSaga() {
	yield all([fork(watchLoadMemberSaga), fork(watchReplaceMemberSaga)]);
}
