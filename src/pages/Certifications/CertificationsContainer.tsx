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
	const memberInfo = useSelector((state: RootState) => state.member.memberinfo);
	const { goalList, maxPage } = useSelector((state: RootState) => state.certification);
	const [certLoading, certResult, certInitResult] = useGetActionState(certificationSlice.actions.loadCertList.type);
	const [categoriesLoading, categoriesResult, categoriesInitResult] = useGetActionState(
		goalSlice.actions.loadCategories.type
	);
	const categories = useSelector((state: RootState) => state.goal.categories);
	const [curCategory, setCurCategory] = useState<string>('all');
	const [curPage, setCurPage] = useState<number>(1);
	useEffect(() => {
		if (memberInfo) dispatch(goalSlice.actions.loadCategories());
	}, [dispatch, memberInfo]);

	useEffect(() => {
		if (![...categories, 'all'].includes(curCategory) || !memberInfo) return;
		dispatch(certificationSlice.actions.loadCertList({ category: curCategory, page: curPage }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, curCategory, curPage, memberInfo]);
	useEffect(() => {
		if (!categoriesResult) return;
		categoriesInitResult();
	}, [categoriesResult]);
	useEffect(() => {
		if (!certResult) return;
		certInitResult();
	}, [certResult]);

	return (
		<CertificationsView
			isCategoryLoading={categoriesLoading}
			categories={categories}
			isCertLoading={certLoading}
			goalList={goalList}
			curCategory={curCategory}
			setCurCategory={setCurCategory}
			maxPage={maxPage}
			curPage={curPage}
			setCurPage={setCurPage}
		/>
	);
}

export default CertificationsContainer;
