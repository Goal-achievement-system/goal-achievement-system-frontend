import useGetActionState from 'hooks/useGetActionState';
import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';
import { deleteComma } from 'utils/common';
import MoneyTransferView from './MoneyTransferView';
import { TransferFormReducerAction, TransferFormState } from './MoneyType';

const initialState: TransferFormState = {
	transferMoney: '',
	bank: '',
	accountNumber: '',
	agree: false,
	password: '',
};
function formReducer(state: TransferFormState, action: TransferFormReducerAction) {
	if (action.type === 'init') {
		return initialState;
	}
	return { ...state, [action.type]: action.payload };
}

function MoneyTransferContainer() {
	const dispatch = useDispatch();
	const memberInfo = useSelector((state: RootState) => state.member.memberinfo);
	const [formState, formDispatch] = useReducer(formReducer, initialState);
	const [transferMoneyLoading, transferMoneyResult, initTransferMoneyResult] = useGetActionState(
		memberSlice.actions.transferMoney.type
	);

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (!memberInfo || transferMoneyLoading) return;
		if (
			!formState.agree ||
			deleteComma(formState.transferMoney) === 0 ||
			formState.bank.length === 0 ||
			formState.accountNumber.length === 0
		)
			return;

		const transferMoney = Number(formState.transferMoney);

		if (transferMoney > memberInfo.money) {
			alert('이체 금액이 잘못되었습니다.');
			return;
		}

		dispatch(
			memberSlice.actions.transferMoney({
				email: memberInfo.email,
				password: formState.password, // 비밀번호 입력 UI 나올 때까지 임시 입력
				money: Number(transferMoney),
			})
		);
	};

	useEffect(() => {
		if (transferMoneyResult?.isSuccess) {
			alert('목표머니를 이체했습니다.');
			formDispatch({ type: 'init' });
			initTransferMoneyResult();
		} else if (transferMoneyResult?.isSuccess === false) {
			alert('목표머니를 이체를 실패했습니다.');
			initTransferMoneyResult();
		}
	}, [initTransferMoneyResult, transferMoneyResult]);

	return (
		<MoneyTransferView formState={formState} formDispatch={formDispatch} memberInfo={memberInfo} onSubmit={onSubmit} />
	);
}

export default MoneyTransferContainer;
