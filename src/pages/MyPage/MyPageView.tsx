import React, { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';
import { VerificationResult, Goal } from 'types/goal';
import { IPushNotice } from 'types/notification';

import Main from 'components/Main';
import FilterButton from 'components/Button/FilterButton';
import SmallBox from 'components/Box/SmallBox';
import Pagination from 'components/Pagination';
import PerformInput from 'components/Input/PerformInput';
import Select from 'components/Select/Select';
import { AgeOption, GenderOption } from 'pages/SignUp/SignUpView';
import SubmitButton from 'components/Button/SubmitButton';
import { OpenModalOnClick } from 'hooks/useModal';
import { modalName } from 'utils/importModal';
import { Link } from 'react-router-dom';
import Path from 'utils/path';
import { IReplaceMemeberForm, ReplaceMemberReducerAction } from './ReplaceMemberForm';

interface Props {
	goals: Goal[] | null;
	pushNoticeList: IPushNotice[];
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
	handleSubmit: (event: React.SyntheticEvent) => void;
}

export default function MyPageView({
	goals,
	pushNoticeList,
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
	handleSubmit,
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

	const filterList = ['전체', '진행 중', '인증 중', '성공', '실패', '보류'];

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
					{filterList.map((ele: string) => {
						return (
							<div key={ele}>
								<FilterButton label={ele} isSelected={ele === isSelected} onClick={() => setIsSelected(ele)} />
							</div>
						);
					})}
				</div>
				<div className="goalbox-wrap pc:my-[30px] my-[16px]">
					<ul className="flex flex-wrap gap-x-[4%] pc:gap-x-[30px] gap-y-[16px] pc:gap-y-[30px]">
						<li className="w-[48%] pc:w-auto">
							<SmallBox
								onClick={() => {
									alert('목표를 등록하러 갈게요!');
									openModalOnClick({ certState: 'register' });
								}}
							/>
						</li>
						{goals?.length
							? goals.map((goal, index) => (
									<li className="w-[48%] pc:w-auto" key={goal.goalId}>
										<Link to={`${Path.myGoals}?goal=${goal.goalId}`}>
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
			</Main>
			<div className="pc:mt-[60px] pc:block hidden">
				<div className="flex justify-between items-center mb-[30px]">
					<div
						className="font-[800] text-[20px] leading-[24px] pc:font-[800] pc:text-[30px]
				pc:leading-[36px]"
					>
						알림
					</div>
					<Link
						to={Path.pushNotice}
						type="button"
						className="font-[800] text-[20px] leading-[24px] pc:font-[600] pc:text-[22px]
						pc:leading-[30px] text-primaryBlack-200"
					>
						더보기
					</Link>
				</div>
				<div className="relative">
					<div className="flex flex-col pc:space-y-[16px]">
						<span className="px-[24px] py-[20px] pc:text-[22px] font-[600] text-[12px] rounded-[8px] bg-modalGray">
							읽지 않은 알람{' '}
							<span className="text-primaryOrange-200 pc:text-[22px] text-[12px]">{pushNoticeList.length}개</span>
						</span>
					</div>
				</div>
			</div>
			<div className="pc:mt-[60px] pc:block hidden">
				<Main title="개인정보 관리">
					<form className="pc:mb-[70px]" onSubmit={handleSubmit}>
						<div className="flex flex-col space-y-[40px]">
							<div className="email-wrap">
								<PerformInput
									type="email"
									placeholder="이메일이 표시되지 않으면 재접속해주세요!"
									label="이메일"
									value={formState?.email}
									onChange={() => {}}
								/>
							</div>
							<div className="password-wrap">
								{/* <div>
									<PerformInput
										type="password"
										placeholder="현재 비밀번호"
										label="비밀번호 변경"
										value={formState?.password}
										onChange={(curVal: string) => formDispatch({ type: 'password', payload: curVal })}
									/>
								</div> */}
								<div className="my-[10px]">
									<PerformInput
										type="password"
										placeholder="새 비밀번호(8자리 이상)"
										label="비밀번호 변경"
										value={formState?.password}
										onChange={(curVal: string) => formDispatch({ type: 'password', payload: curVal })}
									/>
								</div>
								<div className="my-[10px]">
									<PerformInput
										type="password"
										placeholder="새 비밀번호 확인"
										value={formState?.passwordCheck}
										onChange={(curVal: string) => formDispatch({ type: 'passwordCheck', payload: curVal })}
									/>
								</div>
							</div>
							<div>
								<PerformInput
									type="nickName"
									placeholder="닉네임"
									label="닉네임 변경"
									value={formState?.nickName}
									onChange={(curVal: string) => formDispatch({ type: 'nickName', payload: curVal })}
								/>
							</div>
							<div>
								<div className="flex pc:space-x-[8px] space-x-[4px] pc:mb-[10px] mb-[8px]">
									<span className="font-semibold text-[20px]">선택사항</span>
								</div>
								<div className="flex justify-between w-full space-x-[2%]">
									<Select
										options={GenderOption}
										value={formState ? formState.sex : null}
										defaultValue="성별"
										onChange={(curVal: string) => formDispatch({ type: 'sex', payload: curVal })}
									/>
									<Select
										options={AgeOption}
										value={formState ? formState.age.toString() : null}
										defaultValue="연령"
										onChange={(curVal: string) => formDispatch({ type: 'age', payload: curVal })}
									/>
								</div>
							</div>
							<div className="submitbutton-wrap pc:mt-[60px]">
								<SubmitButton label="변경하기" btnState="active" />
							</div>
						</div>
					</form>
				</Main>
			</div>
		</div>
	);
}
