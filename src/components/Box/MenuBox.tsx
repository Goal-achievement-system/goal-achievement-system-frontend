import React from 'react';
import { Member } from 'types/member';

export interface Props {
	member: Member | null;
}

function MenuBox({ member }: Props) {
	return (
		<div className="rounded-[16px] w-[278px] p-[24px] border-[1px] border-borderGray overflow-hidden bg-white">
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
			<div className="mb-[30px]">
				<div className="text-[16px] font-[600] leading-[19px] mb-[8px]">목표등록현황</div>
				<ul className="p-[16px] rounded-[8px] bg-primaryOrange-100 text-[16px] font-[500] leading-[19px]">
					<li className="flex justify-between mb-[16px]">
						<div className="flex items-center">목표 등록</div>
						<div className="text-primaryOrange-200">0</div>
					</li>
					<li className="flex justify-between mb-[16px]">
						<div className="flex items-center">목표 인증</div>
						<div className="text-primaryOrange-200">0</div>
					</li>
					<li className="flex justify-between mb-[16px]">
						<div className="flex items-center">
							목표 성공
							{member && (
								<div className="rounded-[4px] bg-primaryOrange-200 px-[6px] py-[4px] text-[12px] font-[600] leading-[14.4px] ml-[8px] text-white">
									+32,000원
								</div>
							)}
						</div>
						<div className="text-primaryOrange-200">0</div>
					</li>
					<li className="flex justify-between">
						<div className="flex items-center">목표 실패</div>
						<div className="text-primaryOrange-200">0</div>
					</li>
				</ul>
			</div>
			<div className="mb-[30px]">
				<div className="text-[16px] font-[600] leading-[19px] mb-[8px]">목표등록현황</div>
				{member &&
					['4.1', '4.2'].map((item) => (
						<div
							key={`key_${item}`}
							className="flex justify-between text-white w-full rounded-[8px] py-[16px] px-[14px] bg-primaryOrange-200 text-[16px] font-[500] leading-[19px] mb-[7px]"
						>
							<div>목표인증</div>
							<div>📅 {item}</div>
						</div>
					))}
				<button
					type="button"
					className="w-full rounded-[8px] py-[16px] px-[14px] bg-[#FAFAFA] text-[16px] font-[500] leading-[19px]"
				>
					목표등록 추가
				</button>
			</div>
			<div className="mb-[30px]">
				<div className="text-[16px] font-[600] leading-[19px] mb-[8px]">목표인증현황</div>
				{member ? (
					<div className="flex justify-between w-full rounded-[8px] py-[16px] px-[14px] bg-black text-white text-[16px] font-[500] leading-[19px]">
						<div>목표인증 텍스트</div>
						<div>0/10회</div>
					</div>
				) : (
					<div className="w-full rounded-[8px] py-[16px] px-[14px] bg-[#FAFAFA] text-[16px] font-[500] leading-[19px]">
						목표인증이 없습니다
					</div>
				)}
			</div>
			<div>
				<div className="text-[16px] font-[600] leading-[19px] mb-[8px]">내 목표머니</div>
				<div className="text-[22px] font-[600] leading-[30px] mb-[4px]">0원</div>
				<div className="flex gap-[10px]">
					<button
						type="button"
						className="rounded-[8px] flex-1 p-[16px] text-[16px] font-[500] leading-[19px] bg-[#FAFAFA]"
					>
						충전
					</button>
					<button
						type="button"
						className="rounded-[8px] flex-1 p-[16px] text-[16px] font-[500] leading-[19px] bg-[#FAFAFA]"
					>
						이체
					</button>
				</div>
			</div>
		</div>
	);
}

export default React.memo(MenuBox);
