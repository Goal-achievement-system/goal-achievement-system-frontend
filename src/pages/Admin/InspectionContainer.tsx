import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import adminSlice from 'store/slices/adminSlice';
import InspectionView from './InspectionView';

function InspectionContainer() {
	const dispatch = useDispatch();
	const inspectionList = useSelector((state: RootState) => state.admin.inspectionList);
	useEffect(() => {
		dispatch(adminSlice.actions.loadInspection({ page: 1 }));
	}, [dispatch]);
	return <InspectionView inspectionList={inspectionList} />;
}

export default InspectionContainer;
