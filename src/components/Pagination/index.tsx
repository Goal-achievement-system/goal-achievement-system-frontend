/* eslint-disable react/no-array-index-key */
import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import Element from 'components/Button/PaginationElement';

interface Props {
	numOfPages: number;
	numOfPageBtn: number;
	setCurPage: React.Dispatch<React.SetStateAction<number>>;
	curPage: number;
}
function Pagination({ numOfPages, setCurPage, curPage, numOfPageBtn }: Props) {
	const [slideNum, setSlideNum] = useState<number>(1);
	useEffect(() => {
		console.log(curPage, slideNum);
	}, [curPage, slideNum]);
	return (
		<div className="w-full flex justify-center items-center space-x-2">
			<Element
				btnType="arrow"
				isActive={slideNum > 1}
				arrDirection="left"
				onClick={() => {
					if (slideNum <= 1) return;
					setSlideNum((prev) => prev - 1);
					setCurPage(1 + (slideNum - 2) * numOfPageBtn);
				}}
			/>
			{[...Array(numOfPageBtn)].map((_, idx) => {
				const btnNum = idx + 1 + (slideNum - 1) * numOfPageBtn;
				// eslint-disable-next-line react/no-array-index-key
				if (btnNum > numOfPages) return null;

				return (
					<Element
						key={btnNum}
						btnType="number"
						isActive={curPage === btnNum}
						number={btnNum}
						onClick={() => setCurPage(btnNum)}
					/>
				);
			})}
			<Element
				btnType="arrow"
				isActive={slideNum < Math.ceil(numOfPages / numOfPageBtn)}
				arrDirection="right"
				onClick={() => {
					if (slideNum >= Math.ceil(numOfPages / numOfPageBtn)) return;
					setSlideNum((prev) => prev + 1);
					setCurPage(1 + slideNum * numOfPageBtn);
				}}
			/>
		</div>
	);
}

export default Pagination;
