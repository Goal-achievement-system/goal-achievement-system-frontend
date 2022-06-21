import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGetActionState from 'hooks/useGetActionState';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import certificationSlice from 'store/slices/certificationSlice';
import memberSlice from 'store/slices/memberSlice';
import goalSlice from 'store/slices/goalSlice';
import CertificationsView from './CertificationsView';

function CertificationsContainer() {
	const dispatch: AppDispatch = useDispatch();
	const { goalList, maxPage } = useSelector((state: RootState) => state.certification);
	const [certLoading, certResult, certInitResult] = useGetActionState(certificationSlice.actions.loadCertGoalList.type);
	const [categoriesLoading, categoriesResult, categoriesInitResult] = useGetActionState(
		goalSlice.actions.loadCategories.type
	);
	const categories = useSelector((state: RootState) => state.goal.categories);
	const [curCategory, setCurCategory] = useState<string>('all');
	useEffect(() => {
		if (categoriesLoading) return;
		dispatch(goalSlice.actions.loadCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);
	useEffect(() => {
		if (categoriesResult?.isSuccess) {
			// success
		} else {
			// fail
		}
		categoriesInitResult();
	}, [categoriesResult, categoriesInitResult]);
	useEffect(() => {
		if (certLoading) return;
		if (![...categories, 'all'].includes(curCategory)) return;
		dispatch(certificationSlice.actions.loadCertGoalList({ category: curCategory, page: 1 }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, curCategory]);

	return (
		<CertificationsView
			isCategoryLoading={categoriesLoading}
			categories={categories}
			isCertLoading={certLoading}
			goalList={goalList}
			curCategory={curCategory}
			setCurCategory={setCurCategory}
			maxPage={maxPage}
		/>
	);
}

export default CertificationsContainer;
