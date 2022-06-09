import ObtionButton from 'components/Button/ObtionButton';
import SubmitButton, { BtnStates } from 'components/Button/SubmitButton';
import TextInput from 'components/Input/TextInput';
import Main from 'components/Main';
import React, { useState } from 'react';
import { addComma, deleteComma } from 'utils/common';
import { GoalFormState, GoalFormAction, initialState } from './RegisterType';

interface Props {
	onSubmit: (event: React.SyntheticEvent) => void;
	formState: GoalFormState;
	formDispatch: React.Dispatch<GoalFormAction>;
	remainingMoney: number;
}

function GoalRegisterView({ onSubmit, formState, formDispatch, remainingMoney }: Props) {
	/*
	const changeInputTextValue = (text: string): string => {
		const regex = /[^0-9]/g;
		const number = Number(text.replace(regex, ''));
		if (number > 1000) return '1000';
		return number.toString();
	};
	
	};
	*/
	const getBtnState = (): BtnStates => {
		const { goalName, content, money, limitDate, reward, category } = formState;
		// 심플하게 만드는 법 생각해보기
		if (
			!goalName.trim() ||
			!content.trim() ||
			(money || -1) < 0 ||
			(money || -1) > remainingMoney ||
			!`${money}`.trim() ||
			!limitDate?.trim() ||
			!reward?.trim() ||
			!category?.trim()
		)
			return 'inactive';

		return 'active';
	};
	return (
		<Main title="목표등록">
			<form className="pc:rounded-[16px] pc:p-[72px] pc:bg-[#FAFAFA]" onSubmit={onSubmit}>
				<TextInput
					placeholder="제목을 작성해주세요"
					onChange={(curVar: string) => formDispatch({ type: 'goalName', payload: curVar })}
					value={formState?.goalName}
					isRequired
					label="목표 제목"
				/>
				<TextInput
					placeholder="목표 달성 게시글에 올릴 상세 내용을 작성하세요"
					onChange={(curVar: string) => formDispatch({ type: 'goalName', payload: curVar })}
					value={formState?.goalName}
				/>
				<TextInput
					placeholder="₩ 1만원"
					onChange={(curVar: string) => formDispatch({ type: 'goalName', payload: curVar })}
					value={formState?.goalName}
					isRequired
					label="보증금 선택"
				/>
				<TextInput
					placeholder="4월 1일"
					onChange={(curVar: string) => formDispatch({ type: 'goalName', payload: curVar })}
					value={formState?.goalName}
					isRequired
					label="목표 마감일 선택"
				/>
				<span>까지</span>
				<span>달성 시 추가금 방식</span>
				<div className="grid grid-cols-2 gap-[10px]">
					<ObtionButton label="하이리스크 하이리턴" onClick={() => {}} isSelected size="large" />
					<ObtionButton label="로우리스크 로우리턴" onClick={() => {}} isSelected={false} size="large" />
				</div>
				<SubmitButton label="" btnState={getBtnState()} />
			</form>
		</Main>
	);
}

export default GoalRegisterView;
/*


	<div className="mb-[50px]">
					<div className="flex justify-between text-[12px] pc:text-[18px] text-primaryBlack-300 font-[500] leading-[14.4px] pc:leading-[22px] mb-[8px] pc:mb-[10px]">
						<div>현재 목표머니</div>
						<div>{addComma(String(memberInfo?.money))}원</div>
					</div>
					<div className="flex justify-between text-[12px] pc:text-[18px] text-primaryBlack-300 font-[500] leading-[14.4px] pc:leading-[22px] mb-[8px] pc:mb-[10px]">
						<div>충전 후 목표머니</div>
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
						className="w-[24px] pc:w-[30px] h-[24px] pc:h-[30px] mr-[18px] cursor-pointer"
						checked={formState.agree}
						readOnly
					/>
					<div>(필수) 개인정보 제3자 제공에 동의합니다.</div>
				</button>
				<SubmitButton
					label={`${addComma(deleteComma(formState.chargeMoney) * 10000)}원 충전하기`}
					btnState={getBtnState()}
				/>







*/
