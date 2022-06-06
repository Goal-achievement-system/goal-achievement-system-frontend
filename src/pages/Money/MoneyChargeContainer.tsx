import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Action, IFormState } from './MoneyChargeType';
import MoneyChargeView from './MoneyChargeView.tsx';

const initialState: IFormState = {
	chargeMoney: '0',
	chargeType: 1,
	agree: false,
};
function formReducer(state: IFormState, action: Action) {
	return { ...state, [action.type]: action.payload };
}

function MoneyChargeContainer() {
	const dispatch = useDispatch();
	const [formState, formDispatch] = useReducer(formReducer, initialState);

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		console.log('서브밋');
		// const { email, password } = formState;
		// if (!email.trim() || !password.trim()) return;

		// dispatch(authSlice.actions.login({ email, password }));
	};

	return <MoneyChargeView onSubmit={onSubmit} formState={formState} formDispatch={formDispatch} />;
}

export default MoneyChargeContainer;
