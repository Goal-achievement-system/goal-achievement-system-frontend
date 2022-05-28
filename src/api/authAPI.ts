import client from './client';

// 로그인
interface ILogIn {
	email: string;
	password: string;
}
interface ISignUp {
	email: string;
	password: string;
}
export const login = ({ email, password }: ILogIn) => {
	client.post('/members/login', { email, password });
};

export const signUp = ({ email, password }: ISignUp) => {
	client.post('/members', { email, password });
};
