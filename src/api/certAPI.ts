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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CertResponse extends Certification {}

export const getCert = ({ goalId }: LoadCertParam) => {
	return client.get(`/goals/cert/${goalId}`);
};

export const getCertList = ({ category, page }: LoadCertListParam) => {
	return client.get(`goals/${category}/list/oncertification/${page}`);
};
