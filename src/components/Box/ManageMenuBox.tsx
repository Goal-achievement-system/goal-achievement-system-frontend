import React from 'react';
import { Member } from 'types/member';

export interface Props {
	member: Member | null;
	active: string;
}

function ManageMenuBox({ member, active }: Props) {
	return (
		<div className="rounded-[16px] w-[278px] p-[24px] border-[1px] border-borderGray overflow-hidden">
			<div className="border-b-[1px] border-borderGray pb-[16px] mb-[16px]">
				{member ? (
					<>
						<div className="test-[22px] font-[600] leading-[30px] mb-[4px]">{member.nickName}</div>
						<div className="text-[16px] text-primaryOrange-200 font-[600px] leading-[19px]">{member.email}</div>
					</>
				) : (
					<>
						<div className="test-[22px] font-[600] leading-[30px] mb-[4px]">로그인을 해주세요</div>
						<a href="/#" className="text-[16px] text-primaryOrange-200 font-[600px] leading-[19px]">
							바로가기 &gt;
						</a>
					</>
				)}
			</div>
			<ul>
				<li
					className={`text-[16px] font-[600] leading-[19px] mb-[29px] ${
						active === '회원관리' ? 'text-black' : 'text-primaryBlack-300'
					}`}
				>
					회원관리
				</li>
				<li
					className={`text-[16px] font-[600] leading-[19px] mb-[29px] ${
						active === '목표 통계' ? 'text-black' : 'text-primaryBlack-300'
					}`}
				>
					목표 통계
				</li>
				<li
					className={`text-[16px] font-[600] leading-[19px] mb-[29px] ${
						active === '목표 검토' ? 'text-black' : 'text-primaryBlack-300'
					}`}
				>
					목표 검토
				</li>
				<li
					className={`text-[16px] font-[600] leading-[19px] mb-[29px] ${
						active === '공지사항' ? 'text-black' : 'text-primaryBlack-300'
					}`}
				>
					공지사항
				</li>
				<li
					className={`text-[16px] font-[600] leading-[19px] mb-[29px] ${
						active === '팝업' ? 'text-black' : 'text-primaryBlack-300'
					}`}
				>
					팝업
				</li>
				<li
					className={`text-[16px] font-[600] leading-[19px] mb-[29px] ${
						active === '알림' ? 'text-black' : 'text-primaryBlack-300'
					}`}
				>
					알림
				</li>
				<li
					className={`text-[16px] font-[600] leading-[19px] ${
						active === '로그인' ? 'text-black' : 'text-primaryBlack-300'
					}`}
				>
					로그인
				</li>
			</ul>
		</div>
	);
}

export default React.memo(ManageMenuBox);
