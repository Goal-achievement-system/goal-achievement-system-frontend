import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import useGetActionState from 'hooks/useGetActionState';
import memberSlice from 'store/slices/memberSlice';
import { deleteComma } from 'utils/common';
import { ChargeFormReducerAction, ChargeFormState } from './MoneyType';
import MoneyChargeView from './MoneyChargeView.tsx';

const initialState: ChargeFormState = {
	chargeMoney: '',
	chargeType: 1,
	agree: false,
};
function formReducer(state: ChargeFormState, action: ChargeFormReducerAction) {
	if (action.type === 'init') {
		return initialState;
	}
	return { ...state, [action.type]: action.payload };
}

function MoneyChargeContainer() {
	const dispatch = useDispatch();
	const memberInfo = useSelector((state: RootState) => state.member.memberinfo);
	const [formState, formDispatch] = useReducer(formReducer, initialState);
	const [chargeMoneyLoading, changeMoneyResult, initChangeMoneyResult] = useGetActionState(
		memberSlice.actions.chargeMoney.type
	);

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (!memberInfo || chargeMoneyLoading) return;
		if (!formState.agree || deleteComma(formState.chargeMoney) === 0) return;

		const { chargeMoney } = formState;

		dispatch(
			memberSlice.actions.chargeMoney({
				email: memberInfo.email,
				password: 'cksdud12!', // 비밀번호 입력 UI 나올 때까지 임시 입력
				money: Number(chargeMoney) * 10000,
			})
		);
	};

	useEffect(() => {
		if (changeMoneyResult?.isSuccess) {
			alert('목표머니를 충전했습니다.');
			formDispatch({ type: 'init' });
			initChangeMoneyResult();
		} else if (changeMoneyResult?.isSuccess === false) {
			alert('목표머니를 충전에 실패했습니다.');
			initChangeMoneyResult();
		}
	}, [initChangeMoneyResult, changeMoneyResult]);

	return (
		<MoneyChargeView onSubmit={onSubmit} formState={formState} formDispatch={formDispatch} memberInfo={memberInfo} />
	);
}

export default MoneyChargeContainer;
