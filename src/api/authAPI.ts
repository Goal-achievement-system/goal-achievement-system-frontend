import client from './client';

// 로그인
export interface ILogIn {
	email: string;
	password: string;
}
export interface ISignUp {
	email: string;
	password: string;
}
export const login = ({ email, password }: ILogIn) => {
	console.log({ email, password });
	return client.post('/members/login', { email, password });
};

export const signUp = ({ email, password }: ISignUp) => {
	return client.post('/members', { email, password });
};
