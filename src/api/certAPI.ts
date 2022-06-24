import { Certification } from 'types/certification';
import { Goal } from 'types/goal';
import client from './client';

export interface LoadCertParam {
	goalId: number;
}
export interface LoadCertListParam {
	category: string;
	page: number;
}
export interface LoadCertListResponse {
	goals: Goal[];
	maxPage: number;
}

export interface PushCertResultParam {
	goalId: number;
	result: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CertResponse extends Certification {}

export const getCert = ({ goalId }: LoadCertParam) => {
	return client.get(`/goals/cert/${goalId}`);
};

export const getCertList = ({ category, page }: LoadCertListParam) => {
	return client.get(`goals/${category}/list/oncertification/${page}`);
};

// eslint-disable-next-line consistent-return
export const putCertResult = async ({ goalId, result }: PushCertResultParam) => {
	if (result) return client.put(`/goals/cert/success/${goalId}`);
	return client.put(`/goals/cert/fail/${goalId}`);
};
