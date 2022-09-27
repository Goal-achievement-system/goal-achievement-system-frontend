import React from 'react';
import { Link } from 'react-router-dom';
import { IPushNotice } from 'types/notification';
import Path from 'utils/path';

interface Props {
	pushNoticeList: IPushNotice[];
}
export default function MyPageAlarmView({ pushNoticeList }: Props) {
	return (
		<div className="pc:mt-[60px] pc:block hidden">
			<div className="flex justify-between items-center mb-[30px]">
				<div
					className="font-[800] text-[20px] leading-[24px] pc:font-[800] pc:text-[30px]
				pc:leading-[36px]"
				>
					알림
				</div>
				<Link
					to={Path.pushNotice}
					type="button"
					className="font-[800] text-[20px] leading-[24px] pc:font-[600] pc:text-[22px]
						pc:leading-[30px] text-primaryBlack-200"
				>
					더보기
				</Link>
			</div>
			<div className="relative">
				<div className="flex flex-col pc:space-y-[16px]">
					<span className="px-[24px] py-[20px] pc:text-[22px] font-[600] text-[12px] rounded-[8px] bg-modalGray">
						읽지 않은 알람{' '}
						<span className="text-primaryOrange-200 pc:text-[22px] text-[12px]">{pushNoticeList.length}개</span>
					</span>
				</div>
			</div>
		</div>
	);
}
