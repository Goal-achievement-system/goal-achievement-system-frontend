import OptionButton from 'components/Button/OptionButton';
import SubmitButton, { BtnStates } from 'components/Button/SubmitButton';
import TextInput from 'components/Input/TextInput';
import React from 'react';
import { IForm, Action, isFormValid } from './FormStateMgt';

interface Props {
	onSubmit: (event: React.SyntheticEvent) => void;
	formState: IForm;
	formDispatch: React.Dispatch<Action>;
	remainingMoney: number;
	categories: string[];
}

function GoalRegisterView({ onSubmit, formState, formDispatch, remainingMoney, categories }: Props) {
	const getBtnState = (): BtnStates => {
		if (!isFormValid(formState, categories, remainingMoney)) return 'inactive';

		return 'active';
	};
	return (
		<form className="  pc:rounded-[16px] pc:px-[40px] pc:bg-[#FAFAFA]" onSubmit={onSubmit}>
			<TextInput
				placeholder="제목을 작성해주세요"
				onChange={(curVar: string) => formDispatch({ type: 'goalName', payload: curVar })}
				value={formState?.goalName}
				isRequired
				label="목표 제목"
			/>

			<TextInput
				placeholder="목표 달성 게시글에 올릴 상세 내용을 작성하세요"
				onChange={(curVar: string) => formDispatch({ type: 'content', payload: curVar })}
				value={formState?.content}
			/>
			<div className="pc:mb-[16px] mb-[4px] pc:mt-[30px] mt-[20px] pc:space-x-[8px] space-x-[4px]">
				<span className="font-semibold pc:text-[20px] text-[14px]">카테고리 선택</span>
				<span className="font-semibold text-primaryOrange-200 ">*</span>
			</div>
			<div className="flex pc:space-x-2 mb-[50px]">
				{categories.map((category) => (
					<OptionButton
						key={category}
						label={`# ${category}`}
						onClick={() => formDispatch({ type: 'category', payload: category })}
						isSelected={formState.category === category}
						size="small"
					/>
				))}
			</div>

			<TextInput
				placeholder="10000"
				onChange={(curVar: string) => formDispatch({ type: 'money', payload: curVar })}
				value={formState?.money}
				isRequired
				label="보증금 선택 (단위 원)"
			/>
			<span className="text-red-500">*보증금은 만원부터 백만원까지 선택할 수 있어요</span>

			<TextInput
				placeholder="YYYY-MM-DD (2022-06-09)"
				onChange={(curVar: string) => formDispatch({ type: 'limitDate', payload: curVar })}
				value={formState?.limitDate}
				isRequired
				label="목표 마감일 선택"
			/>

			<div className="flex pc:space-x-[8px] space-x-[4px] pc:mb-[16px] mb-[8px] mt-[30px] ">
				<span className="font-semibold pc:text-[20px] text-[14px]">달성 시 추가금 방식</span>
				<span className="font-semibold text-primaryOrange-200 ">*</span>
			</div>

			<div className="grid grid-cols-2 gap-[10px]">
				<OptionButton
					label="하이리스크 하이리턴"
					onClick={() => formDispatch({ type: 'reward', payload: 'high' })}
					isSelected={formState.reward === 'high'}
					size="large"
				/>
				<OptionButton
					label="로우리스크 로우리턴"
					onClick={() => formDispatch({ type: 'reward', payload: 'low' })}
					isSelected={formState.reward === 'low'}
					size="large"
				/>
			</div>
			<div className="pc:mb-[50px] mb-[25px]" />
			<SubmitButton label="등록하기" btnState={getBtnState()} />
			<div className="pc:mb-[30px] mb-[20px]" />
		</form>
	);
}

export default GoalRegisterView;
