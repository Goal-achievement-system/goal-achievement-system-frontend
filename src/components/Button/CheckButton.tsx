import useModal from 'hooks/useModal';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Goal } from 'types/goal';

enum BgColor {
	orange200 = 'bg-primaryOrange-200',
	gray = 'bg-buttonGray-100',
	black = 'bg-primaryBlack-500',
	white = 'bg-primaryWhite',
}

enum TextColor {
	gray = 'text-buttonGray-200',
	white = 'text-primaryWhite',
}

enum BorderColor {
	gray = 'underline-buttonGray-200',
	white = 'underline-primaryWhite',
}
export interface Props {
	goal: Goal;
	onClick: () => void;
}

function CheckButton({ goal, onClick }: Props) {
	const [isSelected, setIsSelected] = useState<boolean>(false);
	const getBgColor = useCallback(() => (isSelected ? BgColor.orange200 : BgColor.gray), [isSelected]);
	const getTextColor = useCallback(() => (isSelected ? TextColor.white : TextColor.gray), [isSelected]);
	const getUnderlineColor = useCallback(() => (isSelected ? BorderColor.white : BorderColor.gray), [isSelected]);
	// const [openModal, closeModal] = useModal();

	const [searchParams, setSearchParams] = useSearchParams();
	useEffect(() => {
		const currentGoalID = Number(searchParams.get('goal'));
		setIsSelected(currentGoalID === goal.goalId);
	}, [searchParams, goal]);

	console.log(getBgColor);
	return (
		<div
			className={`flex flex-row justify-center items-center rounded-[8px] w-full pc:p-[18px] p-[16px] ${getBgColor()}`}
			onClick={onClick}
			aria-hidden
		>
			<div className="flex w-full pc:w-full">
				<span className="flex items-center overflow-hidden cursor-pointer">
					<input
						type="checkbox"
						className="pc:min-w-[20px] pc:min-h-[20px] w-[12px] h-[12px] cursor-pointer"
						checked={isSelected}
						onClick={() => Number(searchParams.get('goal')) === goal.goalId}
						readOnly
					/>
					<span
						className={`ml-[8px] text-left pc:truncate truncate ${getTextColor()} underline  ${getUnderlineColor()} hover:font-[500]`}
						// onClick={() => {
						// 	openModal(goal?.verificationResult);
						// }}
						// aria-hidden
					>
						{goal.goalName}
					</span>
				</span>
				<span className={`ml-[5px] ${getTextColor()} whitespace-nowrap font-[500]`}>
					📅 {new Date(goal.limitDate).getMonth() + 1}. {new Date(goal.limitDate).getDate()}
				</span>
			</div>
		</div>
	);
}

export default React.memo(CheckButton);
// export default CheckButton;
