import { Sex } from 'types/member';
import client from './client';
// 로그인
export interface ILogIn {
	email: string;
	password: string;
}
//
export interface ISignUp {
	email: string;
	password: string;
	nickName: string;
	sex: Sex;
	age: number;
}
export const login = ({ email, password }: ILogIn) => {
	return client.post('/members/login', { email, password });
};

export const signUp = (signUpData: ISignUp) => {
	console.log(signUpData);
	return client.post('/members', { ...signUpData });
};
