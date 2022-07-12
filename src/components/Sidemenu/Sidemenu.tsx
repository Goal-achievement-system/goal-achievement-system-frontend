import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'utils/path';
import { ReactComponent as Union } from 'assets/icons/union.svg';
import { ReactComponent as Alarm } from 'assets/icons/alarm.svg';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';

interface Props {
	handleClickOfSideMenu: () => void;
}

export default function SideMenu({ handleClickOfSideMenu }: Props) {
	const { memberinfo } = useSelector((state: RootState) => state.member);
	const { goalStatistics } = useSelector((state: RootState) => state.member);

	const sideNavigates = [
		{ text: '목표 인증', to: Path.certifications },
		{ text: '목표머니 충전', to: Path.moneyCharge },
		{ text: '목표머니 이체', to: Path.moneyTransfer },
		{ text: '내 목표', to: Path.myGoals },
		{ text: '', to: '' },
		{ text: '공지사항', to: Path.announcements },
		{ text: '설정', to: Path.setting },
	];

	return (
		<div className="absolute top-0 left-0 z-50 w-full h-full pc:hidden">
			<div className="absolute top-0 bottom-0 left-0 right-0 bg-primaryBlack-500 opacity-20" />
			<aside className="absolute top-0 right-0 h-full overflow-auto w-[265px] bg-primaryWhite">
				<div className="p-[20px] flex flex-col">
					<div className="basis-[72px] flex justify-between items-center">
						<button type="button" onClick={handleClickOfSideMenu}>
							<Union />
						</button>
						<button type="button" onClick={handleClickOfSideMenu}>
							<Link to={Path.pushNotice}>
								<Alarm />
							</Link>
						</button>
					</div>
					<div className="basis-[109px] flex flex-col items-center space-y-[20px]">
						<button
							className="w-full pt-[20px] text-[20px] font-[600] text-left"
							type="button"
							onClick={handleClickOfSideMenu}
						>
							<Link className="side-menu-user-name" to={memberinfo ? Path.myGoals : Path.login}>
								{memberinfo ? memberinfo.nickName : '로그인 해주세요'}
							</Link>
						</button>
						<div className="flex-grow w-full">
							<div>
								<ul className="flex justify-between">
									<li>
										<div className="text-[20px] text-primaryOrange-200 pb-[8px]">
											{goalStatistics ? goalStatistics.totalGoalCount : 0}
										</div>
										<p>목표등록</p>
									</li>
									<li>
										<div className="text-[20px] text-primaryOrange-200 pb-[8px]">
											{goalStatistics ? goalStatistics.totalOngoingGoalCount : 0}
										</div>
										<p>목표인증</p>
									</li>
									<li>
										<div className="text-[20px] text-primaryOrange-200 pb-[8px]">
											{goalStatistics ? goalStatistics.totalSuccessGoalCount : 0}
										</div>
										<p>목표 성공</p>
									</li>
									<li>
										<div className="text-[20px] text-primaryOrange-200 pb-[8px]">
											{goalStatistics ? goalStatistics.totalFailGoalCount : 0}
										</div>
										<p>목표 실패</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="grow-0">
						<ul className="">
							{sideNavigates.map(({ text, to }) =>
								!text && !to ? (
									<div key={to} className="border-b-[1px]" />
								) : (
									<li key={to} className="text-[16px] font-[600] w-full h-[59px]">
										<Link className="leading-[59px]" to={to} onClick={handleClickOfSideMenu}>
											{text}
										</Link>
									</li>
								)
							)}
						</ul>
					</div>
				</div>
			</aside>
		</div>
	);
}
