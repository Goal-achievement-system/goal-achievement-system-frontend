import React, { useReducer, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/slices';
import { useNavigate } from 'react-router-dom';
import authSlice from 'store/slices/authSlice';
import Path from 'utils/path';
import SignUpView from './SignUpView';

export interface IFormState {
	email: string;
	password: string;
	passwordCheck: string;
	nickName: string;
	sex: string;
	age: string;
}

const initialState: IFormState = {
	email: '',
	password: '',
	passwordCheck: '',
	nickName: '',
	sex: '남자',
	age: '20대',
};

export interface Action {
	type: 'email' | 'password' | 'passwordCheck' | 'nickName' | 'sex' | 'age';
	payload: string;
}
function formReducer(state: IFormState, action: Action) {
	return { ...state, [action.type]: action.payload };
}

function SignUpContainer() {
	const [formState, formDispatch] = useReducer(formReducer, initialState);
	const [error, setError] = useState<string>('');
	const auth = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		const { email, password, passwordCheck, nickName, age, sex } = formState;

		if (!email.trim() || !password.trim() || !passwordCheck.trim() || !nickName.trim()) return;
		// eslint-disable-next-line no-nested-ternary
		const sexTrans = sex === '없음' ? 'UNKNOWN' : sex === '남자' ? 'MALE' : 'FEMALE';

		dispatch(authSlice.actions.signUp({ email, password, nickName, sex: sexTrans, age: +`${age?.split('대')[0]}` }));
	};
	useEffect(() => {
		if (auth.isLoggedIn) navigate(Path.home);
		else if (auth.hasError) setError('이미 존재하는 이메일 입니다');
	}, [auth, navigate]);

	return <SignUpView error={error} formDispatch={formDispatch} onSubmit={onSubmit} formState={formState} />;
}

export default SignUpContainer;
