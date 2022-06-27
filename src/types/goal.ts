export type VerificationResult = 'all' | 'success' | 'fail' | 'ongoing' | 'hold' | 'oncertification';

export interface Goal {
	goalId: number;
	memberEmail: string;
	category: string;
	goalName: string;
	content: string;
	limitDate: Date;
	money: number;
	reward: string;
	verificationResult: VerificationResult;
}

export interface GoalsResponse {
	goals: Goal[];
	maxPage: number;
}
