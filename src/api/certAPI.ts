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

export const submitCertGoal = (formData: SubmitCertGoalBody) => {
	return client.post(`goals/cert/${formData.goalId}`, formData);
};
