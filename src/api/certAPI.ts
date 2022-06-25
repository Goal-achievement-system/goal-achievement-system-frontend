import { Certification } from 'types/certification';
import { Goal } from 'types/goal';
import client from './client';

export interface SubmitCertGoalBody {
	goalId: number;
	content: string;
	image: string;
	requireSuccessCount: number;
	successCount: number;
	failCount: number;
}

export interface CertFormState {
	goalId: number;
	content: string;
	image: string;
	requireSuccessCount: number;
	successCount: number;
	failCount: number;
}

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

export interface GetCertImageParam {
	certId: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CertResponse extends Certification {}

export const submitCertGoal = (formData: SubmitCertGoalBody) => {
	return client.post(`goals/cert/${formData.goalId}`, formData);
};

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

export const getCertImage = ({ certId }: GetCertImageParam) => {
	return client.get(`/image/${certId}`, { responseType: 'arraybuffer' });
};
