import React from 'react';
import { Goal } from 'types/goal';
import { getDday } from '../../utils/common';

export interface Props {
	goal: Goal;
	onClick?: () => void;
}

function LargeBox({ goal, onClick }: Props) {
	const findImage = () => {
		if (!goal) return 'image/thumbnail/largeBox_default_thumbnail.jpg';
		switch (goal.category) {
			case '공부':
				return 'image/thumbnail/study_thumbnail.jpg';
			case '습관':
				return 'image/thumbnail/habit_thumbnail.jpg';
			case '취미':
				return 'image/thumbnail/hobby_thumbnail.jpg';
			case '운동':
				return 'image/thumbnail/exercise_thumbnail.jpg';
			case '기타':
				return 'image/thumbnail/etc_thumbnail.jpg';
			default:
				return 'image/thumbnail/largeBox_default_thumbnail.jpg';
		}
	};
	return (
		<button
			type="button"
			onClick={onClick}
			className="flex rounded-[8px] pc:rounded-[16px] w-[100%] pc:w-[891px] h-[96px] pc:h-[177px] p-[8px] pc:p-[16px] border-[1px] border-borderGray overflow-hidden bg-white text-left"
		>
			<div className="bg-buttonBlack-100 rounded-[8px] w-[135px] pc:w-[325px] h-[100%] mr-[16px] pc:mr-[32px] overflow-hidden relative">
				<img
					className="absolute left-0 top-0 w-full h-full object-cover object-center"
					alt="goal_thumbnail"
					src={findImage()}
				/>
			</div>
			<div className="h-[100%] flex-1 flex justify-between flex-col">
				<div>
					<div className="flex justify-between items-start mb-[8px] pc:mb-[12px]">
						<div
							title={goal.goalName}
							className="flex-1 text-[12px] pc:text-[22px] font-[600] leading-[14.4px] pc:leading-[30px] text-ellipsis overflow-hidden whitespace-nowrap"
						>
							{goal.goalName}
						</div>
						<div className="text-[10px] pc:text-[16px] font-[600] leading-[12px] pc:leading-[19.2px]">
							⏰ D-{getDday(goal.limitDate)}
						</div>
					</div>
				</div>
				<div className="flex-1 flex flex-col justify-between items-start text-[10px] pc:text-[16px] font-[600] leading-[12px] pc:leading-[19px]">
					<div
						title={goal.content}
						className="w-[100%] line-clamp-2 pc:line-clamp-2 text-[10px] pc:text-[16px] font-[500] leading-[12px] pc:leading-[19.2px] text-primaryBlack-200 text-ellipsis"
					>
						{goal.content}
					</div>
					<div className="flex">
						<div className="p-[4px] pc:p-[8px] bg-buttonBlack-100 rounded-[4px] pc:rounded-[8px] mr-[8px] pc:mr-[16px]">
							<span className="text-primaryBlack-200 text-[10px] pc:text-[16px] font-[600] leading-[12px] pc:leading-[19px]">
								#&nbsp;
							</span>
							{goal.category}
						</div>
						{/* <div className="p-[4px] pc:p-[8px] bg-buttonRed-100 rounded-[4px] pc:rounded-[8px] text-buttonRed-200">
							0/10회
						</div> */}
					</div>
				</div>
			</div>
		</button>
	);
}

export default React.memo(LargeBox);
