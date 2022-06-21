import React, { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';
import { VerificationResult, Goal } from 'types/goal';
import { Notification } from 'types/notification';

import Main from 'components/Main';
import FilterButton from 'components/Button/FilterButton';
import SmallBox from 'components/Box/SmallBox';
import Pagination from 'components/Pagination';
import { OpenModalOnClick } from 'hooks/useModal';

interface Props {
	goals: Goal[] | null;
	notificationList: Notification[];
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	goalFilter: VerificationResult;
	setGoalFilter: Dispatch<SetStateAction<VerificationResult>>;
	isSelected: string;
	setIsSelected: Dispatch<SetStateAction<string>>;
	maxPage: number;
	openModalOnClick: OpenModalOnClick;
}

export default function MyGoalView({
	goals,
	notificationList,
	currentPage,
	setCurrentPage,
	goalFilter,
	setGoalFilter,
	isSelected,
	setIsSelected,
	maxPage,
	openModalOnClick,
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
		<div className="flex-1 overflow-auto">
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
					{['전체', '등록 전', '진행 중', '성공', '실패', '보류'].map((ele: string) => {
						return (
							<div key={ele}>
								<FilterButton label={ele} isSelected={ele === isSelected} onClick={() => setIsSelected(ele)} />
							</div>
						);
					})}
				</div>
				<div className="box-wrap pc:my-[30px] my-[16px]">
					<ul className="grid pc:grid-cols-3 pc:gap-[30px] gap-[16px]">
						<li>
							<SmallBox
								onClick={() => {
									alert('목표를 등록하러 갈게요!');
									// 나중에 목표등록 모달이 완료되면 열어주기
									// openModalOnClick({ certState: '' });
								}}
							/>
						</li>
						{goals?.length
							? goals.map((goal, index) => (
									<li key={goal.goalId}>
										<SmallBox
											goal={goal}
											onClick={() => openModalOnClick({ certState: goal.verificationResult, index })}
										/>
									</li>
							  ))
							: null}
					</ul>
				</div>
				<div className="flex content-center ">
					<Pagination curPage={currentPage} setCurPage={setCurrentPage} numOfPages={maxPage} numOfPageBtn={5} />
				</div>
			</Main>
			<div className="pc:mt-[30px]">
				<Main title="알림">
					<div className="relative">
						<div className="flex flex-col pc:space-y-[16px]">
							<span className="px-[24px] py-[20px] text-[22px] font-[600]">
								읽지 않은 알람 <span className="text-primaryOrange-200">{notificationList.length}개</span>
							</span>

							{/* {notificationList.map(({ category, sendingTime, message, link }: Notification) => {
							return (
								<div>
									<div>{category}</div>
									<div>{message}</div>
									<div>{sendingTime}</div>
								</div>
							);
						})} */}
							{/* {[
							{ category: 'category', sendingTime: '2022-02-02', message: '메세지입니다.', link: '/' },
							{ category: 'category', sendingTime: '2022-02-02', message: '첫 목표등록이 완료되었어요.', link: '/' },
							{
								category: 'categorycategorycategorycategory',
								sendingTime: '2022-02-02',
								message:
									'메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다.메세지입니다',
								link: '/',
							},
							{ category: 'category', sendingTime: '2022-02-02', message: '메세지입니다.', link: '/' },
							{ category: 'category', sendingTime: '2022-02-02', message: '메세지입니다.', link: '/' },
							{ category: 'category', sendingTime: '2022-02-02', message: '메세지입니다.', link: '/' },
						].map(({ category, sendingTime, message, link }) => (
							<div className="border-2 bg-alarmGray  border-borderGray pc:px-[24px] pc:pt-[24px] pc:pb-[20px] rounded-[16px] pc:h-[108px] flex flex-col justify-between">
								<div className="flex justify-between">
									<div className="text-primaryOrange-200 w-[100px] line-clamp-1">{category}</div>
									<div className="">{sendingTime}</div>
								</div>
								<div className="line-clamp-1">{message}</div>
							</div>
						))} */}
						</div>
					</div>
				</Main>
			</div>
		</div>
	);
}
