import React, { useState } from 'react';
import { NoticeCategory } from 'types/notice';
import MenuBox from '../../components/Box/MenuBox';
import FilterButton from '../../components/Button/FilterButton';
import Header from '../../components/Header/Header';
import { Member } from '../../types/member';

export interface Props {
	member: Member | null;
}

function NoticeView({ member }: Props) {
	const [category, setCategory] = useState<NoticeCategory>('all');
	return (
		<div>
			<Header />
			<div className="min-w-[360px] pc:w-[1200px] pc:flex my-0 mx-auto p-[20px] pc:p-0 mt-[20px] pc:box-content">
				<div className="hidden pc:block mr-[30px]">
					<MenuBox member={member} />
				</div>
				<div className="flex-1">
					<div className="mb-[16px] pc:mb-[30px] font-[800] text-[20px] leading-[24px] pc:font-[800] pc:text-[30px] pc:leading-[36px]">
						공지사항
					</div>
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
			</div>
		</div>
	);
}

export default NoticeView;
