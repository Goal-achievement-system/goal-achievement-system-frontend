import React from 'react';
import { getDday } from 'utils/common';
import SubmitButton from 'components/Button/SubmitButton';
import FilterButton from 'components/Button/FilterButton';
import { Goal } from 'types/goal';
import { Certification } from 'types/certification';

interface Props {
	goal: Goal;
	certGoal: Certification;
	certImage: string;
	resultHandler: (isSuccess: boolean) => void;
}

export default function CertDetailModalView({ goal, certGoal, resultHandler, certImage }: Props) {
	const className = {
		size: 'pc:w-[750px] w-[320px] pc:max-w-[750px] pc:h-[750px] pc:max-h-[80vh] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	return (
		<div
			className={`scrollbar ${className.size} ${className.translate} text-left pc:p-[72px] p-[24px] border-borderGray rounded-2xl relativ bg-modalGray overflow-auto`}
		>
			<div className="modal-tops pc:space-y-[20px] flex flex-col space-y-[10px]">
				<div className="rounded">
					<img className=" w-full rounded-lg object-contain  " src={certImage} alt="goal-img" />
				</div>
				<div className="flex justify-between items-end">
					<div className="pc:text-xl text-sm">⏰ D-{getDday(goal.limitDate)}</div>
					<div className="space-x-2 flex items-center">
						<div className="p-[4px] pc:p-[16px]  bg-[#f3f3f3] rounded-[4px] pc:rounded-[8px]  flex items-center">
							{`# ${goal.category}`}
						</div>

						<div className="p-[4px] pc:p-[16px]  bg-buttonRed-100 rounded-[4px] pc:rounded-[8px] text-buttonRed-200 flex items-center">
							{certGoal.successCount}/{certGoal.requireSuccessCount}
						</div>
					</div>
				</div>
			</div>
			<div className="modal-middle border-b-2 border-b-borderGray  pc:mb-[30px] my-[10px]" />
			<div className="flex flex-col modal-bottom pc:space-y-[35px] space-y-[21px]">
				<div className="flex   items-center justify-between">
					<div className="line-clamp-1">
						<h2 className="pc:text-[30px] text-[20px]">{goal?.goalName}</h2>
					</div>
				</div>
				<div className="pc:max-h-[90px] overflow-auto">{certGoal.content}</div>
				<div className="flex pc:space-x-[26px] space-x-[6px]">
					<SubmitButton label="실패" btnState="inactive" onClick={() => resultHandler(false)} />
					<SubmitButton label="성공" btnState="active" onClick={() => resultHandler(true)} />
				</div>
			</div>
		</div>
	);
}
