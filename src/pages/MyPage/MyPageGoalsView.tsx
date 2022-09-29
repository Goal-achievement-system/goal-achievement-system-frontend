/* eslint-disable no-nested-ternary */
import React, { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';
import FilterButton from 'components/Button/FilterButton';
import SmallBox from 'components/Box/SmallBox';
import Pagination from 'components/Pagination';
import { OpenModalOnClick } from 'hooks/useModal';
import { Link } from 'react-router-dom';
import Path from 'utils/path';
import { getFilterStateKr } from 'utils/common';
import { VerificationResultEng, Goal } from 'types/goal';

interface Props {
	goals: Goal[] | null;
	currentPage: number;
	maxPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	goalFilter: VerificationResultEng;
	setGoalFilter: Dispatch<SetStateAction<VerificationResultEng>>;
	openModalOnClick: OpenModalOnClick;
	isSelected: string;
	setIsSelected: Dispatch<SetStateAction<string>>;
}

export default function MyPageGoalsView({
	goals,
	currentPage,
	maxPage,
	setCurrentPage,
	goalFilter,
	setGoalFilter,
	openModalOnClick,
	isSelected,
	setIsSelected,
}: Props) {
	const filterList = ['전체', '진행 중', '인증 중', '성공', '실패', '보류'];
	const getFilterState = (key: string): VerificationResultEng => {
		const filterMap = new Map([
			['전체', 'all'],
			['진행 중', 'ongoing'],
			['인증 중', 'oncertification'],
			['성공', 'success'],
			['실패', 'fail'],
			['보류', 'hold'],
		]);

		return (filterMap.get(key) as VerificationResultEng) || 'all';
	};

	const handleFilterClick = (e: React.MouseEvent<HTMLDivElement> | BaseSyntheticEvent) => {
		if (e.target === e.currentTarget) return;
		const { innerText } = e.target;

		const filterText = getFilterState(innerText);
		if (filterText) setGoalFilter(filterText as VerificationResultEng);
	};
	return (
		<>
			<div className="mygoal-category-wrap flex space-x-[8px]" onClick={handleFilterClick} aria-hidden>
				{filterList.map((ele: string) => (
					<div key={ele}>
						<FilterButton label={ele} isSelected={ele === isSelected} onClick={() => setIsSelected(ele)} />
					</div>
				))}
			</div>
			<div className="goalbox-wrap pc:my-[30px] my-[16px]">
				<ul className="flex flex-wrap gap-x-[4%] pc:gap-x-[30px] gap-y-[16px] pc:gap-y-[30px]">
					{!goals?.length && goalFilter === 'all' ? (
						<li className="w-[48%] pc:w-auto">
							<SmallBox
								onClick={() => {
									alert('목표를 등록하러 갈게요!');
									openModalOnClick({ certState: 'register' });
								}}
							/>
						</li>
					) : !goals?.length ? (
						<div className="w-full text-center p-[30px] text-primaryBlack-400">
							<b>{getFilterStateKr(goalFilter)}</b> 상태인 목표가 없어요!
						</div>
					) : null}
					{goals?.length
						? goals.map((goal, index) => (
								<li className="w-[48%] pc:w-auto" key={goal.goalId}>
									<Link className="w-full pc:w-auto" to={`${Path.myGoals}?goal=${goal.goalId}`}>
										<SmallBox
											goal={goal}
											onClick={() => openModalOnClick({ certState: goal.verificationResult, index })}
										/>
									</Link>
								</li>
						  ))
						: null}
				</ul>
			</div>
			<div className="flex content-center pagination-wrap">
				<Pagination curPage={currentPage} setCurPage={setCurrentPage} numOfPages={maxPage} numOfPageBtn={5} />
			</div>
		</>
	);
}
