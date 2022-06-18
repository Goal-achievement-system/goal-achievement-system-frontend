import { Sex } from 'types/member';
import client from './client';
// 로그인
export interface LogInBody {
	email: string;
	password: string;
}
//
export interface SignUpBody {
	email: string;
	password: string;
	nickName: string;
	sex: Sex;
	age: number;
}

export interface LoginResponse {
	Authorization: string;
}
export interface SignUpResponse {
	status: number;
}

export interface TempError {
	data: {
		dateTime: string;
		errorCode: number;
		errorContent: string;
		url: string;
	};
}

export const login = ({ email, password }: LogInBody) => {
	return client.post('/members/login', { email, password });
};

export const signUp = (signUpData: SignUpBody) => {
	return client.post('/members', { ...signUpData });
};
