import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import handleLogout, { handleAdminLogout } from 'utils/handleLogout';
import Path from 'utils/path';

export interface SagaResultProps {
	isSuccess: boolean;
	errorStatus?: number | null;
	errorMsg?: string | null;
}

type Result = { [k: string]: SagaResultProps | null };

interface InitialState {
	result: Result;
}

export interface IResult {
	actionType: string;
	isSuccess: boolean;
	error?: AxiosError<any>;
}

const formattingErrorMessage = (status: number, code: number): string => {
	let msg = '오류가 발생했습니다.';
	if (status === 404) return msg;
	switch (code) {
		case 1:
			msg = '이미 사용중인 이메일입니다.';
			break;
		case 2:
			msg = '이메일 또는 비밀번호가 잘못되었습니다.';
			break;
		case 3:
			msg = '세션이 만료되었습니다.';
			break;
		case 4:
			msg = '해당 목표는 인증 진행중입니다.';
			break;
		case 5:
			msg = '권한이 없습니다.';
			break;
		case 6:
			msg = '정상적인 금액을 입력해주세요.';
			break;
		case 7:
			msg = '존재하지 않는 카테고리입니다.';
			break;
		case 8:
			msg = '찾는 대상이 없습니다.';
			break;
		case 9:
			msg = '오류가 발생했습니다.';
			break;
		default:
			msg = '오류가 발생했습니다.';
			break;
	}
	return msg;
};

const initialState: InitialState = {
	result: {},
};

export const resultSlice = createSlice({
	name: 'result',
	initialState,
	reducers: {
		initResult: (state, { payload: actionType }: PayloadAction<string>) => {
			state.result[actionType] = null;
		},
		getResult: (state, { payload }: PayloadAction<IResult>) => {
			if (payload.error && payload.error.response?.status === 401) {
				alert('세션이 만료되어 로그아웃 합니다.');
				handleAdminLogout();
				handleLogout();
			}
			state.result[payload.actionType] = {
				isSuccess: payload.isSuccess,
				errorStatus: payload.error ? payload.error.response?.status : null,
				errorMsg: payload.error
					? formattingErrorMessage(payload.error.response?.status ?? 404, payload.error.response?.data.errorCode)
					: null,
			};
		},
	},
});

export default resultSlice;
