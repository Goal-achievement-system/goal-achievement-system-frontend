/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import { Notification } from 'types/notification';
// interface Alarm {
// 	title: string;
// 	content: string;
// 	date: number;
// }

// interface Props {
// 	alarmList: Alarm[];
// }

// export default function AlarmModal({ alarmList }: Props) {
export default function AlarmModal() {
	const alarmList = useSelector((state: RootState) => state.notifications.notificationList);

	const alarms = alarmList.map((alarm: Notification) => {
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
				<div className="block w-full h-full text-center ">
					<div>알림이 없습니다 🍎</div>
				</div>
			)}
			{alarms.length > 3 && (
				<div className="">
					<img className="m-auto" src="./image/icon/down-arrow.svg" alt="down-arrow" />
				</div>
			)}
		</>
	);
}
