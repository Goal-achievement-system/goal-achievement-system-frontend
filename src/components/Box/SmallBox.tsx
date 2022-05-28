import React from 'react';
import { Goal } from 'types/goal';
import { getDday } from '../../utils/common';

export interface Props {
	goal: Goal;
}

function SmallBox({ goal }: Props) {
	const getGoalState = () => {
		switch (goal.verificationResult) {
			case 'success':
				return '💰 보상금 지급 완료';
			case 'fail':
				return '😱 보상금 지급 실패';
			case 'hold':
				return '💡 검토 요청';
			default:
				return '';
		}
	};
	return (
		<div className="rounded-[8px] pc:rounded-[16px] w-[152px] pc:w-[277px] h-[150px] pc:h-[277px] p-[8px] pc:p-[16px] border-[1px] border-borderGray overflow-hidden bg-white">
			<div className="bg-buttonBlack-100 rounded-[8px] h-[68px] pc:h-[125px] mb-[8px] pc:mb-[16px] overflow-hidden">
				{goal.verificationResult !== 'ongoing' && (
					<div className="bg-[#000] bg-opacity-[80%] text-white text-[10px] pc:text-[16px] leading-[12px] pc:leading-[19px] font-[500] p-[5px] pc:p-[8px]">
						{getGoalState()}
					</div>
				)}
			</div>
			<div className="flex justify-between items-center mb-[8px] pc:mb-[16px] text-[10px] pc:text-[16px] font-[600] leading-[12px] pc:leading-[19px]">
				<div className="flex">
					<div className="p-[4px] pc:p-[8px] bg-buttonBlack-100 rounded-[4px] pc:rounded-[8px] mr-[4px] pc:mr-[8px]">
						<span className="text-primaryBlack-200 text-[10px] pc:text-[16px] font-[600] leading-[12px] pc:leading-[19px]">
							#&nbsp;
						</span>
						{goal.category}
					</div>
					<div className="p-[4px] pc:p-[8px] bg-buttonRed-100 rounded-[4px] pc:rounded-[8px] text-buttonRed-200">
						0/10회
					</div>
				</div>
				<div>⏰ D-{getDday(goal.limitDate)}</div>
			</div>
			<div>
				<div
					title={goal.goalName}
					className="mb-[4px] text-[12px] pc:text-[22px] font-[600] leading-[14px] pc:leading-[30px] text-ellipsis overflow-hidden whitespace-nowrap"
				>
					{goal.goalName}
				</div>
				<div
					title={goal.content}
					className="text-[10px] pc:text-[16px] font-[500] leading-[12px] pc:leading-[19px] text-primaryBlack-200 text-ellipsis overflow-hidden whitespace-nowrap"
				>
					{goal.content}
				</div>
			</div>
		</div>
	);
}

export default React.memo(SmallBox);
