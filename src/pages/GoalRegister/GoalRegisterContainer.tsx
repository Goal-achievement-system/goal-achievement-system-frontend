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
	console.log(memberInfo?.money);
	const onSubmit = (event: React.SyntheticEvent) => {
		// 머니 범위 설정
		// 날짜 입력 숫자로만 했는지 확인
		event.preventDefault();
		console.log('enter', loading, memberInfo);
		if (!memberInfo || loading) return;
		console.log('hi', loading, memberInfo);
		const { goalName, content, money, limitDate, reward, category } = formState;
		// 심플하게 만드는 법 생각해보기
		console.log('submit', formState, limitDate, !limitDate.trim());
		console.log(
			!goalName.trim(),
			!content.trim(),
			+money < 0,
			!`${+money}`.trim(),
			+money > memberInfo?.money,
			!limitDate.trim(),
			reward === 'init',
			!category?.trim()
		);
		if (
			!goalName.trim() ||
			!content.trim() ||
			+money < 0 ||
			+money > memberInfo.money ||
			!`${money}`.trim() ||
			!limitDate?.trim() ||
			reward === 'init' ||
			!category?.trim()
		)
			return;
		console.log('pass');
		const y = limitDate.split('-')[0];
		const m = limitDate.split('-')[1];
		const d = limitDate.split('-')[2];

		const date = new Date(+y, +m, +d);
		console.log(date, formState);
		dispatch(
			goalSlice.actions.registerGoal({
				memberEmail: memberInfo.email,
				goalName,
				content,
				money: 0,
				limitDate: date,
				reward,
				category: '다이어트',
			})
		);
	};

	useEffect(() => {
		if (result?.isSuccess) {
			alert('목표가 등록되었습니다.');
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
