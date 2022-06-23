import React, { useEffect } from 'react';
import SubmitButton from 'components/Button/SubmitButton';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';

interface Props {
	index: number;
}

export default function AnnounceMentsEditModal({ index }: Props) {
	const announceMents = useSelector((state: RootState) => state.admin.announcementsList?.announcements[index]);
	const className = {
		size: 'pc:w-[890px] max-w-[90vw] pc:max-h-[80vh] w-[320px] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	return (
		<div
			className={`${className.size} ${className.translate} text-left pc:p-[72px] p-[24px] border-borderGray rounded-2xl relativ bg-modalGray overflow-auto`}
		>
			<div className="mb-[30px] flex items-center justify-between">
				<div className="font-[700] text-[30px] leading-[36px]">{announceMents?.title}</div>
				{announceMents?.date && (
					<div>
						{new Date(announceMents?.date).getFullYear()}.{new Date(announceMents?.date).getMonth() + 1}.
						{new Date(announceMents?.date).getDate()}
					</div>
				)}
			</div>
			<div className="mb-[30px] flex gap-x-[23px]">
				<SubmitButton label="활성으로 전환" btnState="active" />
			</div>
			<div className="mb-[30px] rounded-[8px] h-[282px] w-full bg-[#E8E8E8]" />
			<div className="rounded-[8px] h-[282px] w-full bg-[#E8E8E8]" />
		</div>
	);
}
