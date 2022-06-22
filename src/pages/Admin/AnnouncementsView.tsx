import Main from 'components/Main';
import React from 'react';

interface Props {
	openAnnounceMentsAddModal: () => void;
}

function AnnouncementsView({ openAnnounceMentsAddModal }: Props) {
	return (
		<Main title="공지사항">
			<div className="flex justify-end mb-[30px]">
				<button
					onClick={openAnnounceMentsAddModal}
					type="button"
					className="rounded-[8px] p-[16px] bg-[#F7F7F7] font-[600] text-[16px] leading-[19px]"
				>
					배너 등록하기
				</button>
			</div>
			<div className="rounded-[16px] p-[72px] bg-modalGray font-[600] text-[16px] mb-[30px]">
				<div className="w-full flex py-[24px]">
					<div className="w-[10%]">No</div>
					<div className="w-[75%]">공지사항 명</div>
					<div className="w-[15%]">활성여부</div>
				</div>
				<ul>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
						return (
							<li className="w-full flex items-center text-[16px] py-[16px] border-t-[1px] border-[#E4E4E4]" key={item}>
								<div className="w-[10%]">{item}</div>
								<div className="w-[75%]">공지사항명</div>
								<div className="w-[15%]">
									<button
										type="button"
										className="rounded-[8px] p-[8px] text-[16px] font-[600] bg-buttonBlack-100 text-[#999999] border-[1px] border-buttonBlack-100"
									>
										비활성 중
									</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</Main>
	);
}

export default AnnouncementsView;
