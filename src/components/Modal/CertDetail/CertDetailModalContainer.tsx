import React, { useEffect } from 'react';
import { getDday } from 'utils/common';
import useGetActionState from 'hooks/useGetActionState';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import { successCertGoal, failCertGoal } from 'api/goalAPI';
import { useNavigate, useSearchParams } from 'react-router-dom';
import goalSlice from 'store/slices/goalSlice';
import certificationSlice from 'store/slices/certificationSlice';
import CertDetailModalView from './CertDetailModalView';

export default function CertDetailModalContainer() {
	const { goal } = useSelector((state: RootState) => state.goal);
	const { certGoal } = useSelector((state: RootState) => state.certification);
	const dispatch: AppDispatch = useDispatch();
	const [goalLoading, goalResult, goalInitResult] = useGetActionState(goalSlice.actions.loadGoal.type);
	const [certLoading, certResult, certInitResult] = useGetActionState(certificationSlice.actions.loadCert.type);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const goalId = searchParams.get('goal');
		console.log(goalId);
		if (!goalId) return;
		if (goalLoading || certLoading) return;
		dispatch(goalSlice.actions.loadGoal({ goalId: +goalId }));
		dispatch(certificationSlice.actions.loadCert({ goalId: +goalId }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);
	useEffect(() => {
		console.log(goal, certGoal);
		certInitResult();
		goalInitResult();
	}, [certInitResult, goalInitResult, goal, certGoal]);
	const className = {
		size: 'pc:w-[890px] max-w-[90vw] pc:max-h-[80vh] w-[320px] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	const handleSuccessClick = () => {};

	// 실패요청 핸들러
	const handleFailClick = () => {};
	console.log(searchParams.get('goal'));
	return <CertDetailModalView />;
}
