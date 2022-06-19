export interface IForm {
	goalName: string; // 'testGoalName'
	content: string; // 'testGoalContent';
	money: string; // 10000;
	limitDate: string; // '2022-03-27T10:45:04.847+00:00';
	reward: 'high' | 'low' | null; // 'high';  //high ?low?
	category: string; // '다이어트';
}
export interface Action {
	type: 'goalName' | 'content' | 'money' | 'limitDate' | 'reward' | 'category' | 'init';
	payload?: string | number;
}

export const initialState: IForm = {
	goalName: '',
	content: '',
	money: '',
	limitDate: '',
	reward: null,
	category: '',
};
