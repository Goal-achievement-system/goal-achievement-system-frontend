import React, { useEffect, useState } from 'react';
import * as authAPI from 'api/authAPI';
import memberSlice from 'store/slices/memberSlice';
import isLoggedIn from 'utils/isLoggedIn';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/slices';
import Path from 'utils/path';
import { Link, useNavigate } from 'react-router-dom';
import LoginView from './LoginView';

interface IFormInputs {
	email: string;
	password: string;
}
interface IAuth {
	data: {
		Authorization: string;
	};
}

function LoginContainer() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const member = useSelector((state: RootState) => state.member);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		console.log(email, password);
		if (!email.trim() || !password.trim()) return;
		authAPI
			.login({ email, password })
			.then((res: IAuth) => {
				const { Authorization: token } = res.data;
				localStorage.setItem('goalKeeperToken', token);
				navigate(Path.home);
			})
			.catch((e) => {
				console.log('이메일 또는 패스워드가 잘못 입력되었습니다');
			});

		// dispatch(memberSlice.actions.login({ email, password }));
		// console.log(isLoggedIn());
	};

	return (
		<LoginView email={email} password={password} setEmail={setEmail} setPassword={setPassword} onSubmit={onSubmit} />
	);
}

export default LoginContainer;
