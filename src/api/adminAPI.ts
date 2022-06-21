import client from './client';

export interface LogInBody {
	email: string;
	password: string;
}

export interface LoginResponse {
	Authorization: string;
}

export const login = ({ email, password }: LogInBody) => {
	return client.post('/admin/login', { email, password });
};
