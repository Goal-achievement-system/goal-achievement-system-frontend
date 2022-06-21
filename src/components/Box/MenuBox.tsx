import useGetActionState from 'hooks/useGetActionState';
import useModal from 'hooks/useModal';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';
import { Member } from 'types/member';
import { addComma } from 'utils/common';
import Path from 'utils/path';
import SideBarButton from '../Button/SideBarButton';

export interface Props {
	member: Member | null;
}

function MenuBox({ member }: Props) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [memberInfoLoading] = useGetActionState(memberSlice.actions.loadMemberInfo.type);
	const [menuInfoLoading] = useGetActionState(memberSlice.actions.getMemberMenuInfos.type);
	const { goalStatistics, menuGoals, menuCerts } = useSelector((state: RootState) => state.member);
	const [openGoalRegModal] = useModal();

	useEffect(() => {
		if (member) {
			dispatch(memberSlice.actions.getMemberMenuInfos());
		}
	}, [dispatch, member]);

	if (memberInfoLoading || menuInfoLoading)
		return (
			<div className="rounded-[16px] w-[278px] p-[24px] border-[1px] border-borderGray overflow-hidden bg-white h-[674px]" />
		);

	return (
		<div className="rounded-[16px] w-[278px] p-[24px] border-[1px] border-borderGray overflow-hidden bg-white">
			<div className="border-b-[1px] border-borderGray pb-[16px] mb-[16px]">
				{member ? (
					<>
						<div className="test-[22px] font-[600] leading-[30px] mb-[4px]">{member.nickName}</div>
						<div className="text-[16px] text-primaryOrange-200 font-[600px] leading-[19px]">{member.email}</div>
					</>
				) : (
					<>
						<div className="test-[22px] font-[600] leading-[30px] mb-[4px]">로그인을 해주세요</div>
						<Link to={Path.login} className="text-[16px] text-primaryOrange-200 font-[600px] leading-[19px]">
							바로가기 &gt;
						</Link>
					</>
				)}
			</div>
			<div className="mb-[30px]">
				<div className="text-[16px] font-[600] leading-[19px] mb-[8px]">목표등록현황</div>
				<ul className="p-[16px] rounded-[8px] bg-primaryOrange-100 text-[16px] font-[500] leading-[19px]">
					<li className="flex justify-between mb-[16px]">
						<div className="flex items-center">목표 등록</div>
						<div className="text-primaryOrange-200">{goalStatistics ? goalStatistics.totalGoalCount : 0}</div>
					</li>
					<li className="flex justify-between mb-[16px]">
						<div className="flex items-center">목표 진행</div>
						<div className="text-primaryOrange-200">{goalStatistics ? goalStatistics.totalOngoingGoalCount : 0}</div>
					</li>
					<li className="flex justify-between mb-[16px]">
						<div className="flex items-center">목표 성공</div>
						<div className="text-primaryOrange-200">{goalStatistics ? goalStatistics.totalSuccessGoalCount : 0}</div>
					</li>
					<li className="flex justify-between">
						<div className="flex items-center">목표 실패</div>
						<div className="text-primaryOrange-200">{goalStatistics ? goalStatistics.totalFailGoalCount : 0}</div>
					</li>
				</ul>
			</div>
			<div className="mb-[30px]">
				<div className="text-[16px] font-[600] leading-[19px] mb-[8px]">목표등록현황</div>
				{menuGoals.map((goal, idx) => {
					if (idx < 2) {
						return (
							<div key={goal.goalId} className="mb-[7px]">
								<SideBarButton onClick={() => {}} bgColor="orange">
									<div className="flex justify-between w-full">
										<span className="text-primaryWhite truncate flex-1 text-left">{goal.goalName}</span>
										<span className="text-primaryWhite ml-[10px]">
											📅 {new Date(goal.limitDate).getMonth() + 1}. {new Date(goal.limitDate).getDate()}
										</span>
									</div>
								</SideBarButton>
							</div>
						);
					}
					return null;
				})}
				<SideBarButton
					label="목표등록 추가"
					onClick={() => openGoalRegModal({ name: 'GoalRegModal' })}
					bgColor="gray"
				/>
			</div>
			<div className="mb-[30px]">
				<div className="text-[16px] font-[600] leading-[19px] mb-[8px]">목표인증현황</div>
				{member && menuCerts?.length > 0 ? (
					menuCerts.map((cert, idx) => {
						if (idx < 2) {
							<SideBarButton key={cert.certId} onClick={() => {}} bgColor="black">
								<div className="flex justify-between w-full">
									<span className="text-primaryWhite truncate flex-1 text-left">목표 인증</span>
									<span className="text-primaryWhite ml-[10px]">
										{cert.successCount} / {cert.requireSuccessCount}회
									</span>
								</div>
							</SideBarButton>;
						}
						return null;
					})
				) : (
					<SideBarButton label="목표인증이 없습니다" onClick={() => {}} bgColor="gray" />
				)}
			</div>
			{member ? (
				<div>
					<div className="text-[16px] font-[600] leading-[19px] mb-[8px]">충전 잔액</div>
					<div className="text-[22px] font-[600] leading-[30px] mb-[4px]">{addComma(member.money)}원</div>
					<div className="flex gap-[10px]">
						<SideBarButton label="충전" onClick={() => navigate(Path.moneyCharge)} bgColor="gray" />
						<SideBarButton label="이체" onClick={() => navigate(Path.moneyTransfer)} bgColor="gray" />
					</div>
				</div>
			) : (
				<div>
					<div className="text-[16px] font-[600] leading-[19px] mb-[8px]">내 목표머니</div>
					<div className="text-[22px] font-[600] leading-[30px] mb-[4px]">0원</div>
					<div className="flex gap-[10px]">
						<SideBarButton label="충전" onClick={() => navigate(Path.login)} bgColor="gray" />
						<SideBarButton label="이체" onClick={() => navigate(Path.login)} bgColor="gray" />
					</div>
				</div>
			)}
		</div>
	);
}

export default React.memo(MenuBox);
