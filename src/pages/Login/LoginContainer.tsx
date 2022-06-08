import React, { useEffect, useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/slices';
import Path from 'utils/path';
import { useNavigate } from 'react-router-dom';
import authSlice from 'store/slices/authSlice';
import BaseTemplate from 'components/BaseTemplate';
import LoginView from './LoginView';

export interface IFormState {
	email: string;
	password: string;
}
export interface Action {
	type: 'email' | 'password';
	payload: string;
}
const initialState: IFormState = {
	email: '',
	password: '',
};
function formReducer(state: IFormState, action: Action) {
	return { ...state, [action.type]: action.payload };
}
function LoginContainer() {
	const [formState, formDispatch] = useReducer(formReducer, initialState);
	const [error, setError] = useState<string>('');
	const auth = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		const { email, password } = formState;
		if (!email.trim() || !password.trim()) return;

		dispatch(authSlice.actions.login({ email, password }));
	};
	useEffect(() => {
		if (auth.isLoggedIn) navigate(Path.home);
		else if (auth.hasError) setError('이메일 또는 패스워드가 잘못 입력되었습니다');
	}, [auth, navigate]);

	return <LoginView error={error} formDispatch={formDispatch} formState={formState} onSubmit={onSubmit} />;
}

export default LoginContainer;
