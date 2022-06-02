import React from 'react';
import { Link } from 'react-router-dom';
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
			<div className="absolute right-0">
				<div className={`w-[380px] h-[226px] p-6 rounded-2xl border-2 text-left bg-white ${isOpen ? '' : 'hidden'}`}>
					<div className="font-[600]">{title}</div>
					<div className="overflow-auto pc:m-auto pc:h-full max-h-[270px] flex flex-col space-y-[40px] justify-center items-center">
						<div>로그인 후 이용할 수 있습니다.</div>
						<div>
							<Link to="/login">
								<button type="button" className=" border-2 rounded-[8px] border-borderGray pc:px-[29px] pc:py-[15px]">
									로그인
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="absolute right-0">
			<div className={`w-[380px] h-[391px] p-6 rounded-2xl border-2 text-left bg-white ${isOpen ? '' : 'hidden'}`}>
				<div className="font-[700]">{title}</div>
				<div className="overflow-auto popup-body mt-7 mb-2 pc:max-h-[270px] pc:min-h-[270px]">
					{/* {title === '알림' ? <AlarmPopup alarmList={alarmList} /> : <UserProfilePopUp isOpen={isOpen} />} */}
					{title === '알림' ? <AlarmPopup /> : <UserProfilePopUp isOpen={isOpen} />}
				</div>
				{/* <div className="">
					{title === '알림' && <img className="m-auto" src="./image/icon/down-arrow.svg" alt="down-arrow" />}
				</div> */}
			</div>
		</div>
	);
}
