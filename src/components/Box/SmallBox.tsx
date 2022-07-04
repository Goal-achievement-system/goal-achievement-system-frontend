import React from 'react';
import { Goal } from 'types/goal';
import { getDday, getGoalState } from '../../utils/common';

export interface Props {
	goal?: Goal;
	onClick?: () => void;
}

function SmallBox({ goal, onClick }: Props) {
	const checkDrawBox = (verificationResult: string) => {
		const checkArr = ['success', 'fail', 'hold', 'ongoing'];
		if (checkArr.includes(verificationResult)) return true;
		return false;
	};
	const findImage = () => {
		if (!goal) return 'image/thumbnail/smallBox_default_thumbnail.jpg';
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
				return 'image/thumbnail/smallBox_default_thumbnail.jpg';
		}
	};
	return (
		<button
			type="button"
			onClick={onClick}
			className="cursor-pointer rounded-[8px] pc:rounded-[16px] w-[100%] pc:w-[277px] h-[150px] pc:h-[277px] p-[8px] pc:p-[16px] border-[1px] border-borderGray overflow-hidden bg-white text-left"
		>
			<div className="bg-buttonBlack-100 rounded-[8px] h-[68px] pc:h-[125px] mb-[8px] pc:mb-[16px] overflow-hidden relative">
				{goal && checkDrawBox(goal.verificationResult) && (
					<div className="bg-[#000] bg-opacity-[80%] text-white text-[10px] pc:text-[16px] leading-[12px] pc:leading-[19px] font-[500] p-[5px] pc:p-[8px] absolute top-0 right-0 left-0">
						{getGoalState(goal.verificationResult)}
					</div>
				)}
				<img className="w-full h-full object-cover object-center z-[1]" alt="goal_thumbnail" src={findImage()} />
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
