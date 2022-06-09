import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import useGetActionState from 'hooks/useGetActionState';
import goalSlice from 'store/slices/goalSlice';
import { GoalFormState, GoalFormAction, initialState } from './RegisterType';
import GoalRegisterView from './GoalRegisterView';

function formReducer(state: GoalFormState, action: GoalFormAction) {
	if (action.type === 'init') {
		return initialState;
	}
	return { ...state, [action.type]: action.payload };
}

function GoalRegisterContainer() {
	const dispatch = useDispatch();
	const memberInfo = useSelector((state: RootState) => state.member.memberinfo);
	const [formState, formDispatch] = useReducer(formReducer, initialState);
	const [loading, result, initResult] = useGetActionState(goalSlice.actions.registerGoal.type);

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (!memberInfo || loading) return;

		const { goalName, content, money, limitDate, reward, category } = formState;
		// 심플하게 만드는 법 생각해보기
		if (
			!goalName.trim() ||
			!content.trim() ||
			(money || -1) < 0 ||
			!`${money}`.trim() ||
			!limitDate?.trim() ||
			!reward?.trim() ||
			!category?.trim()
		)
			return;
		dispatch(goalSlice.actions.registerGoal({ ...formState }));
	};

	useEffect(() => {
		if (result?.isSuccess) {
			formDispatch({ type: 'init' });
		}
		initResult();
	}, [result, initResult]);

	return (
		<GoalRegisterView
			onSubmit={onSubmit}
			formState={formState}
			formDispatch={formDispatch}
			remainingMoney={memberInfo?.money as number}
		/>
	);
}

export default GoalRegisterContainer;
