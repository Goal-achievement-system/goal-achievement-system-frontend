import React, { useCallback } from 'react';
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

export interface Props {
	isSelected: boolean;
	onClick: () => void;
	goal: Goal;
}

function SideBarButton({ onClick, isSelected, goal }: Props) {
	const getBgColor = useCallback(() => (isSelected ? BgColor.orange200 : BgColor.gray), [isSelected]);
	const getTextColor = useCallback(() => (isSelected ? TextColor.white : TextColor.gray), [isSelected]);

	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex justify-center items-center rounded-[8px] w-full pc:p-[16px] p-[10px] ${getBgColor()}`}
		>
			<div className="flex justify-between w-full">
				<button type="button" onClick={() => {}} className="flex items-center cursor-pointer">
					<input
						type="checkbox"
						className="pc:w-[20px] pc:h-[20px] w-[12px] h-[12px] cursor-pointer"
						value=""
						checked={isSelected}
						readOnly
					/>
					<span className={`ml-[8px] text-primaryWhite truncate flex-1 text-left ${getTextColor()} font-[500]`}>
						{goal.goalName}
					</span>
				</button>
				<span className={`ml-[10px] ${getTextColor()} font-[500]`}>
					📅 {new Date(goal.limitDate).getMonth() + 1}. {new Date(goal.limitDate).getDate()}
				</span>
			</div>
		</button>
	);
}

export default React.memo(SideBarButton);
