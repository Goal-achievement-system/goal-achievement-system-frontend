type VerificationResult = 'success' | 'fail' | 'ongoing' | 'hold';

// all, ongoing, success, fail, hold, oncertification
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
