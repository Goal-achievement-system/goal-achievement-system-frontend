export interface IForm {
	email: string;
	password: string;
	passwordCheck: string;
	nickName: string;
	sex: string;
	age: string;
}

export const initialState: IForm = {
	email: '',
	password: '',
	passwordCheck: '',
	nickName: '',
	sex: '남자',
	age: '20대',
};

export interface Action {
	type: 'email' | 'password' | 'passwordCheck' | 'nickName' | 'sex' | 'age' | 'init';
	payload?: string;
}
export function formReducer(state: IForm, action: Action) {
	if (action.type === 'init') {
		return initialState;
	}
	return { ...state, [action.type]: action.payload };
}
