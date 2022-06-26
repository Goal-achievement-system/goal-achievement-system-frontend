import React, { useEffect } from 'react';
import useGetActionState from 'hooks/useGetActionState';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import { useSearchParams } from 'react-router-dom';
import adminSlice from 'store/slices/adminSlice';
import goalSlice from 'store/slices/goalSlice';
import certificationSlice from 'store/slices/certificationSlice';
import useModal from 'hooks/useModal';
import { modalName } from 'utils/importModal';
import modalSlice from 'store/slices/modalSlice';
import CertDetailModalView from './CertDetailModalView';

interface Props {
	index: number;
}

export default function CertAdminModalContainer({ index }: Props) {
	const inspectionData = useSelector((state: RootState) => state.admin.inspectionList[index]);
	const dispatch: AppDispatch = useDispatch();
	const [certResultLoading, certResultResult, certResultInitResult] = useGetActionState(
		adminSlice.actions.inspectCertification.type
	);
	const resultHandler = (isSuccess: boolean) => {
		if (certResultLoading) return;
		if (!inspectionData) return;
		if (isSuccess)
			dispatch(adminSlice.actions.inspectCertification({ goalId: inspectionData.goal.goalId, state: 'success' }));
		else dispatch(adminSlice.actions.inspectCertification({ goalId: inspectionData.goal.goalId, state: 'fail' }));
	};

	useEffect(() => {
		if (certResultResult) {
			dispatch(modalSlice.actions.close());
			certResultInitResult();
			dispatch(adminSlice.actions.loadInspection({ page: 1 }));
		}
	}, [certResultResult, dispatch, certResultInitResult]);

	return (
		<CertDetailModalView
			goal={inspectionData.goal}
			certGoal={inspectionData.certification}
			resultHandler={resultHandler}
			certImage=""
		/>
	);
}
