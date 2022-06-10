import React, { useState } from 'react';
import Main from 'components/Main';

import { CertCategories, CertCategoryType } from 'types/certification';
import FilterButton from 'components/Button/FilterButton';
import SmallBox from 'components/Box/SmallBox';
import { Goal } from 'types/goal';
import LargeBox from 'components/Box/LargeBox';
import Pagination from 'components/Pagination';

const goalTemp: Goal = {
	goalId: 1,
	memberEmail: '',
	category: '취미',
	goalName: '목표인증 텍스트',
	content: '목표 내용',
	limitDate: new Date(2022, 5, 25),
	money: 10000,
	reward: 'high',
	verificationResult: 'ongoing',
};
interface Props {
	isLoading: boolean;
	goalList: Goal[];
}
function CertificationsView({ isLoading, goalList }: Props) {
	const [curCategory, setCurCategory] = useState<CertCategoryType>('all');
	const [isOneColumnMode, setIsOneColumnMode] = useState<boolean>(false);
	const [curPage, setCurPage] = useState<number>(1);
	console.log(isLoading);
	return (
		<Main title="목표인증">
			{isLoading ? (
				<span>Loading...</span>
			) : (
				<div className="mb-[30px]">
					<div className="flex justify-between items-center mb-[17px] pc:mb-[30px]">
						<ul className="flex gap-x-[6px] pc:gap-x-[8px] ">
							{CertCategories.map((category) => (
								<FilterButton
									onClick={() => {
										setCurCategory(category.type);
									}}
									label={`# ${category.label}`}
									isSelected={curCategory === category.type}
								/>
							))}
						</ul>
						<button type="button" onClick={() => setIsOneColumnMode((prev) => !prev)}>
							<svg
								className="w-12 h-12"
								fill="bg-primaryBlack"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
								/>
							</svg>
						</button>
					</div>
					{isOneColumnMode ? (
						<ul className=" grid grid-cols-1 gap-x-[16px] pc:gap-x-[30px] gap-y-[16px] pc:gap-y-[30px]">
							{goalList.map((goal, idx) => (
								// eslint-disable-next-line react/no-array-index-key
								<li key={idx}>
									<LargeBox goal={goal} />
								</li>
							))}
						</ul>
					) : (
						<ul className=" grid grid-cols-3 gap-x-[16px] pc:gap-x-[30px] gap-y-[16px] pc:gap-y-[30px]">
							{[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, idx) => (
								// eslint-disable-next-line react/no-array-index-key
								<li key={idx}>
									<SmallBox goal={goalTemp} />
								</li>
							))}
						</ul>
					)}
				</div>
			)}
			<Pagination curPage={curPage} setCurPage={setCurPage} numOfPages={7} numOfPageBtn={3} />
		</Main>
	);
}

export default CertificationsView;
