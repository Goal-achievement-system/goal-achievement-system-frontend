import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';
import statisticsSlice from 'store/slices/statisticsSlice';
import useGetActionState from 'hooks/useGetActionState';
import certificationSlice from 'store/slices/certificationSlice';
import HomeView from './HomeView';

function HomeContainer() {
	const dispatch: AppDispatch = useDispatch();
	const { goalCount } = useSelector((state: RootState) => state.statistics);
	const { memberinfo } = useSelector((state: RootState) => state.member);
	const { goalList } = useSelector((state: RootState) => state.certification);
	const [loading] = useGetActionState(memberSlice.actions.loadMemberInfo.type);

	useEffect(() => {
		if (!memberinfo) {
			dispatch(statisticsSlice.actions.loadGoalCount());
		} else {
			dispatch(certificationSlice.actions.loadCertList({ category: 'all', page: 1 }));
		}
	}, [dispatch, memberinfo]);

	if (loading) return null;
	return <HomeView member={memberinfo} goalCount={goalCount} goalList={goalList} />;
}

export default HomeContainer;
