import BaseTemplate from 'components/BaseTemplate';
import Main from 'components/Main';
import useModal from 'hooks/useModal';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import { IPushNotice } from 'types/notification';

export default function PushNoticeView() {
	// const { memberinfo } = useSelector((state: RootState) => state.member);
	const { pushNoticeList } = useSelector((state: RootState) => state.pushNotice);

	return (
		<Main title="알림" hasGoBack>
			<div className="relative divide-y-[1px]">
				<div className="flex flex-col pc:space-y-[16px]">
					<span className="px-[24px] py-[20px] pc:text-[22px] font-[600] text-[12px] rounded-[8px] bg-modalGray">
						읽지 않은 알람{' '}
						<span className="text-primaryOrange-200 pc:text-[22px] text-[12px]">{pushNoticeList.length}개</span>
					</span>
					<ul>
						{pushNoticeList.map(({ category, sendingTime, message, link }: IPushNotice) => (
							<div className="border-2 bg-alarmGray  border-borderGray pc:px-[24px] pc:pt-[24px] pc:pb-[20px] rounded-[16px] pc:h-[108px] flex flex-col justify-between">
								<div className="flex justify-between">
									<div className="text-primaryOrange-200 w-[100px] line-clamp-1">{category}</div>
									<div className="">{sendingTime}</div>
								</div>
								<div className="line-clamp-1">{message}</div>
							</div>
						))}
					</ul>
				</div>
			</div>
		</Main>
		// ) : (
		// 	<Main title="알림" hasGoBack>
		// 		<div className="relative">
		// 			<div className="flex flex-col pc:space-y-[16px]">
		// 				<span className="px-[24px] py-[20px] pc:text-[22px] font-[600] text-[12px] rounded-[8px] bg-modalGray">
		// 					읽지 않은 알람{' '}
		// 					<span className="text-primaryOrange-200 pc:text-[22px] text-[12px]">{pushNoticeList.length}개</span>
		// 				</span>
		// 				<ul>
		// 					{pushNoticeList.map(({ category, sendingTime, message, link }: IPushNotice) => (
		// 						<div className="border-2 bg-alarmGray  border-borderGray pc:px-[24px] pc:pt-[24px] pc:pb-[20px] rounded-[16px] pc:h-[108px] flex flex-col justify-between">
		// 							<div className="flex justify-between">
		// 								<div className="text-primaryOrange-200 w-[100px] line-clamp-1">{category}</div>
		// 								<div className="">{sendingTime}</div>
		// 							</div>
		// 							<div className="line-clamp-1">{message}</div>
		// 						</div>
		// 					))}
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</Main>
		// );
	);
}
