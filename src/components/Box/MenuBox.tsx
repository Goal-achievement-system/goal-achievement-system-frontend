import React from 'react';
import { Link } from 'react-router-dom';
import { Member } from 'types/member';
import Path from 'utils/path';
import SideBarButton from '../Button/SideBarButton';

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
						<Link to={Path.login} className="text-[16px] text-primaryOrange-200 font-[600px] leading-[19px]">
							바로가기 &gt;
						</Link>
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
						<div key={item} className="mb-[7px]">
							<SideBarButton key={`key_${item}`} onClick={() => {}} bgColor="orange">
								<div className="flex justify-between w-full">
									<span className="text-primaryWhite">목표인증</span>
									<span className="text-primaryWhite">📅 {item}</span>
								</div>
							</SideBarButton>
						</div>
					))}
				<SideBarButton label="목표등록 추가" onClick={() => {}} bgColor="gray" />
			</div>
			<div className="mb-[30px]">
				<div className="text-[16px] font-[600] leading-[19px] mb-[8px]">목표인증현황</div>
				{member ? (
					<SideBarButton onClick={() => {}} bgColor="black">
						<div className="flex justify-between w-full">
							<span className="text-primaryWhite">목표인증 텍스트</span>
							<span className="text-primaryWhite">4.1</span>
						</div>
					</SideBarButton>
				) : (
					<SideBarButton label="목표인증이 없습니다" onClick={() => {}} bgColor="gray" />
				)}
			</div>
			<div>
				<div className="text-[16px] font-[600] leading-[19px] mb-[8px]">내 목표머니</div>
				<div className="text-[22px] font-[600] leading-[30px] mb-[4px]">0원</div>
				<div className="flex gap-[10px]">
					<SideBarButton label="충전" onClick={() => {}} bgColor="gray" />
					<SideBarButton label="이체" onClick={() => {}} bgColor="gray" />
				</div>
			</div>
		</div>
	);
}

export default React.memo(MenuBox);
