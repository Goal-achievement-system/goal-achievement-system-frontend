import React from 'react';
import { getDday } from 'utils/common';
import SubmitButton from 'components/Button/SubmitButton';
import FilterButton from 'components/Button/FilterButton';

import { Goal } from 'types/goal';

interface Props {
	goal: Goal;
}

export default function GoalModal({ goal }: Props) {
	const className = {
		size: 'pc:w-[890px] max-w-[90vw] pc:max-h-[80vh] w-[320px] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	return (
		<div
			className={`${className.size} ${className.translate} text-left pc:p-[72px] p-[24px] border-borderGray rounded-2xl relativ bg-modalGray overflow-auto`}
		>
			<div className="modal-tops pc:space-y-[72px] flex flex-col space-y-[20px]">
				<div>
					<img className="w-full" src="./image/modal/default-goal.svg" alt="default-goal-img" />
				</div>
				<div className="flex justify-between">
					<div>닉네임</div>
					<div>⏰ D-{getDday(goal.limitDate)}</div>
				</div>
			</div>
			<div className="modal-middle border-b-2 border-b-borderGray pc:mt-[26px] pc:mb-[30px] my-[20px]" />
			<div className="flex flex-col modal-bottom pc:space-y-[35px] space-y-[21px]">
				<div className="flex items-center justify-between">
					<div className="line-clamp-1">
						<h2>{goal.goalName}</h2>
					</div>
					<div className="min-w-[100px] flex pc:space-x-[16px] space-x-[10px] overflow-auto">
						<FilterButton label="# 취미" isSelected={false} onClick={() => {}} />
						<div className="p-[4px] pc:p-[16px] bg-buttonRed-100 rounded-[4px] pc:rounded-[8px] text-buttonRed-200 flex items-center">
							0/10회
						</div>
					</div>
				</div>
				<div className="pc:max-h-[90px] overflow-auto">
					목표 달성 게시글에 올릴 상세 내용을 작성하세요. 최대 작성길이는 더 길어 질 수 있습니다.목표 달성 게시글에 올릴
					상세 내용을 작성하세요. 최대 작성길이는 더 길어 질 수 있습니다.목표 달성 게시글에 올릴 상세 내용을 작성하세요.
					최대 작성길이는 더 길어 질 수 있습니다.목표 달성 게시글에 올릴 상세 내용을 작성하세요. 최대 작성길이는 더 길어
					질 수 있습니다.목표 달성 게시글에 올릴 상세 내용을 작성하세요. 최대 작성길이는 더 길어 질 수 있습니다.목표
					달성 게시글에 올릴 상세 내용을 작성하세요. 최대 작성길이는 더 길어 질 수 있습니다.
				</div>
				<div className="flex pc:space-x-[26px] space-x-[6px]">
					<SubmitButton label="실패" btnState="inactive" onClick={() => {}} />
					<SubmitButton label="성공" btnState="active" onClick={() => {}} />
				</div>
			</div>
		</div>
	);
}
