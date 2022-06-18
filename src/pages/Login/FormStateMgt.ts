export interface IForm {
	email: string;
	password: string;
}
export interface Action {
	type: 'email' | 'password' | 'init';
	payload?: string;
}
export const initialState: IForm = {
	email: '',
	password: '',
};
export function formReducer(state: IForm, action: Action) {
	if (action.type === 'init') {
		return initialState;
	}
	return { ...state, [action.type]: action.payload };
}
