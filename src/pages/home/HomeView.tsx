import React from 'react';
import MenuBox from '../../components/Box/MenuBox';
import SmallBox from '../../components/Box/SmallBox';
import { Member } from '../../types/member';

export interface Props {
	member: Member | null;
}

function HomeView({ member }: Props) {
	return (
		<div className="min-w-[360px] pc:w-[1200px] pc:flex my-0 mx-auto p-[20px] pc:p-12 pc:box-content">
			<div className="hidden pc:block mr-[30px]">
				<MenuBox member={member} />
			</div>
			<div className="flex-1">
				<div className="relative rounded-[16px] w-full h-[147px] pc:h-[270px] mb-[30px] bg-primaryOrange-200">
					<button
						type="button"
						className="absolute bottom-[8px] right-[8px] pc:bottom-[16px] pc:right-[16px] rounded-[8px] p-[8px] text-white text-[10px] pc:text-[16px] font-[600] leading-[12px] pc:leading-[19.2px] bg-opacity-[30%] bg-black inline-block"
					>
						1/3 전체보기
					</button>
				</div>
				<div className="flex justify-between items-center mb-[30px]">
					<div className="text-[30px] font-[800] leading-[36px]">목표인증</div>
					<button type="button" className="text-[22px] font-[600] leading-[30px] text-primaryBlack-200">
						더보기
					</button>
				</div>
				<ul className="flex flex-wrap gap-x-[16px] pc:gap-x-[30px] gap-y-[16px] pc:gap-y-[30px]">
					{[0, 1, 2, 3, 4, 5].map((item, idx) => (
						<li key={item}>
							<SmallBox
								goal={{
									goalId: 1,
									memberEmail: '',
									category: '취미',
									goalName: '목표인증 텍스트',
									content: '목표 내용',
									limitDate: new Date(2022, 5, 25),
									money: 10000,
									reward: 'high',
									verificationResult: 'ongoing',
								}}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default HomeView;
