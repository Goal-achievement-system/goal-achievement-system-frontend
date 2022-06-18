import React, { useEffect, useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import Path from 'utils/path';
import { useNavigate } from 'react-router-dom';
import authSlice from 'store/slices/authSlice';
import useGetActionState from 'hooks/useGetActionState';
import LoginView from './LoginView';
import { formReducer, initialState } from './FormStateMgt';

function LoginContainer() {
	const [formState, formDispatch] = useReducer(formReducer, initialState);
	const [loading, result, initResult] = useGetActionState(authSlice.actions.login.type);
	const [error, setError] = useState<string>('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (loading) return;
		const { email, password } = formState;
		if (!email.trim() || !password.trim()) return;

		dispatch(authSlice.actions.login({ email, password }));
	};
	useEffect(() => {
		if (result?.isSuccess) {
			formDispatch({ type: 'init' });
			navigate(Path.home);
		} else if (result?.errorMsg) setError(result?.errorMsg);
		initResult();
	}, [result, initResult, navigate]);

	return <LoginView error={error} formDispatch={formDispatch} formState={formState} onSubmit={onSubmit} />;
}

export default LoginContainer;
