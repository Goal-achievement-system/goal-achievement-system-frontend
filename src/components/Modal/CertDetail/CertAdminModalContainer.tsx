import React, { useEffect } from 'react';
import useGetActionState from 'hooks/useGetActionState';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import adminSlice from 'store/slices/adminSlice';
import modalSlice from 'store/slices/modalSlice';
import CertDetailModalView from './CertDetailModalView';

interface Props {
	index: number;
}

export default function CertAdminModalContainer() {
	const inspectionData = useSelector((state: RootState) => state.admin.inspectionDetailInfo)!;
	const certImage = useSelector((state: RootState) => state.admin.certImage)!;
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
			alert('검토를 완료했습니다.');
			dispatch(modalSlice.actions.close());
			certResultInitResult();
			dispatch(adminSlice.actions.loadInspection({ page: 1 }));
		}
	}, [certResultResult, dispatch, certResultInitResult]);

	console.log(inspectionData, 'inspectionData');

	return (
		<CertDetailModalView
			goal={inspectionData.goal}
			certGoal={inspectionData.certification}
			resultHandler={resultHandler}
			certImage={certImage}
			isLoading={inspectionData.goal.goalId !== inspectionData.certification.goalId}
		/>
	);
}
