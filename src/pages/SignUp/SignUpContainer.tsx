import React, { useReducer, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useGetActionState from 'hooks/useGetActionState';
import authSlice from 'store/slices/authSlice';
import Path from 'utils/path';
import SignUpView from './SignUpView';
import { IForm, initialState, Action, formReducer } from './FormStateMgt';

function SignUpContainer() {
	const [formState, formDispatch] = useReducer(formReducer, initialState);
	const [loading, result, initResult] = useGetActionState(authSlice.actions.signUp.type);
	const [error, setError] = useState<string>('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (loading) return;
		const { email, password, passwordCheck, nickName, age, sex } = formState;

		if (!email.trim() || !password.trim() || !passwordCheck.trim() || !nickName.trim()) return;
		// eslint-disable-next-line no-nested-ternary
		const sexTrans = sex === '없음' ? 'UNKNOWN' : sex === '남자' ? 'MALE' : 'FEMALE';

		dispatch(authSlice.actions.signUp({ email, password, nickName, sex: sexTrans, age: +`${age?.split('대')[0]}` }));
	};
	useEffect(() => {
		if (result?.isSuccess) {
			formDispatch({ type: 'init' });
			alert('회원가입 성공!');

			navigate(Path.login);
		} else if (result?.errorMsg) setError(result?.errorMsg);
		initResult();
	}, [result, initResult, navigate]);

	return <SignUpView error={error} formDispatch={formDispatch} onSubmit={onSubmit} formState={formState} />;
}

export default SignUpContainer;
