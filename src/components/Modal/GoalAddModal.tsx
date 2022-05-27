import React from 'react';
import FilterButton from 'components/Button/FilterButton';
import OptionButton from 'components/Button/ObtionButton';
import TextInput from 'components/Input/TextInput';
import SubmitButton from 'components/Button/SubmitButton';

export default function GoalAddModal() {
	const className = {
		size: 'pc:max-w-[890px] pc:max-h-[80vh]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	return (
		<div
			className={`${className.size} ${className.translate} border-2 text-left p-[72px] rounded-2xl relative  bg-modalGray overflow-auto`}
		>
			<div className="mb-[52px]">
				<div className="mb-[30px] font-[600]">인증 사진</div>
				<button
					type="button"
					className="pc:w-[230px] pc:h-[150px] border-2 rounded-xl flex items-center p-0 bg-primaryWhite"
				>
					<label htmlFor="profile_image" className="flex items-center w-full h-full cursor-pointer">
						<img className="m-auto max-w-[25px]" src="./image/icon/camera.svg" alt="img-camera" />
						<input id="profile_image" type="file" className="hidden" />
					</label>
				</button>
			</div>
			<div className="mb-[52px]">
				<div className="mb-[30px] font-[600]">카테고리 선택</div>
				<div className="">
					<ul className="flex flex-wrap space-x-6 space-y-1">
						<li>
							<FilterButton label="# 운동" isSelected={false} onClick={() => {}} />
						</li>
						<li>
							<FilterButton label="# 운동" isSelected={false} onClick={() => {}} />
						</li>
						<li>
							<FilterButton label="# 운동" isSelected={false} onClick={() => {}} />
						</li>
						<li>
							<FilterButton label="# 공부" isSelected={false} onClick={() => {}} />
						</li>
						<li>
							<FilterButton label="# 습관" isSelected={false} onClick={() => {}} />
						</li>
						<li>
							<FilterButton label="# 취미" isSelected={false} onClick={() => {}} />
						</li>
						<li>
							<FilterButton label="# 기타" isSelected={false} onClick={() => {}} />
						</li>
					</ul>
				</div>
			</div>
			<div className="mb-[52px]">
				<div className="mb-[30px] font-[600]">목표 선택</div>
				<div>
					<ul className="flex flex-wrap">
						<li className="my-1 mr-6">
							<OptionButton label="목표인증 텍스트" size="small" isSelected onClick={() => {}} />
						</li>
						<li className="my-1 mr-6">
							<OptionButton label="목표인증 텍스트" size="small" isSelected onClick={() => {}} />
						</li>
						<li className="my-1 mr-6">
							<OptionButton label="목표인증 텍스트" size="small" isSelected onClick={() => {}} />
						</li>
						<li className="my-1 mr-6">
							<OptionButton label="목표인증 텍스트" size="small" isSelected onClick={() => {}} />
						</li>
						<li className="my-1 mr-6">
							<OptionButton label="목표인증 텍스트" size="small" isSelected onClick={() => {}} />
						</li>
						<li className="my-1 mr-6">
							<OptionButton label="목표인증 텍스트" size="small" isSelected={false} onClick={() => {}} />
						</li>
						<li className="my-1 mr-6">
							<OptionButton label="목표인증 텍스트" size="small" isSelected={false} onClick={() => {}} />
						</li>
					</ul>
				</div>
			</div>
			<div className="mb-[52px]">
				<div className="mb-[30px] font-[600]">인증내용</div>
				<TextInput placeholder="목표 인증 게시글에 올릴 상세 내용을 작성하세요." />
			</div>
			<div>
				<SubmitButton label="등록하기" onClick={() => {}} btnState="active" />
			</div>
		</div>
	);
}
