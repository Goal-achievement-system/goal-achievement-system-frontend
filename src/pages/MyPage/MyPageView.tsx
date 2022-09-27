/* eslint-disable no-nested-ternary */
import React, { Dispatch, SetStateAction } from 'react';
import { VerificationResultEng, Goal } from 'types/goal';
import { IPushNotice } from 'types/notification';

import Main from 'components/Main';
import { OpenModalOnClick } from 'hooks/useModal';
import { IReplaceMemeberForm, ReplaceMemberReducerAction } from './ReplaceMemberForm';
import MyPageGoalsView from './MyPageGoalsView';
import MyPageProfileView from './MyPageProfileView';
import MyPageAlarmView from './MyPageAlarmView';

interface Props {
	goals: Goal[] | null;
	pushNoticeList: IPushNotice[];
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	goalFilter: VerificationResultEng;
	setGoalFilter: Dispatch<SetStateAction<VerificationResultEng>>;
	isSelected: string;
	setIsSelected: Dispatch<SetStateAction<string>>;
	maxPage: number;
	openModalOnClick: OpenModalOnClick;
	formState: IReplaceMemeberForm | null;
	formDispatch: React.Dispatch<ReplaceMemberReducerAction>;
	handleSubmit: (event: React.SyntheticEvent) => void;
}

export default function MyPageView({
	goals,
	pushNoticeList,
	currentPage,
	setCurrentPage,
	goalFilter,
	setGoalFilter,
	isSelected,
	setIsSelected,
	maxPage,
	openModalOnClick,
	formState,
	formDispatch,
	handleSubmit,
}: Props) {
	return (
		<div className="flex-1 overflow-auto">
			<Main title="내목표">
				<MyPageGoalsView
					goals={goals}
					currentPage={currentPage}
					maxPage={maxPage}
					setCurrentPage={setCurrentPage}
					goalFilter={goalFilter}
					setGoalFilter={setGoalFilter}
					openModalOnClick={openModalOnClick}
					isSelected={isSelected}
					setIsSelected={setIsSelected}
				/>
			</Main>
			<MyPageAlarmView pushNoticeList={pushNoticeList} />
			<div className="pc:mt-[60px] pc:block hidden">
				<Main title="개인정보 관리">
					<MyPageProfileView formState={formState} formDispatch={formDispatch} handleSubmit={handleSubmit} />
				</Main>
			</div>
		</div>
	);
}
