export type VerificationResultEng = 'all' | 'success' | 'fail' | 'ongoing' | 'hold' | 'oncertification';
export type VerificationResultKr = '전체' | '진행 중' | '인증 중' | '성공' | '실패' | '보류';

export interface Goal {
	goalId: number;
	memberEmail: string;
	category: string;
	goalName: string;
	content: string;
	limitDate: Date;
	money: number;
	reward: string;
	verificationResult: VerificationResultEng;
}

export interface GoalsResponse {
	goals: Goal[];
	maxPage: number;
}
