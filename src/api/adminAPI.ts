import { Announcements } from 'types/announcements';
import { Certification } from 'types/certification';
import { Goal } from 'types/goal';
import client from './client';

export interface LogInBody {
	email: string;
	password: string;
}

export interface LoadInspectionBody {
	page: number;
}

export interface LoadAnnouncementsListBody {
	page: number;
}

export interface InspectCertificationBody {
	state: 'success' | 'fail';
	goalId: number;
}

export interface LoginResponse {
	Authorization: string;
}

interface InspectionData {
	goal: Goal;
	certification: Certification;
}

export type LoadInspectionResponse = InspectionData[];

export interface LoadAnnouncementsListResponse {
	maxPage: number;
	announcements: Announcements[];
}

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

export const loadAnnouncementsList = ({ page }: LoadAnnouncementsListBody) => {
	checkAdmin();
	return client.get(`/announcements/list/${page}`);
};

export const inspectCertification = ({ state, goalId }: InspectCertificationBody) => {
	checkAdmin();
	return client.put(`/admin/goals/cert/${state}/${goalId}`);
};
