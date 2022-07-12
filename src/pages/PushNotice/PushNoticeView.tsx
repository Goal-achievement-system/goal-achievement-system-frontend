import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import Main from 'components/Main';
import PushNoticeBox from 'components/Box/PushNoticeBox';

export default function PushNoticeView() {
	const { pushNoticeList } = useSelector((state: RootState) => state.pushNotice);

	return (
		<Main title="알림" hasGoBack>
			<div className="relative divide-y-[1px]">
				<div className="flex flex-col pc:space-y-[16px]">
					<span className="px-[24px] py-[20px] pc:text-[22px] font-[600] text-[12px] rounded-[8px] bg-modalGray">
						읽지 않은 알람{' '}
						<span className="text-primaryOrange-200 pc:text-[22px] text-[12px]">{pushNoticeList.length}개</span>
					</span>
					<PushNoticeBox pushNoticeList={pushNoticeList} />
				</div>
			</div>
		</Main>
	);
}
