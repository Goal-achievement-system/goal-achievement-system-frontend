import React, { useEffect } from 'react';
import SubmitButton from 'components/Button/SubmitButton';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import adminSlice from 'store/slices/adminSlice';
import useGetActionState from 'hooks/useGetActionState';

export default function AnnouncementsDetailModal() {
	const { announcementsInfo } = useSelector((state: RootState) => state.admin);
	const [loadAnnouncementsInfoLoading, loadAnnouncementsInfoResult, loadAnnouncementsInfoInitResult] =
		useGetActionState(adminSlice.actions.loadAnnouncementsInfo.type);
	const className = {
		size: 'pc:w-[890px] max-w-[90vw] pc:max-h-[80vh] w-[320px] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	if (loadAnnouncementsInfoLoading) {
		return <div />;
	}

	return (
		<div
			className={`${className.size} ${className.translate} text-left pc:p-[72px] p-[24px] border-borderGray rounded-2xl relativ bg-modalGray overflow-auto`}
		>
			<div className="mb-[50px] flex items-center justify-between">
				<div className="font-[700] text-[30px] leading-[36px]">{announcementsInfo?.title}</div>
				{announcementsInfo && (
					<div className="flex items-center">
						{announcementsInfo.activation ? (
							<div className="rounded-[8px] p-[10px] text-[15px] bg-[#FFE8E8] text-[#FF6B6B]">활성</div>
						) : (
							<div className="rounded-[8px] p-[10px] text-[15px] bg-[#F4F4F4] text-[#C1C1C1]">비활성</div>
						)}
						<div className="ml-[16px]">
							{new Date(announcementsInfo.date).getFullYear()}.{new Date(announcementsInfo.date).getMonth() + 1}.
							{new Date(announcementsInfo.date).getDate()} 등록
						</div>
					</div>
				)}
			</div>
			<div className="mb-[30px]">
				<div className=" mb-[16px] font-[700] text-[22px] leading-[20px]">공지사항 배너</div>
				<img alt="공지사항 배너" className="w-full h-auto" src={announcementsInfo?.bannerImage} />
			</div>
			<div className="mb-[30px]">
				<div className=" mb-[16px] font-[700] text-[22px] leading-[20px]">공지사항 본문</div>
				<img alt="공지사항 본문" className="w-full h-auto" src={announcementsInfo?.image} />
			</div>
		</div>
	);
}
