import React, { useEffect, useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/slices';
import Path from 'utils/path';
import { useNavigate } from 'react-router-dom';
import authSlice from 'store/slices/authSlice';
import { Member } from 'types/member';
import SignUpView from './SignUpView';

export interface IFormState extends Member {
	isFormValid: false;
}
const initialState: IFormState = {
	email: '',
	password: '',
	nickName: '',
	sex: 'MALE',
	age: 20,
	money: 0,
};
const [formState, dispatch] = useReducer(formReducer, initialState);
function formReducer(state, action) {
	switch (action.type) {
	}
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

	return <SignUpView error={error} onSubmit={onSubmit} formState={formState} />;
}

export default SignUpContainer;
