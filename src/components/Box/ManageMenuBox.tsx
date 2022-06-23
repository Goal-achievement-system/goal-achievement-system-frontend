import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Member } from 'types/member';
import Path from 'utils/path';

export interface Props {
	member: Member | null;
}

function ManageMenuBox({ member }: Props) {
	const active = '회원관리';
	const { pathname } = useLocation();

	return (
		<div className="rounded-[16px] w-[278px] p-[24px] border-[1px] border-borderGray overflow-hidden">
			<div className="border-b-[1px] border-borderGray pb-[16px] mb-[30px]">
				<div className="test-[22px] font-[600] leading-[30px]">관리자</div>
			</div>
			<ul>
				<li
					className={`text-[16px] font-[600] leading-[19px] mb-[29px] ${
						pathname === Path.inspection ? 'text-black' : 'text-primaryBlack-300'
					}`}
				>
					<Link to={Path.inspection}>목표 검토</Link>
				</li>
				<li
					className={`text-[16px] font-[600] leading-[19px] mb-[29px] ${
						pathname === Path.announcements ? 'text-black' : 'text-primaryBlack-300'
					}`}
				>
					<Link to={Path.announcements}>공지사항</Link>
				</li>
			</ul>
		</div>
	);
}

export default React.memo(ManageMenuBox);
