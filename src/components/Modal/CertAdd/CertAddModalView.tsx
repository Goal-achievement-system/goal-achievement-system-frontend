import React from 'react';

import { ReactComponent as CameraIcon } from 'assets/icons/camera.svg';
import { ReactComponent as TrashCanIcon } from 'assets/icons/trash-can.svg';
import { CertCategories, CertCategoryKrType, CertCategoryType } from 'types/certification';
import { Goal } from 'types/goal';
import { getGoalCategoryEng } from 'utils/common';
import OptionButton from 'components/Button/OptionButton';
import TextInput from 'components/Input/TextInput';
import SubmitButton from 'components/Button/SubmitButton';
import CheckButton from 'components/Button/CheckButton';
import { CertFormReducerAction, CertFormState } from '../SubmitCertForm';

interface Props {
	formState: CertFormState;
	formDispatch: React.Dispatch<CertFormReducerAction>;
	ongoingGoals: Goal[];
	curCategory: CertCategoryType;
	checkedGoalID: number;
	setCheckedGoalID: React.Dispatch<React.SetStateAction<number>>;
	setCurCategory: React.Dispatch<React.SetStateAction<CertCategoryType>>;
	onSubmit: (event: React.SyntheticEvent) => void;
	onChange: (event: React.ChangeEvent) => void;
}
export default function CertAddView({
	formState,
	formDispatch,
	ongoingGoals,
	curCategory,
	checkedGoalID,
	setCurCategory,
	setCheckedGoalID,
	onSubmit,
	onChange,
}: Props) {
	const className = {
		size: 'pc:w-[750px] w-[320px] pc:max-w-[750px] pc:h-[750px] pc:max-h-[80vh] max-h-[424px] max-w-[90vw]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	return (
		<form
			className={`scrollbar ${className.size} ${className.translate} text-left pc:p-[72px] p-[26px] rounded-2xl relative  bg-modalGray overflow-auto`}
			onSubmit={onSubmit}
		>
			<div className="pc:mb-[52px] mb-[16px]">
				<div className="pc:mb-[30px] mb-[8px] font-[600]">인증 사진</div>
				<div className="flex space-x-[15px]">
					<button
						type="button"
						className="pc:w-[230px] pc:h-[150px] w-[108px] h-[90px] border-2 rounded-xl flex items-center p-0 bg-primaryWhite"
					>
						<label htmlFor="profile_image" className="flex items-center w-full h-full cursor-pointer">
							<CameraIcon className="m-auto max-w-[25px]" />
							<input
								id="profile_image"
								type="file"
								accept=".git, .jpg, .png, .jpeg"
								className="hidden"
								onChange={onChange}
							/>
						</label>
					</button>
					{formState.image && (
						<div className="relative pc:w-[230px] pc:h-[150px] w-[108px] h-[90px] border-2 rounded-xl overflow-hidden">
							<img
								className="cursor-pointer w-full h-full relative hover:transition-color object-cover"
								src={formState.image}
								alt="preview-img"
							/>
							<div className="absolute top-0 right-0 left-[50%] bottom-0 bg-gradient-to-r from-primaryBlack-500/0 to-primaryBlack-500/50">
								<button className="absolute h-full w-full text-center flex items-center justify-center" type="button">
									<div className="w-full h-full flex justify-end items-start">
										<TrashCanIcon
											className="hover:opacity-80 hover:transition-opacity mt-[10%] mr-[10%]"
											onClick={() => formDispatch({ type: 'image', payload: '' })}
										/>
									</div>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="pc:mb-[52px] mb-[16px]">
				<div className="pc:mb-[30px] mb-[8px] font-[600]">카테고리 선택</div>
				<div className="category-wrap">
					<ul className="grid pc:gap-[16px] gap-[6px] grid-flow-col overflow-auto">
						{CertCategories.map((category) => (
							<li key={category.label + category.type}>
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
					<ul className="flex space-x-[16px] overflow-auto">
						{ongoingGoals.map((goal) => (
							<li key={goal.goalId} className="pc:max-w-[260px] pc:w-[260px] w-[160px]">
								<CheckButton
									onClick={() => {
										const categoryEng: CertCategoryType | null = getGoalCategoryEng(
											goal.category as CertCategoryKrType
										);
										if (!categoryEng) return;

										setCheckedGoalID(goal.goalId);
										setCurCategory(categoryEng);
									}}
									isSelected={checkedGoalID === goal.goalId}
									goal={goal}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="pc:mb-[52px] mb-[16px]">
				<div className="pc:mb-[30px] mb-[8px] font-[600]">인증내용</div>
				<TextInput
					placeholder="목표 인증 게시글에 올릴 상세 내용을 작성하세요."
					onChange={(curVar: string) => formDispatch({ type: 'content', payload: curVar })}
				/>
			</div>
			<div className="submit-button">
				<SubmitButton label="등록하기" btnState="active" />
			</div>
		</form>
	);
}
