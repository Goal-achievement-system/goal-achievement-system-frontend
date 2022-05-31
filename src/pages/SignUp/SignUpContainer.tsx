import React, { useEffect, useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/slices';
import Path from 'utils/path';
import { useNavigate } from 'react-router-dom';
import authSlice from 'store/slices/authSlice';
import { Member } from 'types/member';
import SignUpView from './SignUpView';

interface IFormState {
	email: string;
	password: string;
	passwordCheck: string;
	nickName: string;
	sex: string;
	age: number;
	error: string;
}

const initialState: IFormState = {
	email: '',
	password: '',
	passwordCheck: '',
	nickName: '',
	sex: 'MALE',
	age: 20,
	error: '',
};
interface Action {
	type: { name: string; value: string };
}
const [formState, formDispatch] = useReducer(formReducer, initialState);
function formReducer(state: IFormState, action: Action) {
	const { name, value } = action.type;
	return { ...state, [name]: value };
}
function SignUpContainer() {
	const auth = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		const { email, password, passwordCheck, nickName } = formState;
		if (!email.trim() || !password.trim() || !passwordCheck.trim() || !nickName.trim()) return;

		dispatch(authSlice.actions.signUp({ email, password }));
	};

	return <SignUpView error={error} onSubmit={onSubmit} formState={formState} />;
}

export default SignUpContainer;
