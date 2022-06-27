import Main from 'components/Main';
import React, { useState } from 'react';
import { NoticeCategory } from 'types/notice';
import FilterButton from 'components/Button/FilterButton';

function AnnouncementsView() {
	return (
		<Main title="공지사항">
			<ul className="flex flex-col gap-y-[8px] pc:gap-y-[30px]">
				<li className="cursor-pointer">
					<img
						alt="announcements1"
						src="image/announcements/announcements1.png"
						className="rounded-[8px] pc:rounded-[16px] w-full h-[147px] pc:h-[269px] bg-primaryOrange-200"
					/>
				</li>
				<li className="cursor-pointer">
					<img
						alt="announcements2"
						src="image/announcements/announcements2.png"
						className="rounded-[8px] pc:rounded-[16px] w-full h-[147px] pc:h-[269px] bg-primaryBlack-500"
					/>
				</li>
				<li className="cursor-pointer">
					<img
						alt="announcements3"
						src="image/announcements/announcements3.png"
						className="rounded-[8px] pc:rounded-[16px] w-full h-[147px] pc:h-[269px] bg-green-600"
					/>
				</li>
			</ul>
		</Main>
	);
}

export default AnnouncementsView;
