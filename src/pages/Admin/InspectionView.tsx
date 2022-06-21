import Main from 'components/Main';
import Pagination from 'components/Pagination';
import React from 'react';

function InspectionView() {
	return (
		<Main title="목표 검토">
			<div className="p-[72px] bg-modalGray font-[600] mb-[30px]">
				<div className="w-full flex py-[24px]">
					<div className="w-[10%]">No</div>
					<div className="w-[30%]">목표 이름</div>
					<div className="w-[10%]">카테고리</div>
					<div className="w-[15%]">목표일</div>
					<div className="w-[15%]">회원검증</div>
					<div className="w-[20%]">검토 상태</div>
				</div>
				<ul>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => {
						return (
							<li className="w-full flex py-[24px] border-t-[1px] border-[#E4E4E4]" key={item}>
								<div className="w-[10%]">{item}</div>
								<div className="w-[30%]">골키퍼 관리자 페이지 만들기</div>
								<div className="w-[10%]">일상</div>
								<div className="w-[15%]">2022. 3. 24</div>
								<div className="w-[15%]">[실패] 8/10</div>
								<div className="w-[20%]">성공 처리</div>
							</li>
						);
					})}
				</ul>
			</div>
			<Pagination curPage={1} setCurPage={() => {}} numOfPages={1} numOfPageBtn={3} />
		</Main>
	);
}

export default InspectionView;
