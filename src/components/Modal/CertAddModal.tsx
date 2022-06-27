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
import useGetActionState from 'hooks/useGetActionState';
import goalSlice from 'store/slices/goalSlice';
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as CameraIcon } from 'assets/icons/camera.svg';
import { certFormReducer, initialState } from './SubmitCertForm';

interface Props {
	index: number;
	// goal: Goal
}

export default function CertAddModal({ index }: Props) {
	// const { goal } = useSelector((state: RootState) => state.goal);
	// const { certGoal } = useSelector((state: RootState) => state.certification);
	const [goalLoading, goalResult, goalInitResult] = useGetActionState(goalSlice.actions.loadGoal.type);
	// const [certLoading, certResult, certInitResult] = useGetActionState(certificationSlice.actions.loadCert.type);
	// const [certResultLoading, certResultResult, certResultInitResult] = useGetActionState(
	// certificationSlice.actions.loadCert.type
	// );
	const [searchParams] = useSearchParams();
	const dispatch = useDispatch();
	const { memberinfo } = useSelector((state: RootState) => state.member);
	const { goals } = useSelector((state: RootState) => state.member.memberGoals);
	const goal = useSelector((state: RootState) => state.member.memberGoals.goals[index]);
	const [curCategory, setCurCategory] = useState<CertCategoryType>('exercice');
	const [checkedGoalID, setCheckedGoalID] = useState<number>(0);
	const [ongoingGoals, setOnGoingGoals] = useState<Goal[]>([]);

	const [formState, formDispatch] = useReducer(certFormReducer, initialState);

	const className = {
		size: 'pc:w-[750px] w-[320px] pc:max-w-[750px] pc:h-[750px] pc:max-h-[80vh] max-h-[424px] max-w-[90vw]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	// const resultHandler = (isSuccess: boolean) => {
	// 	if (certResultLoading) return;
	// 	const goalId = searchParams.get('goal');
	// 	if (!goalId) return;
	// 	if (isSuccess) dispatch(certificationSlice.actions.pushCertSuccess({ goalId: +goalId }));
	// 	else dispatch(certificationSlice.actions.pushCertFail({ goalId: +goalId }));
	// };

	useEffect(() => {
		const goalId = searchParams.get('goal');
		if (!goalId) return;
		if (goalLoading) return;
		dispatch(goalSlice.actions.loadGoal({ goalId: +goalId }));
		dispatch(certificationSlice.actions.loadCert({ goalId: +goalId }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);

	// useEffect(() => {
	// 	goalInitResult();
	// }, [goalInitResult, goal, certGoal]);

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (!memberinfo || !formState) return;
		if (!formState.image || !formState.content) {
			alert('인증에 필요한 모든 정보를 입력하세요!');
		}

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

	console.log(ongoingGoals);

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
						<CameraIcon className="m-auto max-w-[25px]" />
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
