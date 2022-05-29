import React, { useEffect, useState } from 'react';
import * as authAPI from 'api/authAPI';
import isLoggedIn from 'utils/isLoggedIn';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/slices';
import Path from 'utils/path';
import { Link, useNavigate } from 'react-router-dom';
import authSlice from 'store/slices/authSlice';
import SignUpView from './SignUpView';

interface IFormInputs {
	email: string;
	password: string;
}

function SignUpContainer() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	const auth = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();

		if (!email.trim() || !password.trim()) return;

		dispatch(authSlice.actions.login({ email, password }));
	};
	useEffect(() => {
		if (auth.isLoggedIn) navigate(Path.home);
		else if (auth.hasError) setError('이메일 또는 패스워드가 잘못 입력되었습니다');
	}, [auth, navigate]);

	return (
		<SignUpView
			error={error}
			email={email}
			password={password}
			setEmail={setEmail}
			setPassword={setPassword}
			onSubmit={onSubmit}
		/>
	);
}

export default SignUpContainer;
