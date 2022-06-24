/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import { IPushNotice } from 'types/notification';
import { ReactComponent as DownArrow } from 'assets/icons/down-arrow.svg';

export default function AlarmModal() {
	const alarmList = useSelector((state: RootState) => state.pushNotice.pushNoticeList);

	const alarms = alarmList.map((alarm: IPushNotice) => {
		return (
			<div key={alarm.sendingTime} className="w-full max-h-[97px] p-3 mb-2 border-2 rounded-xl">
				<div className="flex justify-between mb-3 alram-header ">
					<div className="alarm-title text-primaryOrange-200">{alarm.category}</div>
					<div className="alarm-date">{alarm.sendingTime}</div>
				</div>
				<p className="line-clamp-2">{alarm.message}</p>
			</div>
		);
	});

	return (
		<>
			{alarms.length ? (
				alarms
			) : (
				<div className="leading-none text-primaryBlack-300 pc:mx-auto">지금은 알림이 없어요!</div>
			)}
			<div className="absolute bottom-0 left-0 w-full pb-[18px]">
				<DownArrow className="m-auto" stroke={`${alarms.length ? 'black' : '#A6A6A6'}`} />
			</div>
		</>
	);
}
