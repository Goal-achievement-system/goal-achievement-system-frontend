import { Cert } from 'types/certification';
import { Goal } from 'types/goal';
import client from './client';

export interface LogInBody {
	email: string;
	password: string;
}

export interface LoadInspectionBody {
	page: number;
}

export interface LoginResponse {
	Authorization: string;
}

interface InspectionData {
	goal: Goal;
	certification: Cert;
}

export type LoadInspectionResponse = InspectionData[];

const checkAdmin = () => {
	const token = localStorage.getItem('adminToken');
	if (token) client.defaults.headers.common.Authorization = token;
};

export const login = ({ email, password }: LogInBody) => {
	checkAdmin();
	return client.post('/admin/login', { email, password });
};

export const loadInspection = ({ page }: LoadInspectionBody) => {
	checkAdmin();
	return client.get(`/admin/goals/hold/${page}`);
};
