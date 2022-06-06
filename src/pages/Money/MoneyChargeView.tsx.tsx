import ObtionButton from 'components/Button/ObtionButton';
import SubmitButton, { BtnStates } from 'components/Button/SubmitButton';
import TextInput from 'components/Input/TextInput';
import Main from 'components/Main';
import React, { useState } from 'react';
import { addComma, deleteComma } from 'utils/common';
import { IFormState, Action } from './MoneyChargeType';

interface Props {
	onSubmit: (event: React.SyntheticEvent) => void;
	formState: IFormState;
	formDispatch: React.Dispatch<Action>;
}

function MoneyChargeView({ onSubmit, formState, formDispatch }: Props) {
	const getBtnState = (): BtnStates => {
		const { chargeMoney, agree } = formState;
		if (!(agree && deleteComma(chargeMoney) > 0)) return 'inactive';

		return 'active';
	};
	return (
		<Main title="목표머니 충전">
			<form className="rounded-[16px] p-[72px] bg-[#FAFAFA]" onSubmit={onSubmit}>
				<div className="mb-[30px] text-[22px] leading-[20px] font-[700]">충전 금액</div>
				<div className="mb-[30px]">
					<TextInput
						placeholder="1만원"
						onChange={(curVar: string) => formDispatch({ type: 'chargeMoney', payload: addComma(curVar) })}
						value={formState?.chargeMoney}
					/>
				</div>
				<div className="mb-[50px]">
					<div className="flex justify-between text-[18px] text-primaryBlack-300 font-[500] leading-[22px] mb-[10px]">
						<div>현재 목표머니</div>
						<div>53,000원</div>
					</div>
					<div className="flex justify-between text-[18px] text-primaryBlack-300 font-[500] leading-[22px] mb-[10px]">
						<div>충전 후 목표머니</div>
						<div>63,000원</div>
					</div>
					<div className="flex justify-between text-[18px] font-[500] leading-[22px] pt-[18px] border-t-[1px] border-primaryGray-300">
						<div>충전 금액</div>
						<div>{formState.chargeMoney}원</div>
					</div>
				</div>
				<div className="mb-[30px] text-[22px] leading-[20px] font-[700]">충전 수단</div>
				<div className="flex gap-[24px] flex-wrap flex-col mb-[50px]">
					<div className="flex gap-[24px] flex-wrap flex-1">
						<div className="flex-1">
							<ObtionButton
								label="골키퍼 전용머니"
								onClick={() => formDispatch({ type: 'chargeType', payload: 1 })}
								isSelected={formState.chargeType === 1}
								size="large"
							/>
						</div>
						<div className="flex-1">
							<ObtionButton
								label="신용/체크카드"
								onClick={() => formDispatch({ type: 'chargeType', payload: 2 })}
								isSelected={formState.chargeType === 2}
								size="large"
							/>
						</div>
					</div>
					<div className="flex gap-[24px] flex-wrap flex-1">
						<div className="flex-1">
							<ObtionButton
								label="계좌이체"
								onClick={() => formDispatch({ type: 'chargeType', payload: 3 })}
								isSelected={formState.chargeType === 3}
								size="large"
							/>
						</div>
						<div className="flex-1" />
					</div>
				</div>
				<button
					type="button"
					onClick={() => formDispatch({ type: 'agree', payload: !formState.agree })}
					className="flex mb-[50px] items-center cursor-pointer"
				>
					<input
						type="checkbox"
						className="w-[30px] h-[30px] mr-[18px] cursor-pointer"
						checked={formState.agree}
						readOnly
					/>
					<div>(필수) 개인정보 제3자 제공에 동의합니다.</div>
				</button>
				<SubmitButton label={`${formState.chargeMoney}원 충전하기`} btnState={getBtnState()} />
			</form>
		</Main>
	);
}

export default MoneyChargeView;
