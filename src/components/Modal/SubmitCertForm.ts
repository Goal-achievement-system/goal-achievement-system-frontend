export interface CertFormState {
	goalId: number;
	content: string;
	image: string;
	requireSuccessCount: number;
	successCount: number;
	failCount: number;
}

export interface CertFormReducerAction {
	type: 'init' | 'goalId' | 'content' | 'image';
	payload?: string | number | null | ArrayBuffer;
}

export const initialState: CertFormState = {
	goalId: 0,
	content: '',
	image: '',
	requireSuccessCount: 10,
	successCount: 0,
	failCount: 0,
};

export function certFormReducer(state: CertFormState, action: CertFormReducerAction) {
	if (action.type === 'init') return initialState;

	return { ...state, [action.type]: action.payload };
}
