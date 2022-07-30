import { AxiosRequestConfig } from 'axios';
import { SexEng } from 'types/member';
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
	sex: SexEng;
	age: number;
}

export interface LoginResponse {
	Authorization: string;
}

export const login = ({ email, password }: LogInBody) => {
	return client.post('/members/login', { email, password });
};

export const signUp = (body: SignUpBody) => {
	return client.post('/members', { ...body });
};

interface Config extends AxiosRequestConfig {
	password: string;
}
export const withdrawal = (password: string) => {
	return client.delete('/members/myinfo/withdrawal', { password } as Config);
};
