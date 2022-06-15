import SubmitButton, { BtnStates } from 'components/Button/SubmitButton';
import TextInput from 'components/Input/TextInput';
import Main from 'components/Main';
import React, { useState } from 'react';
import { Member } from 'types/member';
import { addComma, deleteComma } from 'utils/common';
import { TransferFormReducerAction, TransferFormState } from './MoneyType';

interface Props {
	onSubmit: (event: React.SyntheticEvent) => void;
	formState: TransferFormState;
	formDispatch: React.Dispatch<TransferFormReducerAction>;
	memberInfo: Member | null;
}

function MoneyTransferView({ formState, formDispatch, memberInfo, onSubmit }: Props) {
	const changeInputTextValue = (text: string): string => {
		if (!memberInfo) return '0';
		const regex = /[^0-9]/g;
		const number = Number(text.replace(regex, ''));
		if (number > memberInfo.money) {
			return memberInfo.money.toString();
		}
		return number.toString();
	};
	const getBtnState = (): BtnStates => {
		const { agree, accountNumber, bank, transferMoney } = formState;
		if (!(agree && deleteComma(transferMoney) > 0 && bank.length > 0 && accountNumber.length > 0)) return 'inactive';

		return 'active';
	};
	return (
		<Main title="목표머니 이체">
			<form className="pc:rounded-[16px] pc:p-[72px] pc:bg-[#FAFAFA]" onSubmit={onSubmit}>
				<div className="mb-[16px] pc:mb-[30px] text-[14px] pc:text-[22px] leading-[16.8px] pc:leading-[20px] font-[500] pc:font-[700]">
					이체 수단
				</div>
				<div className="mb-[20px] pc:mb-[50px]">
					<TextInput
						placeholder="은행명"
						onChange={(curVar: string) => formDispatch({ type: 'bank', payload: curVar })}
						value={formState?.bank}
					/>
					<TextInput
						placeholder="계좌번호 입력"
						onChange={(curVar: string) => formDispatch({ type: 'accountNumber', payload: curVar })}
						value={formState?.accountNumber}
					/>
				</div>
				<div className="mb-[16px] pc:mb-[30px] text-[14px] pc:text-[22px] leading-[16.8px] pc:leading-[20px] font-[500] pc:font-[700]">
					이체 금액
				</div>
				<div className="mb-[20px] pc:mb-[30px]">
					<TextInput
						placeholder="12,500원 (단위 원)"
						onChange={(curVar: string) =>
							formDispatch({ type: 'transferMoney', payload: changeInputTextValue(curVar) })
						}
						value={formState?.transferMoney}
					/>
				</div>
				<div className="mb-[50px]">
					<div className="flex justify-between text-[12px] pc:text-[18px] text-primaryBlack-300 font-[500] leading-[14.4px] pc:leading-[22px] mb-[8px] pc:mb-[10px]">
						<div>현재 잔액</div>
						<div>{addComma(String(memberInfo?.money))}원</div>
					</div>
					<div className="flex justify-between text-[12px] pc:text-[18px] text-primaryBlack-300 font-[500] leading-[14.4px] pc:leading-[22px] mb-[8px] pc:mb-[10px]">
						<div>이체 후 잔액</div>
						<div>
							{addComma(
								String(
									memberInfo?.money
										? addComma(memberInfo.money - deleteComma(formState.transferMoney))
										: 0 + deleteComma(addComma(deleteComma(formState.transferMoney)))
								)
							)}
							원
						</div>
					</div>
					<div className="flex justify-between text-[12px] pc:text-[18px] font-[500] leading-[22px] pt-[18px] border-t-[1px] border-primaryGray-300">
						<div>이체 금액</div>
						<div>{addComma(deleteComma(formState.transferMoney))}원</div>
					</div>
				</div>
				<div className="mb-[16px] pc:mb-[30px] text-[14px] pc:text-[22px] leading-[16.8px] pc:leading-[20px] font-[500] pc:font-[700]">
					충전 수단
				</div>
				<button
					type="button"
					onClick={() => formDispatch({ type: 'agree', payload: !formState.agree })}
					className="flex mb-[20px] pc:mb-[50px] items-center cursor-pointer"
				>
					<input
						type="checkbox"
						className="w-[24px] pc:w-[30px] h-[24px] pc:h-[30px] mr-[18px] cursor-pointer"
						checked={formState.agree}
						readOnly
					/>
					<div>(필수) 개인정보 제3자 제공에 동의합니다.</div>
				</button>
				<SubmitButton label={`${addComma(deleteComma(formState.transferMoney))}원 이체하기`} btnState={getBtnState()} />
			</form>
		</Main>
	);
}

export default MoneyTransferView;
