import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import { Action, IFormState } from './MoneyChargeType';
import MoneyChargeView from './MoneyChargeView.tsx';

const initialState: IFormState = {
	chargeMoney: '',
	chargeType: 1,
	agree: false,
};
function formReducer(state: IFormState, action: Action) {
	return { ...state, [action.type]: action.payload };
}

function MoneyChargeContainer() {
	const dispatch = useDispatch();
	const memberInfo = useSelector((state: RootState) => state.member.memberinfo);
	const [formState, formDispatch] = useReducer(formReducer, initialState);

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		// const { email, password } = formState;
		// if (!email.trim() || !password.trim()) return;

		// dispatch(authSlice.actions.login({ email, password }));
	};

	return (
		<MoneyChargeView onSubmit={onSubmit} formState={formState} formDispatch={formDispatch} memberInfo={memberInfo} />
	);
}

export default MoneyChargeContainer;
