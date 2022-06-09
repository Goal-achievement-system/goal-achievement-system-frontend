// Parma으로 넘기기
export interface GoalFormState {
	goalName: string; // 'testGoalName'
	content: string; // 'testGoalContent';
	money: number | null; // 10000;
	limitDate: string | null; // '2022-03-27T10:45:04.847+00:00';

	// 추후 타입 명시
	reward: 'high' | 'low' | null; // 'high';  //high ?low?

	// 추후 타입 명시
	category: string; // '다이어트';
}
export interface GoalFormAction {
	type: 'goalName' | 'content' | 'money' | 'limitDate' | 'reward' | 'category' | 'init';
	payload?: string | number;
}

export const initialState: GoalFormState = {
	goalName: '',
	content: '',
	money: null,
	limitDate: null,
	reward: null,
	// 디자인 완성되면  고치기
	category: '다이어트',
};
