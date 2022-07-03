import { LoadInspectionResponse } from 'api/adminAPI';
import Main from 'components/Main';
import Pagination from 'components/Pagination';
import React from 'react';

interface Props {
	inspectionList: LoadInspectionResponse | null;
	openCertAdminModal: (index: number) => void;
	curPage: number;
	setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

function InspectionView({ inspectionList, openCertAdminModal, curPage, setCurPage }: Props) {
	return (
		<Main title="목표 검토">
			<div className="rounded-[16px] p-[72px] bg-modalGray font-[600] text-[16px] mb-[30px]">
				<div className="w-full flex py-[24px]">
					<div className="w-[8%]">No</div>
					<div className="w-[38%]">목표 이름</div>
					<div className="w-[12%]">카테고리</div>
					<div className="w-[15%]">목표일</div>
					<div className="w-[15%]">회원검증</div>
					<div className="w-[12%]">검토 상태</div>
				</div>
				<ul>
					{inspectionList?.results?.map((item, idx) => {
						return (
							<li
								className="w-full flex items-center text-[16px] py-[16px] border-t-[1px] border-[#E4E4E4]"
								key={item.goal.goalId}
							>
								<div className="w-[8%]">{item.goal.goalId}</div>
								<div className="w-[38%]">{item.goal.goalName}</div>
								<div className="w-[12%]">{item.goal.category}</div>
								<div className="w-[15%]">
									{new Date(item.goal.limitDate).getFullYear()}.{new Date(item.goal.limitDate).getMonth() + 1}.
									{new Date(item.goal.limitDate).getDate()}
								</div>
								<div className="w-[15%]">
									[실패] {item.certification.successCount}/{item.certification.requireSuccessCount}
								</div>
								<div className="w-[12%]">
									{
										/* eslint-disable no-nested-ternary */
										item.goal.verificationResult === 'success' ? (
											<button
												type="button"
												className="rounded-[8px] p-[8px] text-[16px] font-[600] bg-primaryOrange-200 text-primaryWhite border-[1px] border-primaryOrange-200;"
											>
												성공 처리
											</button>
										) : item.goal.verificationResult === 'hold' ? (
											<button
												type="button"
												className="rounded-[8px] p-[8px] text-[16px] font-[600] bg-primaryOrange-100 text-primaryOrange-200 border-[1px] border-primaryOrange-200"
												onClick={() => {}}
											>
												검토 하기
											</button>
										) : (
											<button
												type="button"
												className="rounded-[8px] p-[8px] text-[16px] font-[600] bg-buttonBlack-100 text-[#999999] border-[1px] border-buttonBlack-100"
											>
												실패 처리
											</button>
										)
									}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<Pagination
				curPage={curPage}
				setCurPage={setCurPage}
				numOfPages={inspectionList?.maxPage || 1}
				numOfPageBtn={3}
			/>
		</Main>
	);
}

export default InspectionView;
