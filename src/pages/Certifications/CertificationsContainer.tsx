import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGetActionState from 'hooks/useGetActionState';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import certificationSlice from 'store/slices/certificationSlice';
import memberSlice from 'store/slices/memberSlice';
import CertificationsView from './CertificationsView';

function CertificationsContainer() {
	const dispatch: AppDispatch = useDispatch();
	const { goalList } = useSelector((state: RootState) => state.certification);
	const [loading, result, initResult] = useGetActionState(certificationSlice.actions.loadCertGoalList.type);

	useEffect(() => {
		dispatch(certificationSlice.actions.loadCertGoalList({ category: 'all', page: 1 }));
	}, [dispatch]);

	return <CertificationsView isLoading={loading} goalList={goalList} />;
}

export default CertificationsContainer;
