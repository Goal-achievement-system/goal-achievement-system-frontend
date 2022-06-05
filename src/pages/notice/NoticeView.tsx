import Main from 'components/Main';
import React, { useState } from 'react';
import { NoticeCategory } from 'types/notice';
import FilterButton from '../../components/Button/FilterButton';

function NoticeView() {
	const [category, setCategory] = useState<NoticeCategory>('all');
	return (
		<Main title="공지사항">
			<div>
				<ul className="flex gap-x-[6px] pc:gap-x-[8px] mb-[17px] pc:mb-[30px]">
					<FilterButton
						onClick={() => {
							setCategory('all');
						}}
						label="전체"
						isSelected={category === 'all'}
					/>
					<FilterButton
						onClick={() => {
							setCategory('notice');
						}}
						label="공지사항"
						isSelected={category === 'notice'}
					/>
					<FilterButton
						onClick={() => {
							setCategory('event');
						}}
						label="이벤트"
						isSelected={category === 'event'}
					/>
				</ul>
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
			</div>
		</Main>
	);
}

export default NoticeView;
