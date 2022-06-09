import React, { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';
import { VerificationResult, Goal } from 'types/goal';
import { Notification } from 'types/notification';

import Main from 'components/Main';
import FilterButton from 'components/Button/FilterButton';
import SmallBox from 'components/Box/SmallBox';
import Pagination from 'components/Pagination';

interface Props {
	goals: Goal[];
	notificationList: Notification[];
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	goalFilter: VerificationResult;
	setGoalFilter: Dispatch<SetStateAction<VerificationResult>>;
}

export default function MyGoalView({
	goals,
	notificationList,
	currentPage,
	setCurrentPage,
	goalFilter,
	setGoalFilter,
}: Props) {
	// 버튼에 해당하는 현재 state
	const getFilterState = (key: string) => {
		const filterMap = new Map([
			['전체', 'all'],
			['등록 전', 'ongoing'],
			['진행 중', 'oncertification'],
			['성공', 'success'],
			['실패', 'fail'],
			['보류', 'hold'],
		]);

		return filterMap.get(key) || 'all';
	};

	return (
		<div>
			<Main title="내목표">
				<div
					className="flex space-x-[8px]"
					onClick={(e: React.MouseEvent<HTMLDivElement> | BaseSyntheticEvent) => {
						if (e.target === e.currentTarget) return;
						const { innerText } = e.target;

						const filterText = getFilterState(innerText);
						if (filterText) setGoalFilter(filterText as VerificationResult);
					}}
					aria-hidden
				>
					<FilterButton label="전체" isSelected onClick={() => {}} />
					<FilterButton label="등록 전" isSelected={false} onClick={() => {}} />
					<FilterButton label="진행 중" isSelected={false} onClick={() => {}} />
					<FilterButton label="성공" isSelected={false} onClick={() => {}} />
					<FilterButton label="실패" isSelected={false} onClick={() => {}} />
					<FilterButton label="보류" isSelected={false} onClick={() => {}} />
				</div>
				<div className="box-wrap pc:my-[30px]">{goals && goals.map((goal) => <SmallBox goal={goal} />)}</div>
				<div className="flex content-center ">
					<Pagination numOfPages={3} setCurPage={setCurrentPage} curPage={currentPage} numOfPageBtn={3} />
				</div>
			</Main>
			<div className="pc:mt-[30px]">
				<Main title="알림">
					<div className="notifiaction-wrap">
						{notificationList.map(({ category, sendingTime, message, link }: Notification) => {
							return (
								<div>
									<div>{category}</div>
									<div>{message}</div>
									<div>{sendingTime}</div>
								</div>
							);
						})}
					</div>
				</Main>
			</div>
		</div>
	);
}
