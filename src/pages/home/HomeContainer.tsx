import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import goalSlice from 'store/slices/goalSlice';
import memberSlice from 'store/slices/memberSlice';
import statisticsSlice from 'store/slices/statisticsSlice';
import HomeView from './HomeView';

function HomeContainer() {
	const dispatch: AppDispatch = useDispatch();
	const { goalCount } = useSelector((state: RootState) => state.statistics);
	const { memberinfo } = useSelector((state: RootState) => state.member);

	useEffect(() => {
		if (!memberinfo && localStorage.getItem('goalKeeperToken')) dispatch(memberSlice.actions.loadMemberInfo());
	}, [dispatch, memberinfo]);

	useEffect(() => {
		// dispatch(goalSlice.actions.loadGoalList({ category, page, status }));
		if (!goalCount) {
			dispatch(statisticsSlice.actions.loadGoalCount());
		}
	}, [dispatch, goalCount]);

	return <HomeView member={memberinfo} goalCount={goalCount} />;
}

export default HomeContainer;
