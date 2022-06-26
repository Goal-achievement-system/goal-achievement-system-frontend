import React, { useEffect } from 'react';
import useGetActionState from 'hooks/useGetActionState';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import { useSearchParams } from 'react-router-dom';
import goalSlice from 'store/slices/goalSlice';
import certificationSlice from 'store/slices/certificationSlice';
import { Goal } from 'types/goal';
import { Certification } from 'types/certification';
import CertDetailModalView from './CertDetailModalView';

export default function CertDetailModalContainer() {
	const { goal } = useSelector((state: RootState) => state.goal);
	const { certGoal } = useSelector((state: RootState) => state.certification);
	const { certImage } = useSelector((State: RootState) => State.certification);
	const dispatch: AppDispatch = useDispatch();
	const [goalLoading, goalResult, goalInitResult] = useGetActionState(goalSlice.actions.loadGoal.type);
	const [certLoading, certResult, certInitResult] = useGetActionState(certificationSlice.actions.loadCert.type);
	const [pushCertResultLoading, pushCertResultResult, pushCertResultInitResult] = useGetActionState(
		certificationSlice.actions.pushCertResult.type
	);

	const [searchParams] = useSearchParams();
	const resultHandler = (isSuccess: boolean) => {
		if (pushCertResultLoading) return;
		const goalId = searchParams.get('goal');
		if (!goalId) return;
		dispatch(certificationSlice.actions.pushCertResult({ goalId: +goalId, result: isSuccess }));
	};

	useEffect(() => {
		const goalId = searchParams.get('goal');
		if (!goalId) {
			console.log('모달');
			return;
		}
		dispatch(goalSlice.actions.loadGoal({ goalId: +goalId }));
		dispatch(certificationSlice.actions.loadCert({ goalId: +goalId }));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);
	useEffect(() => {
		if (certResult) {
			dispatch(certificationSlice.actions.getCertImage({ certId: certGoal.image }));
		}
	}, [certGoal.image, certResult, dispatch]);
	useEffect(() => {
		goalInitResult();
	}, [goalResult, goalInitResult]);
	useEffect(() => {
		certInitResult();
	}, [certResult, certInitResult]);
	useEffect(() => {
		if (!pushCertResultResult) return;
		if (pushCertResultResult.isSuccess) {
			alert('인증 감사합니다.');
		} else {
			alert('인증을 할 수 있는 상태가 아니군요!');
		}
		pushCertResultInitResult();
	}, [pushCertResultInitResult, pushCertResultResult]);
	// clean up
	useEffect(() => {
		return () => {
			dispatch(goalSlice.actions.loadGoalSuccess({} as Goal));
			dispatch(certificationSlice.actions.loadCertSuccess({} as Certification));
			dispatch(certificationSlice.actions.getCertImageSuccess(''));
		};
	}, [dispatch]);
	console.log(certGoal.image, certGoal.image);
	return (
		<CertDetailModalView goal={goal} certGoal={certGoal} certImage={certImage ?? ''} resultHandler={resultHandler} />
	);
}
/*


	useEffect(() => {
		if (certResult) {
			dispatch(certificationSlice.actions.getCertImage({ certId: certGoal.image }));
		}
	}, [certGoal.image, certResult, dispatch]);


	*/
