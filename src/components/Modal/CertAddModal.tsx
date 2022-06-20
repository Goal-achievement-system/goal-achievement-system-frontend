import React, { useState } from 'react';
import OptionButton from 'components/Button/ObtionButton';
import TextInput from 'components/Input/TextInput';
import SubmitButton from 'components/Button/SubmitButton';
import { CertCategories, CertCategoryType } from 'types/certification';

export default function CertAddModal() {
	const [curCategory, setCurCategory] = useState<CertCategoryType>('exercice');
	const className = {
		size: 'pc:w-[890px] max-w-[90vw] pc:max-h-[80vh] w-[320px] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	return (
		<div
			className={`scrollbar ${className.size} ${className.translate} text-left pc:p-[72px] p-[26px] rounded-2xl relative  bg-modalGray overflow-auto`}
		>
			<div className="pc:mb-[52px] mb-[16px]">
				<div className="pc:mb-[30px] mb-[8px] font-[600]">인증 사진</div>
				<button
					type="button"
					className="pc:w-[230px] pc:h-[150px] w-[108px] h-[90px] border-2 rounded-xl flex items-center p-0 bg-primaryWhite"
				>
					<label htmlFor="profile_image" className="flex items-center w-full h-full cursor-pointer">
						<img className="m-auto max-w-[25px]" src="./image/icon/camera.svg" alt="img-camera" />
						<input id="profile_image" type="file" className="hidden" />
					</label>
				</button>
			</div>
			<div className="pc:mb-[52px] mb-[16px]">
				<div className="pc:mb-[30px] mb-[8px] font-[600]">카테고리 선택</div>
				<div className="category-wrap">
					<ul className="grid pc:gap-[16px] gap-[6px] grid-flow-col overflow-auto">
						{CertCategories.map((category) => (
							<li>
								<OptionButton
									size="medium"
									label={`# ${category.label}`}
									isSelected={curCategory === category.type}
									onClick={() => setCurCategory(category.type)}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="pc:mb-[52px] mb-[16px]">
				<div className="pc:mb-[30px] mb-[8px] font-[600]">목표 선택</div>
				<div className="option-wrap">
					<ul className="grid pc:gap-[16px] gap-[6px] grid-flow-col overflow-auto">
						<li>
							<OptionButton label="목표인증 텍스트asdadsfdsfsdas" size="medium" isSelected={false} onClick={() => {}} />
						</li>
						<li>
							<OptionButton label="목표인증 텍스트" size="medium" isSelected={false} onClick={() => {}} />
						</li>
						<li>
							<OptionButton size="medium" isSelected={false} onClick={() => {}}>
								<div className="text-primaryOrange-200">목표인증텍스트</div>
								<div className="text-primaryOrange-200">📅 4.1</div>
							</OptionButton>
						</li>
						<li>
							<OptionButton label="목표인증 텍스트" size="medium" isSelected={false} onClick={() => {}} />
						</li>
						<li>
							<OptionButton label="목표인증 텍스트" size="medium" isSelected={false} onClick={() => {}} />
						</li>
						<li>
							<OptionButton label="목표인증 텍스트" size="medium" isSelected={false} onClick={() => {}} />
						</li>
						<li>
							<OptionButton label="목표인증 텍스트" size="medium" isSelected={false} onClick={() => {}} />
						</li>
					</ul>
				</div>
			</div>
			<div className="pc:mb-[52px] mb-[16px]">
				<div className="pc:mb-[30px] mb-[8px] font-[600]">인증내용</div>
				<TextInput placeholder="목표 인증 게시글에 올릴 상세 내용을 작성하세요." onChange={() => {}} />
			</div>
			<div>
				<SubmitButton label="등록하기" onClick={() => {}} btnState="active" />
			</div>
		</div>
	);
}
