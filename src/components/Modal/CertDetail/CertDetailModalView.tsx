import React from 'react';
import { getDday } from 'utils/common';
import SubmitButton from 'components/Button/SubmitButton';
import FilterButton from 'components/Button/FilterButton';
import { Goal } from 'types/goal';
import { Certification } from 'types/certification';
import { ReactComponent as DefaultGoal } from 'assets/icons/default-goal.svg';

interface Props {
	loading?: boolean;
	goal: Goal;
	certGoal: Certification;
	// certImage: any;
	resultHandler: (isSuccess: boolean) => void;
}

// export default function GoalModal({ index }: Props) {
// 	const goal = useSelector((state: RootState) => state.member.memberGoals.goals[index]);
// 	const navigate = useNavigate();
// export default function CertDetailModalView({ loading, goal, certGoal, certImage, resultHandler }: Props) {
export default function CertDetailModalView({ loading, goal, certGoal, resultHandler }: Props) {
	const className = {
		size: 'pc:w-[750px] w-[320px] pc:max-w-[750px] pc:h-[750px] pc:max-h-[80vh] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};
	console.log(loading);
	return (
		<div
			className={`scrollbar ${className.size} ${className.translate} text-left pc:p-[72px] p-[24px] border-borderGray rounded-2xl relativ bg-modalGray overflow-auto`}
		>
			{!loading && (
				<>
					{' '}
					<div className="modal-tops pc:space-y-[72px] flex flex-col space-y-[20px]">
						<div>
							<img className="w-full" src="./image/modal/default-goal.svg" alt="default-goal-img" />
						</div>
						<div className="flex justify-between">
							<div>익명</div>
							<div>⏰ D-{getDday(goal.limitDate)}</div>
						</div>
					</div>
					<div className="modal-middle border-b-2 border-b-borderGray pc:mt-[26px] pc:mb-[30px] my-[20px]" />
					<div className="flex flex-col modal-bottom pc:space-y-[35px] space-y-[21px]">
						<div className="flex items-center justify-between">
							<div className="line-clamp-1">
								<h2>{goal?.goalName}</h2>
							</div>
							<div className="min-w-[100px] flex pc:space-x-[16px] space-x-[10px] overflow-auto">
								<FilterButton label={`# ${goal.category}`} isSelected={false} onClick={() => {}} />
								<div className="p-[4px] pc:p-[16px] bg-buttonRed-100 rounded-[4px] pc:rounded-[8px] text-buttonRed-200 flex items-center">
									{certGoal.successCount}/{certGoal.requireSuccessCount}
								</div>
							</div>
						</div>
						<div className="pc:max-h-[90px] overflow-auto">{certGoal.content}</div>
						<div className="flex pc:space-x-[26px] space-x-[6px]">
							<SubmitButton label="실패" btnState="inactive" onClick={() => resultHandler(false)} />
							<SubmitButton label="성공" btnState="active" onClick={() => resultHandler(true)} />
						</div>
					</div>
				</>
			)}
		</div>
	);
}
