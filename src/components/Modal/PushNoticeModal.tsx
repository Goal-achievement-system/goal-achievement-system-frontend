/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
// import { IPushNotice } from 'types/notification';
import { ReactComponent as DownArrow } from 'assets/icons/down-arrow.svg';
// import { Link } from 'react-router-dom';
// import { getPushDay } from 'utils/common';
import PushNoticeBox from 'components/Box/PushNoticeBox';

export default function PushNoticeModal() {
	const { pushNoticeList } = useSelector((state: RootState) => state.pushNotice);

	return (
		<>
			{pushNoticeList.length ? (
				<div>
					<PushNoticeBox pushNoticeList={pushNoticeList} />
				</div>
			) : (
				<div className="flex items-center justify-center h-full leading-none text-primaryBlack-300 pc:mx-auto">
					지금은 알림이 없어요!
				</div>
			)}
			<div className="absolute bottom-0 left-0 w-full pb-[18px]">
				<DownArrow className="m-auto" stroke={`${pushNoticeList.length ? 'black' : '#A6A6A6'}`} />
			</div>
		</>
	);
}
