import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import useGetActionState from 'hooks/useGetActionState';
import goalSlice from 'store/slices/goalSlice';
import OptionButton from 'components/Button/OptionButton';
import SubmitButton from 'components/Button/SubmitButton';
import TextInput from 'components/Input/TextInput';
import { IForm, Action, initialState } from './FormStateMgt';
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
	const [formState, formDispatch] = useReducer(formReducer, initialState);
	const [loading, result, initResult] = useGetActionState(goalSlice.actions.registerGoal.type);

	const onSubmit = (event: React.SyntheticEvent) => {
		// 머니 범위 설정
		// 날짜 입력 숫자로만 했는지 확인
		event.preventDefault();

		if (!memberInfo || loading) return;

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

			!category?.trim()
		);
		if (reward === null) return;
		if (
			!goalName.trim() ||
			!content.trim() ||
			+money < 0 ||
			+money > memberInfo.money ||
			!`${money}`.trim() ||
			!limitDate?.trim() ||
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

	const className = {
		// size: 'pc:max-w-[890px] pc:max-h-[90vh] max-w-[320px] max-h-[470px]',
		size: 'pc:w-[890px] max-w-[90vw] pc:max-h-[80vh] w-[320px] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};
	return (
		<div
			className={`${className.size} ${className.translate} text-left pc:p-[22px] p-[26px] rounded-2xl relative  bg-modalGray overflow-auto`}
		>
			<GoalRegModalView
				onSubmit={onSubmit}
				formState={formState}
				formDispatch={formDispatch}
				remainingMoney={memberInfo?.money as number}
			/>
		</div>
	);
}
export default GoalRegModalContainer;
