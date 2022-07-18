import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';

export default function PushNoticeCountBox() {
	const { notReadPushNoticeNumber } = useSelector((state: RootState) => state.pushNotice);
	return (
		<span className="notReadPushNoticeCount px-[24px] py-[20px] pc:text-[22px] font-[600] text-[12px] rounded-[8px] bg-modalGray">
			읽지 않은 알람{' '}
			<span className="text-primaryOrange-200 pc:text-[22px] text-[12px]">{notReadPushNoticeNumber}개</span>
		</span>
	);
}
