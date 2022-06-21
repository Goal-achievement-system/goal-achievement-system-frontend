import React, { useState, useEffect, useReducer } from 'react';
import OptionButton from 'components/Button/OptionButton';
import TextInput from 'components/Input/TextInput';
import SubmitButton from 'components/Button/SubmitButton';
import { CertCategories, CertCategoryKrType, CertCategoryType } from 'types/certification';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import { getGoalCategoryEng } from 'utils/common';
import { Goal } from 'types/goal';
import CheckButton from 'components/Button/CheckButton';
import certificationSlice from 'store/slices/certificationSlice';
import { certFormReducer, initialState } from './SubmitCertForm';

interface Props {
	index: number;
}

export default function CertAddModal({ index }: Props) {
	const { memberinfo } = useSelector((state: RootState) => state.member);
	const { goals } = useSelector((state: RootState) => state.member.memberGoals);
	const goal = useSelector((state: RootState) => state.member.memberGoals.goals[index]);
	const [curCategory, setCurCategory] = useState<CertCategoryType>('exercice');
	const [checkedGoalID, setCheckedGoalID] = useState<number>(0);
	const [ongoingGoals, setOnGoingGoals] = useState<Goal[]>([]);

	const [formState, formDispatch] = useReducer(certFormReducer, initialState);
	const dispatch = useDispatch();

	const className = {
		size: 'pc:w-[750px] w-[320px] pc:max-w-[750px] pc:h-[750px] pc:max-h-[80vh] max-h-[424px] max-w-[90vw]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (!memberinfo || !formState) return;

		dispatch(certificationSlice.actions.submitCertGoal(formState));
	};

	const onChange = (event: React.ChangeEvent) => {
		const target = event.target as HTMLInputElement;
		const { files } = target;
		if (!files) return;

		const reader = new FileReader();
		reader.readAsDataURL(files[0]);

		// 비동기함수 reader.onload
		reader.onload = (e: ProgressEvent<FileReader>) => {
			formDispatch({ type: 'image', payload: e.target?.result });
		};
	};

	useEffect(() => {
		const goalCategoryEng = getGoalCategoryEng(goal.category as CertCategoryKrType);
		setCurCategory(goalCategoryEng as CertCategoryType);

		const filterResult = goals.filter(({ verificationResult }) => verificationResult === 'ongoing');
		setOnGoingGoals(() => [...filterResult]);
		setCheckedGoalID(goal.goalId);
		formDispatch({ type: 'goalId', payload: goal.goalId });
	}, [goal, goals]);

	return (
		<form
			className={`scrollbar ${className.size} ${className.translate} text-left pc:p-[72px] p-[26px] rounded-2xl relative  bg-modalGray overflow-auto`}
			onSubmit={onSubmit}
		>
			<div className="pc:mb-[52px] mb-[16px]">
				<div className="pc:mb-[30px] mb-[8px] font-[600]">인증 사진</div>
				<button
					type="button"
					className="pc:w-[230px] pc:h-[150px] w-[108px] h-[90px] border-2 rounded-xl flex items-center p-0 bg-primaryWhite"
				>
					<label htmlFor="profile_image" className="flex items-center w-full h-full cursor-pointer">
						<img className="m-auto max-w-[25px]" src="./image/icon/camera.svg" alt="img-camera" />
						<input id="profile_image" type="file" className="hidden" onChange={onChange} />
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
					<ul className="flex space-x-[16px] overflow-auto">
						{ongoingGoals.map(({ goalId }) => (
							<li className="pc:max-w-[250px] pc:w-[250px] w-[160px]">
								<CheckButton
									onClick={() => setCheckedGoalID(goalId)}
									isSelected={checkedGoalID === goalId}
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
			<div>
				<SubmitButton label="등록하기" btnState="active" />
			</div>
		</form>
	);
}
