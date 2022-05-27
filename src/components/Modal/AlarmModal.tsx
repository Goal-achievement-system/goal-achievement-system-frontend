/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

interface Alarm {
	title: string;
	content: string;
	date: number;
}

interface Props {
	alarmList: Alarm[];
}

export default function AlarmModal({ alarmList }: Props) {
	const alarms = alarmList.map((alarm: Alarm) => {
		return (
			<div key={alarm.date} className="w-full max-h-[97px] p-3 mb-2 border-2 rounded-xl">
				<div className="flex justify-between mb-3 alram-header ">
					<div className="alarm-title text-primaryOrange-200">{alarm.title}</div>
					<div className="alarm-date">{alarm.date}</div>
				</div>
				<p className="line-clamp-2">{alarm.content}</p>
			</div>
		);
	});
	return <>{alarms}</>;
}
