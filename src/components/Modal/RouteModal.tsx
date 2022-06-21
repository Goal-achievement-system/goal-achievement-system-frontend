import React, { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/slices';
import handleLogout from 'utils/handleLogout';
import AlarmPopup from './AlarmModal';
import UserProfilePopUp from './UserProfileModal';

interface Props {
	title: '로그인 관리' | '알림';
	// isLogin: boolean;
	alarmList?: Alarm[];
	isOpen: boolean;
	setIsOpen?: Dispatch<SetStateAction<boolean[]>>;
}

interface Alarm {
	title: string;
	content: string;
	date: number;
}

const data = [
	{
		title: 'title',
		content: '골키퍼를 소개할게요!',
		date: 1,
	},
	{
		title: 'title',
		content:
			"'골키퍼 디자인 하기' 목표등록이 완료되었어요. 지금 확인해보세요' '골키퍼 디자인 하기' 목표등록이 완료되었어요. 지금 확인해보세요'",
		date: 2,
	},
	{
		title: 'title',
		content: '검토 요청완료! 빠르게 검토 후 알려드릴게요',
		date: 3,
	},
	{
		title: 'title',
		content: '검토 요청완료! 빠르게 검토 후 알려드릴게요',
		date: 4,
	},
	{
		title: 'title',
		content: '검토 요청완료! 빠르게 검토 후 알려드릴게요',
		date: 5,
	},
];

export default function RouteModal({ title, alarmList = data, isOpen, setIsOpen }: Props) {
	const { memberinfo } = useSelector((state: RootState) => state.member);
	// eslint-disable-next-line consistent-return
	const closePopUp = () => {
		if (!setIsOpen) return null;
		setIsOpen((current: boolean[]) => {
			const newIsOpen = current.map(() => false);
			return newIsOpen;
		});
	};

	if (!memberinfo) {
		return (
			<div className="absolute right-0 z-50">
				<div
					className={`w-[380px] h-[286px] p-6 flex flex-col rounded-2xl border-2 text-left bg-white ${
						isOpen ? '' : 'hidden'
					}`}
				>
					<div className="font-[600]">{title}</div>
					<div className="pc:my-auto max-h-[270px] flex flex-col space-y-[40px] justify-center items-center">
						<div className=" text-primaryBlack-300">로그인 후 이용할 수 있습니다.</div>
					</div>
					<div className="w-full">
						<Link to="/login" className="block">
							<button
								type="button"
								className="w-full border-2 rounded-[8px] border-borderGray pc:px-[29px] pc:py-[15px] text-primaryBlack-300"
								onClick={() => closePopUp()}
							>
								로그인
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="absolute right-0 z-50">
			<div
				className={`w-[380px] ${
					title === '알림' ? 'h-[391px]' : 'h-[286px]'
				} p-6 flex flex-col rounded-2xl border-2 text-left bg-white ${isOpen ? '' : 'hidden'}`}
			>
				<div className="font-[600] absolute">{title}</div>
				{title === '알림' ? (
					<div className="pc:my-auto overflow-auto pc:max-h-[270px] flex flex-col justify-center pc:min-h-[270px]">
						<AlarmPopup />
					</div>
				) : (
					<div className="pc:mt-[50px]">
						<UserProfilePopUp handleLogout={handleLogout} closePopUp={closePopUp} />
					</div>
				)}
			</div>
		</div>
	);
}
