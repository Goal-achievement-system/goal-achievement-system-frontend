import React, { useState, useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'store/slices';
import certificationSlice from 'store/slices/certificationSlice';
import useGetActionState from 'hooks/useGetActionState';
import useModal from 'hooks/useModal';
import Path from 'utils/path';
import { Goal } from 'types/goal';
import { certFormReducer, initialState } from '../SubmitCertForm';
import CertAddView from './CertAddModalView';

interface Props {
	index: number;
}

export default function CertAddModal({ index }: Props) {
	const { memberinfo } = useSelector((state: RootState) => state.member);
	const { goals } = useSelector((state: RootState) => state.member.memberGoals);
	const curGoal = useSelector((state: RootState) => state.member.memberGoals.goals[index]);
	const [submitCertLoading, submitCertResult, submitCertResultInit] = useGetActionState(
		certificationSlice.actions.submitCertGoal.type
	);
	const [ongoingGoals, setOnGoingGoals] = useState<Goal[]>([]);
	const [formState, formDispatch] = useReducer(certFormReducer, initialState);
	const [openModal, closeModal] = useModal();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (!memberinfo || !formState) return;
		if (!formState.image || !formState.content) {
			alert('인증에 필요한 모든 정보를 입력하세요!');
			return;
		}

		dispatch(certificationSlice.actions.submitCertGoal(formState));
	};

	useEffect(() => {
		// 로딩중이 아닐 때
		if (submitCertLoading) return;
		if (submitCertResult?.isSuccess) {
			alert('인증 등록이 완료되었어요!');
			closeModal();
			submitCertResultInit();
			navigate(Path.myGoals);
		}
	}, [closeModal, navigate, submitCertLoading, submitCertResult?.isSuccess, submitCertResultInit]);

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
		const filterResult = goals.filter(({ verificationResult }) => verificationResult === 'ongoing');
		setOnGoingGoals(() => [...filterResult]);
		formDispatch({ type: 'goalId', payload: curGoal.goalId });
	}, [curGoal, goals]);

	return (
		<CertAddView
			formState={formState}
			formDispatch={formDispatch}
			ongoingGoals={ongoingGoals}
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
