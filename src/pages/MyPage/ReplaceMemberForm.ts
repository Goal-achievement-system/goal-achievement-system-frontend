export interface IReplaceMemeberForm {
	// email: string;
	password: string;
	changePassword: string;
	changePasswordCheck: string;
	nickName: string;
	sex: string;
	age: string;
}

export const replaceMemberInitialState: IReplaceMemeberForm = {
	password: '',
	changePassword: '',
	changePasswordCheck: '',
	nickName: '',
	sex: '남자',
	age: '20대',
};

export interface ReplaceMemberReducerAction {
	type: 'password' | 'changePassword' | 'changePasswordCheck' | 'nickName' | 'sex' | 'age' | 'init';
	payload?: string;
}

export function replaceMemberformReducer(state: IReplaceMemeberForm, action: ReplaceMemberReducerAction) {
	if (action.type === 'init') return replaceMemberInitialState;
	return { ...state, [action.type]: action.payload };
}
