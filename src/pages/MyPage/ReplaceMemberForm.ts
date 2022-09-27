// import { Sex } from 'types/member';

import { Member, SexKr } from 'types/member';
import { sexTransEngToKr } from 'utils/common';

export interface IReplaceMemeberForm {
	email: string;
	password: string;
	// passwordCheck: string;
	nickName: string;
	sex: SexKr | string;
	age: string;
	money: number;
}

export const replaceMemberInitialState: IReplaceMemeberForm = {
	email: '',
	password: '',
	// passwordCheck: '',
	nickName: '',
	sex: '',
	age: '',
	money: 0,
};

export interface ReplaceMemberReducerAction {
	// type: 'email' | 'password' | 'changePassword' | 'changePasswordCheck' | 'nickName' | 'sex' | 'age' | 'init';
	type: 'email' | 'password' | 'nickName' | 'sex' | 'age' | 'money' | 'init';
	payload?: string | number | Member;
}

export function replaceMemberformReducer(
	state: IReplaceMemeberForm,
	action: ReplaceMemberReducerAction
): IReplaceMemeberForm {
	if (action.type === 'init') {
		const { sex, age, ...memberInfo } = action.payload as Member;
		const sexTrans = sexTransEngToKr(sex);
		const ageTrans = `${age}대`;
		return { ...replaceMemberInitialState, ...memberInfo, sex: sexTrans, age: ageTrans };
	}
	return { ...state, [action.type]: action.payload };
}
