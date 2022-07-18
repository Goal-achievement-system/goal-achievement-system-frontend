import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch } from 'store';
import pushNoticeSlice from 'store/slices/pushNotice';
import { IPushNoticeView } from 'types/notification';
import { getPushDay } from 'utils/common';

export interface Props {
	pushNoticeList: IPushNoticeView[];
}
export default function PushNoticeBox({ pushNoticeList }: Props) {
	const dispatch: AppDispatch = useDispatch();

	const handleOnClick = (notificationId: number) => {
		dispatch(pushNoticeSlice.actions.processReadNotification(notificationId));
	};

	const getContentColor = (read: boolean): string => {
		if (!read) return 'text-primaryBlack-300';
		return 'text-primaryBlack-400';
	};
	const getCategoryColor = (read: boolean): string => {
		if (!read) return 'text-primaryOrange-200';
		return 'text-primaryBlack-300';
	};
	return (
		<ul className="flex flex-col space-y-[8px]">
			{pushNoticeList.map(({ notificationId, content, date, url, category, read }: IPushNoticeView) => (
				<li className={`push-notice-${notificationId}`} key={notificationId}>
					<Link to={url} onClick={() => handleOnClick(notificationId)}>
						<div className="flex flex-col justify-between border-[1px] border-borderGray pc:px-[24px] pc:pt-[24px] pc:pb-[20px] pc:h-[108px] pc:rounded-[16px] p-[12px] rounded-[12px]  ">
							<div className="flex justify-between">
								<div className={`${getCategoryColor(read)} w-[100px] line-clamp-1`}>{category}</div>
								<div className="text-primaryBlack-300">{getPushDay(date)}</div>
							</div>
							<div className={`${getContentColor(read)} line-clamp-1`}>{content}</div>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
}
