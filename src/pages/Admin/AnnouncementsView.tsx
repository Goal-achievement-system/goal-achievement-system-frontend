import { LoadAnnouncementsListResponse } from 'api/adminAPI';
import Main from 'components/Main';
import Pagination from 'components/Pagination';
import React from 'react';
import { Announcements } from 'types/announcements';

interface Props {
	openAnnounceMentsAddModal: () => void;
	openAnnounceMentsDetailModal: (announcements: Announcements) => void;
	announcementsList: LoadAnnouncementsListResponse | null;
	curPage: number;
	setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

function AnnouncementsView({
	openAnnounceMentsAddModal,
	openAnnounceMentsDetailModal,
	announcementsList,
	curPage,
	setCurPage,
}: Props) {
	return (
		<Main title="공지사항">
			<div className="flex justify-end mb-[30px]">
				<button
					onClick={openAnnounceMentsAddModal}
					type="button"
					className="rounded-[8px] p-[16px] bg-[#F7F7F7] font-[600] text-[16px] leading-[19px]"
				>
					공지사항 등록하기
				</button>
			</div>
			<div className="rounded-[16px] p-[72px] bg-modalGray font-[600] text-[16px] mb-[30px]">
				<div className="w-full flex py-[24px]">
					<div className="w-[10%]">No</div>
					<div className="w-[75%]">공지사항 명</div>
					<div className="w-[15%]">활성여부</div>
				</div>
				<ul>
					{announcementsList?.announcements.map((item, idx) => {
						return (
							<li
								className="w-full flex items-center text-[16px] py-[16px] border-t-[1px] border-[#E4E4E4]"
								key={item.announcementId}
							>
								<div className="w-[10%]">{item.announcementId}</div>
								<div className="w-[75%]">
									<button
										className="font-[600] text-[16px]"
										type="button"
										onClick={() => openAnnounceMentsDetailModal(item)}
									>
										{item.title}
									</button>
								</div>
								<div className="w-[15%]">
									{item.activation ? (
										<button
											type="button"
											className="rounded-[8px] w-[90px] p-[8px] text-[16px] font-[600] bg-primaryOrange-200 text-white border-[1px] border-buttonBlack-100"
										>
											활성 중
										</button>
									) : (
										<button
											type="button"
											className="rounded-[8px] w-[90px] p-[8px] text-[16px] font-[600] bg-buttonBlack-100 text-[#999999] border-[1px] border-buttonBlack-100"
										>
											비활성 중
										</button>
									)}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<Pagination
				curPage={curPage}
				setCurPage={setCurPage}
				numOfPages={announcementsList?.maxPage || 1}
				numOfPageBtn={3}
			/>
		</Main>
	);
}

export default AnnouncementsView;
