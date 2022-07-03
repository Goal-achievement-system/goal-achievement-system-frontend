import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import adminSlice from 'store/slices/adminSlice';
import SubmitButton from 'components/Button/SubmitButton';
import TextInput from 'components/Input/TextInput';
import OptionButton from 'components/Button/OptionButton';
import ImageUploader from 'components/Image/ImageUploader';
import { useDispatch } from 'react-redux';
import useGetActionState from 'hooks/useGetActionState';
import useModal from 'hooks/useModal';
import { modalName } from 'utils/importModal';
import { blobToBase64 } from 'utils/common';

export default function AnnouncementsAddModal() {
	const dispatch = useDispatch();
	const [openModal, closeModal] = useModal();
	const [title, setTitle] = useState<string>('');
	const [isActive, setIsActive] = useState<boolean>(false);
	const [bannerImage, setBannerImage] = useState<string | null>(null);
	const [contentImage, setContentImage] = useState<string | null>(null);
	const [registAnnouncementsLoading, registAnnouncementsResult, registAnnouncementsInitResult] = useGetActionState(
		adminSlice.actions.registAnnouncements.type
	);
	const className = {
		size: 'pc:w-[890px] max-w-[90vw] pc:max-h-[80vh] w-[320px] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};
	const registAnnouncement = () => {
		if (!bannerImage || !contentImage || title.length === 0 || registAnnouncementsLoading) return;
		dispatch(
			adminSlice.actions.registAnnouncements({
				title,
				activation: isActive,
				bannerImage,
				image: contentImage,
			})
		);
	};

	useEffect(() => {
		if (registAnnouncementsResult?.isSuccess === true) {
			alert('공지사항을 등록했습니다.');
			registAnnouncementsInitResult();
			closeModal({ name: modalName.AnnouncementsAddModal });
		} else if (registAnnouncementsResult?.isSuccess === false) {
			alert('공지사항을 등록에 실패했습니다.');
		}
	}, [registAnnouncementsResult, dispatch, registAnnouncementsInitResult, closeModal]);

	return (
		<div
			className={`scrollbar ${className.size} ${className.translate} text-left pc:p-[72px] p-[24px] border-borderGray rounded-2xl relativ bg-modalGray overflow-auto`}
		>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					registAnnouncement();
				}}
			>
				<div className="mb-[30px]">
					<div className=" mb-[16px] font-[700] text-[22px] leading-[20px]">공지사항 배너 업로드</div>
					<ImageUploader image={bannerImage} setImage={setBannerImage} height={200} alt="공지사항 배너" />
				</div>
				<div className="mb-[30px]">
					<div className=" mb-[16px] font-[700] text-[22px] leading-[20px]">공지사항 본문 업로드</div>
					<ImageUploader image={contentImage} setImage={setContentImage} height={500} alt="공지사항 본문 업로드" />
				</div>
				<div className="mb-[30px]">
					<div className="mb-[16px] font-[700] text-[22px] leading-[20px]">공지사항 명</div>
					<TextInput
						value={title}
						onChange={(curVar: string) => {
							setTitle(curVar);
						}}
						placeholder="제목을 작성해주세요"
					/>
				</div>
				<div className="mb-[30px]">
					<div className="mb-[16px] font-[700] text-[22px] leading-[20px]">활성 여부</div>
					<div className="flex gap-x-[23px]">
						<OptionButton
							isSelected={isActive}
							onClick={() => {
								setIsActive(true);
							}}
							size="large"
							label="활성"
						/>
						<OptionButton
							isSelected={!isActive}
							onClick={() => {
								setIsActive(false);
							}}
							size="large"
							label="비활성"
						/>
					</div>
				</div>
				<SubmitButton
					btnState={bannerImage && contentImage && title.length > 0 ? 'active' : 'inactive'}
					label="등록하기"
				/>
			</form>
		</div>
	);
}
