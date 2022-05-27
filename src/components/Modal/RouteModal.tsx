import React from 'react';

import AlarmPopup from './AlarmModal';
import UserProfilePopUp from './UserProfileModal';

interface Props {
	title: '개인정보 수정' | '알림';
	isLogin: boolean;
	alarmList?: Alarm[];
	isOpen: boolean;
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

export default function RouteModal({ title, isLogin = false, alarmList = data, isOpen }: Props) {
	if (!isLogin) {
		return (
			<div className={`w-[380px] max-h-[391px] p-6 rounded-2xl border-2 text-left bg-white ${isOpen ? '' : 'hidden'}`}>
				<header className="">{title}</header>
				<div className="overflow-auto popup-body mt-7 mb-4 max-h-[270px]">
					<div className="py-10 text-center">로그인 후 이용해 주세요</div>
				</div>
				<div className="text-right">
					<button type="button" className="text-right border-2">
						로그인
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className={`w-[380px] max-h-[391px] p-6 rounded-2xl border-2 text-left bg-white ${isOpen ? '' : 'hidden'}`}>
			<header className="font-[700]">{title}</header>
			<div className="overflow-auto popup-body mt-7 mb-4 max-h-[270px]">
				{title === '알림' ? <AlarmPopup alarmList={alarmList} /> : <UserProfilePopUp />}
			</div>
			<div className="text-right">
				{title === '알림' && <img className="m-auto" src="./image/icon/down-arrow.svg" alt="down-arrow" />}
			</div>
		</div>
	);
}
