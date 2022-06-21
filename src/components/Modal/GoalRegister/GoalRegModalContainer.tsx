/* eslint-disable no-restricted-globals */
import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import useGetActionState from 'hooks/useGetActionState';
import goalSlice from 'store/slices/goalSlice';
import { IForm, Action, initialState, isFormValid } from './FormStateMgt';
import GoalRegModalView from './GoalRegModalView';

function formReducer(state: IForm, action: Action) {
	if (action.type === 'init') {
		return initialState;
	}
	return { ...state, [action.type]: action.payload };
}
function GoalRegModalContainer() {
	const dispatch = useDispatch();
	const memberInfo = useSelector((state: RootState) => state.member.memberinfo);
	const categories = useSelector((state: RootState) => state.goal.categories);
	const [formState, formDispatch] = useReducer(formReducer, initialState);
	const [goalRegLoading, goalRegResult, goalRegInitResult] = useGetActionState(goalSlice.actions.registerGoal.type);
	const [categoriesLoading, categoriesResult, categoriesInitResult] = useGetActionState(
		goalSlice.actions.loadCategories.type
	);

	const onSubmit = (event: React.SyntheticEvent) => {
		// 머니 범위 설정
		// 날짜 입력 숫자로만 했는지 확인
		event.preventDefault();

		if (!memberInfo || goalRegLoading) return;

		const { goalName, content, money, limitDate, reward, category } = formState;

		if (!isFormValid(formState, categories, memberInfo.money)) return;

		console.log('pass');

		const date = new Date(limitDate);

		dispatch(
			goalSlice.actions.registerGoal({
				memberEmail: memberInfo.email,
				goalName,
				content,
				money: +money,
				limitDate: date,
				reward: reward as 'high' | 'low',
				category,
			})
		);
	};
	useEffect(() => {
		if (categoriesLoading) return;
		dispatch(goalSlice.actions.loadCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	useEffect(() => {
		if (categoriesResult?.isSuccess) {
			// success
		} else {
			// fail
		}
		categoriesInitResult();
	}, [categoriesResult, categoriesInitResult]);

	useEffect(() => {
		if (goalRegResult?.isSuccess) {
			alert('목표가 등록되었습니다.');
			formDispatch({ type: 'init' });
		}
		goalRegInitResult();
	}, [goalRegResult, goalRegInitResult]);

	const className = {
		// size: 'pc:max-w-[890px] pc:max-h-[90vh] max-w-[320px] max-h-[470px]',
		size: 'pc:w-[750px] max-w-[90vw] pc:h-[750px] pc:max-h-[80vh] w-[320px] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};
	return (
		<div
			className={`scrollbar ${className.size} ${className.translate} text-left pc:p-[22px] p-[26px] rounded-2xl relative  bg-modalGray overflow-auto`}
		>
			<GoalRegModalView
				onSubmit={onSubmit}
				formState={formState}
				formDispatch={formDispatch}
				remainingMoney={memberInfo?.money as number}
				categories={categories}
			/>
		</div>
	);
}
export default GoalRegModalContainer;
