import React, { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';
import { VerificationResult, Goal } from 'types/goal';
import { Notification } from 'types/notification';

import Main from 'components/Main';
import FilterButton from 'components/Button/FilterButton';
import SmallBox from 'components/Box/SmallBox';
import Pagination from 'components/Pagination';
import PerformInput from 'components/Input/PerformInput';
import Select from 'components/Select/Select';
import { AgeOption, GenderOption } from 'pages/SignUp/SignUpView';
import { Member } from 'types/member';
import SubmitButton from 'components/Button/SubmitButton';
import { OpenModalOnClick } from 'hooks/useModal';
import { IReplaceMemeberForm, ReplaceMemberReducerAction } from './ReplaceMemberForm';

interface Props {
	goals: Goal[] | null;
	notificationList: Notification[];
	formState: IReplaceMemeberForm | null;
	formDispatch: React.Dispatch<ReplaceMemberReducerAction>;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	goalFilter: VerificationResult;
	setGoalFilter: Dispatch<SetStateAction<VerificationResult>>;
	isSelected: string;
	setIsSelected: Dispatch<SetStateAction<string>>;
	maxPage: number;
	openModalOnClick: OpenModalOnClick;
	handleChange: () => void;
}

export default function MyGoalView({
	goals,
	notificationList,
	formState,
	formDispatch,
	currentPage,
	setCurrentPage,
	goalFilter,
	setGoalFilter,
	isSelected,
	setIsSelected,
	maxPage,
	openModalOnClick,
	handleChange,
}: Props) {
	// 버튼에 해당하는 현재 state
	const getFilterState = (key: string) => {
		const filterMap = new Map([
			['전체', 'all'],
			['진행 중', 'ongoing'],
			['인증 중', 'oncertification'],
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
					className="mygoal-category-wrap flex space-x-[8px]"
					onClick={(e: React.MouseEvent<HTMLDivElement> | BaseSyntheticEvent) => {
						if (e.target === e.currentTarget) return;
						const { innerText } = e.target;

						const filterText = getFilterState(innerText);
						if (filterText) setGoalFilter(filterText as VerificationResult);
					}}
					aria-hidden
				>
					{['전체', '진행 중', '인증 중', '성공', '실패', '보류'].map((ele: string) => {
						return (
							<div key={ele}>
								<FilterButton label={ele} isSelected={ele === isSelected} onClick={() => setIsSelected(ele)} />
							</div>
						);
					})}
				</div>
				<div className="goalbox-wrap pc:my-[30px] my-[16px]">
					<ul className="grid pc:grid-cols-3 pc:gap-[30px] gap-[16px]">
						<li>
							<SmallBox
								onClick={() => {
									alert('목표를 등록하러 갈게요!');
									// 나중에 목표등록 모달이 완료되면 열어주기
									openModalOnClick({ certState: 'register' });
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
				<div className="flex content-center pagination-wrap">
					<Pagination curPage={currentPage} setCurPage={setCurrentPage} numOfPages={maxPage} numOfPageBtn={5} />
				</div>
				<div className="pc:mt-[30px]">
					<Main title="알림">
						<div className="relative">
							<div className="flex flex-col pc:space-y-[16px]">
								<span className="px-[24px] py-[20px] text-[22px] font-[600]">
									읽지 않은 알람 <span className="text-primaryOrange-200">{notificationList.length}개</span>
								</span>
							</div>
						</div>
					</Main>
				</div>
			</Main>
			<div className="pc:mt-[30px]">
				<Main title="개인정보 관리">
					<div className="flex flex-col space-y-[40px]">
						<div className="email-wrap">
							<PerformInput
								type="email"
								placeholder="이메일이 표시되지 않으면 재접속해주세요!"
								label="이메일"
								onChange={() => {}}
							/>
						</div>
						<div className="password-wrap">
							<div>
								<PerformInput type="password" placeholder="현재 비밀번호" label="비밀번호 변경" onChange={() => {}} />
							</div>
							<div className="my-[10px]">
								<PerformInput type="password" placeholder="새 비밀번호(8자리 이상)" onChange={() => {}} />
							</div>
							<div className="my-[10px]">
								<PerformInput type="password" placeholder="새 비밀번호 확인" onChange={() => {}} />
							</div>
						</div>
						<div>
							<PerformInput type="email" placeholder="닉네임" label="닉네임 변경" onChange={() => {}} />
						</div>
						<div>
							<div className="flex pc:space-x-[8px] space-x-[4px] pc:mb-[10px] mb-[8px]">
								<span className="font-semibold text-[20px]">선택사항</span>
							</div>
							<div className="flex justify-between w-full">
								<Select options={GenderOption} value={formState ? formState.sex : null} onChange={handleChange} />
								<Select
									options={AgeOption}
									value={formState ? formState.age.toString() : null}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="submitbutton-wrap">
							<SubmitButton label="변경하기" btnState="active" />
						</div>
					</div>
				</Main>
			</div>
		</div>
	);
}
