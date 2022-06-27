import Main from 'components/Main';
import React, { useState } from 'react';
import { NoticeCategory } from 'types/notice';
import FilterButton from 'components/Button/FilterButton';

function NoticeView() {
	return (
		<Main title="공지사항">
			<ul className="flex flex-col gap-y-[8px] pc:gap-y-[30px]">
				<li className="cursor-pointer">
					<div className="rounded-[8px] pc:rounded-[16px] w-full h-[147px] pc:h-[269px] bg-primaryOrange-200" />
				</li>
				<li className="cursor-pointer">
					<div className="rounded-[8px] pc:rounded-[16px] w-full h-[147px] pc:h-[269px] bg-primaryBlack-500" />
				</li>
				<li className="cursor-pointer">
					<div className="rounded-[8px] pc:rounded-[16px] w-full h-[147px] pc:h-[269px] bg-green-600" />
				</li>
			</ul>
		</Main>
	);
}

export default NoticeView;
