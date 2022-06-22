import React, { useEffect } from 'react';
import SubmitButton from 'components/Button/SubmitButton';
import TextInput from 'components/Input/TextInput';
import OptionButton from 'components/Button/OptionButton';
import { ReactComponent as Camera } from 'assets/icons/camera.svg';

export default function AnnounceMentsAddModal() {
	const className = {
		size: 'pc:w-[890px] max-w-[90vw] pc:max-h-[80vh] w-[320px] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	return (
		<div
			className={`${className.size} ${className.translate} text-left pc:p-[72px] p-[24px] border-borderGray rounded-2xl relativ bg-modalGray overflow-auto`}
		>
			<form onSubmit={() => {}}>
				<div className="mb-[30px]">
					<div className=" mb-[16px] font-[700] text-[22px] leading-[20px]">배너 이미지 업로드</div>
					<button
						type="button"
						className="border-[1px] border-[#E7E7E7] w-[229px] h-[138px] rounded-[8px] flex justify-center flex-col items-center bg-primaryWhite text-[#A6A6A6] text-[16px]"
					>
						<Camera />
						<div className="mt-[10px]">0/1</div>
					</button>
				</div>
				<div className="mb-[30px]">
					<div className=" mb-[16px] font-[700] text-[22px] leading-[20px]">배너 이미지 업로드</div>
					<button
						type="button"
						className="border-[1px] border-[#E7E7E7] w-[229px] h-[138px] rounded-[8px] flex justify-center flex-col items-center bg-primaryWhite text-[#A6A6A6] text-[16px]"
					>
						<Camera />
						<div className="mt-[10px]">0/1</div>
					</button>
				</div>
				<div className="mb-[30px]">
					<div className="mb-[16px] font-[700] text-[22px] leading-[20px]">공지사항 명</div>
					<TextInput onChange={() => {}} placeholder="제목을 작성해주세요" />
				</div>
				<div className="mb-[30px]">
					<div className="mb-[16px] font-[700] text-[22px] leading-[20px]">활성 여부</div>
					<div className="flex gap-x-[23px]">
						<OptionButton isSelected onClick={() => {}} size="large" label="활성" />
						<OptionButton isSelected={false} onClick={() => {}} size="large" label="비활성" />
					</div>
				</div>
				<SubmitButton btnState="active" label="등록하기" />
			</form>
		</div>
	);
}
