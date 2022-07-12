import React from 'react';
import { Link } from 'react-router-dom';
import { IPushNotice, IPushNoticeView } from 'types/notification';
import { getPushDay } from 'utils/common';

export interface Props {
	pushNoticeList: IPushNoticeView[];
}
export default function PushNoticeBox({ pushNoticeList }: Props) {
	return (
		<ul className="flex flex-col space-y-[8px]">
			{pushNoticeList.map(({ notificationId, content, date, url, category, read }: IPushNoticeView) => (
				<li className={`push-notice-${notificationId}`} key={notificationId}>
					<Link to={url}>
						<div className="flex flex-col justify-between border-2 bg-alarmGray  border-borderGray pc:px-[24px] pc:pt-[24px] pc:pb-[20px] pc:h-[108px] pc:rounded-[16px] p-[12px] rounded-[12px]  ">
							<div className="flex justify-between">
								<div className="text-primaryOrange-200 w-[100px] line-clamp-1">{category}</div>
								<div className="">{getPushDay(date)}</div>
							</div>
							<div className="line-clamp-1">{content}</div>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
}
