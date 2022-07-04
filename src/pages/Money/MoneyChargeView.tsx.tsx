import OptionButton from 'components/Button/OptionButton';
import SubmitButton, { BtnStates } from 'components/Button/SubmitButton';
import TextInput from 'components/Input/TextInput';
import Main from 'components/Main';
import React, { useState } from 'react';
import { Member } from 'types/member';
import { addComma, deleteComma } from 'utils/common';
import { applyMoneyUnit } from 'utils/applyMoneyUnit';
import { ChargeFormState, ChargeFormReducerAction } from './MoneyType';

interface Props {
	onSubmit: (event: React.SyntheticEvent) => void;
	formState: ChargeFormState;
	formDispatch: React.Dispatch<ChargeFormReducerAction>;
	memberInfo: Member | null;
	chargeMoneyLoading: boolean;
}

function MoneyChargeView({ onSubmit, formState, formDispatch, memberInfo, chargeMoneyLoading }: Props) {
	const getBtnState = (): BtnStates => {
		const { chargeMoney, agree } = formState;
		if (!(agree && deleteComma(chargeMoney) > 0)) return 'inactive';

		return 'active';
	};
	return (
		<Main title="목표머니 충전">
			<form className="pc:rounded-[16px] pc:p-[72px] pc:bg-[#FAFAFA]" onSubmit={onSubmit}>
				<div className="mb-[16px] pc:mb-[30px] text-[14px] pc:text-[22px] leading-[16.8px] pc:leading-[20px] font-[500] pc:font-[700]">
					충전 금액
				</div>
				<div className="mb-[20px] pc:mb-[30px]">
					<TextInput
						placeholder="1만원 (단위 만원)"
						onChange={(curVar: string) => formDispatch({ type: 'chargeMoney', payload: applyMoneyUnit(curVar) })}
						value={formState?.chargeMoney}
					/>
				</div>
				<div className="mb-[50px]">
					<div className="flex justify-between text-[12px] pc:text-[18px] text-primaryBlack-300 font-[500] leading-[14.4px] pc:leading-[22px] mb-[8px] pc:mb-[10px]">
						<div>현재 잔액</div>
						<div>{addComma(String(memberInfo?.money))}원</div>
					</div>
					<div className="flex justify-between text-[12px] pc:text-[18px] text-primaryBlack-300 font-[500] leading-[14.4px] pc:leading-[22px] mb-[8px] pc:mb-[10px]">
						<div>충전 후 잔액</div>
						<div>
							{memberInfo?.money
								? addComma(memberInfo.money + deleteComma(formState.chargeMoney) * 10000)
								: addComma(deleteComma(formState.chargeMoney) * 10000)}
							원
						</div>
					</div>
					<div className="flex justify-between text-[12px] pc:text-[18px] font-[500] leading-[22px] pt-[18px] border-t-[1px] border-primaryGray-300">
						<div>충전 금액</div>
						<div>{addComma(deleteComma(formState.chargeMoney) * 10000)}원</div>
					</div>
				</div>
				<div className="mb-[16px] pc:mb-[30px] text-[14px] pc:text-[22px] leading-[16.8px] pc:leading-[20px] font-[500] pc:font-[700]">
					충전 수단
				</div>
				<div className="flex gap-[8px] pc:gap-[24px] flex-wrap flex-col mb-[50px]">
					<div className="flex gap-[8px] pc:gap-[24px] flex-wrap flex-1">
						<div className="flex-1">
							<OptionButton
								label="골키퍼 전용머니"
								onClick={() => formDispatch({ type: 'chargeType', payload: 1 })}
								isSelected={formState.chargeType === 1}
								size="large"
							/>
						</div>
						<div className="flex-1">
							<OptionButton
								label="신용/체크카드"
								onClick={() => formDispatch({ type: 'chargeType', payload: 2 })}
								isSelected={formState.chargeType === 2}
								size="large"
							/>
						</div>
					</div>
					<div className="flex gap-[8px] pc:gap-[24px] flex-wrap flex-1">
						<div className="flex-1">
							<OptionButton
								label="계좌이체"
								onClick={() => formDispatch({ type: 'chargeType', payload: 3 })}
								isSelected={formState.chargeType === 3}
								size="large"
							/>
						</div>
						<div className="flex-1" />
					</div>
				</div>
				<div className="mb-[16px] pc:mb-[30px] text-[14px] pc:text-[22px] leading-[16.8px] pc:leading-[20px] font-[500] pc:font-[700]">
					비밀 번호
				</div>
				<div className="mb-[20px] pc:mb-[30px]">
					<TextInput
						placeholder="비밀번호"
						isPassword
						onChange={(curVar: string) => formDispatch({ type: 'password', payload: curVar })}
						value={formState?.password}
					/>
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
				<SubmitButton
					isLoading={chargeMoneyLoading}
					label={`${addComma(deleteComma(formState.chargeMoney) * 10000)}원 충전하기`}
					btnState={getBtnState()}
				/>
			</form>
		</Main>
	);
}

export default MoneyChargeView;
