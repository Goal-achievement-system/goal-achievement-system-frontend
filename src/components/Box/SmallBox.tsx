import React from 'react';
import { Goal } from 'types/goal';
import { getDday, getGoalState } from '../../utils/common';

export interface Props {
	goal?: Goal;
	onClick?: () => void;
}

function SmallBox({ goal, onClick }: Props) {
	const checkDrawBox = (verificationResult: string) => {
		const checkArr = ['success', 'fail', 'hold'];
		if (checkArr.includes(verificationResult)) return true;
		return false;
	};
	return (
		<button
			type="button"
			onClick={onClick}
			className="cursor-pointer rounded-[8px] pc:rounded-[16px] w-[152px] pc:w-[277px] h-[150px] pc:h-[277px] p-[8px] pc:p-[16px] border-[1px] border-borderGray overflow-hidden bg-white text-left"
		>
			<div className="bg-buttonBlack-100 rounded-[8px] h-[68px] pc:h-[125px] mb-[8px] pc:mb-[16px] overflow-hidden">
				{goal && checkDrawBox(goal.verificationResult) && (
					<div className="bg-[#000] bg-opacity-[80%] text-white text-[10px] pc:text-[16px] leading-[12px] pc:leading-[19px] font-[500] p-[5px] pc:p-[8px]">
						{getGoalState(goal.verificationResult)}
					</div>
				)}
			</div>
			<div className="flex justify-between items-center mb-[8px] pc:mb-[16px] text-[10px] pc:text-[16px] font-[600] leading-[12px] pc:leading-[19px]">
				<div className="flex">
					<div
						className={`p-[4px] pc:p-[8px] bg-buttonBlack-100 rounded-[4px] pc:rounded-[8px] mr-[4px] pc:mr-[8px] ${
							!goal && 'text-[#828282]'
						}`}
					>
						{goal && (
							<span className="text-primaryBlack-200 text-[10px] pc:text-[16px] font-[600] leading-[12px] pc:leading-[19px]">
								#&nbsp;
							</span>
						)}
						{goal ? goal.category : '목표등록'}
					</div>
					{/* <div className="p-[4px] pc:p-[8px] bg-buttonRed-100 rounded-[4px] pc:rounded-[8px] text-buttonRed-200">
						0/10회
					</div> */}
				</div>
				<div className={`${!goal && 'text-[#828282]'}`}>⏰ {goal ? `D-${getDday(goal.limitDate)}` : '지금'}</div>
			</div>
			<div>
				<div
					title={goal?.goalName}
					className={`mb-[4px] text-[12px] pc:text-[22px] font-[600] leading-[14px] pc:leading-[30px] text-ellipsis overflow-hidden whitespace-nowrap ${
						!goal && 'text-[#828282]'
					}`}
				>
					{goal ? goal.goalName : '목표등록을 해보세요!'}
				</div>
				<div
					title={goal?.content}
					className="text-[10px] pc:text-[16px] font-[500] leading-[12px] pc:leading-[19px] text-primaryBlack-200 text-ellipsis overflow-hidden whitespace-nowrap"
				>
					{goal ? goal.content : '골키퍼에서 목표등록을 진행해보세요!'}
				</div>
			</div>
		</button>
	);
}

export default React.memo(SmallBox);
