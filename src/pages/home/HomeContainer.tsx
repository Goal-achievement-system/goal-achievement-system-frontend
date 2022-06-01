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
	const { goalList } = useSelector((state: RootState) => state.goal);

	useEffect(() => {
		if (!memberinfo) {
			if (localStorage.getItem('goalKeeperToken')) {
				dispatch(memberSlice.actions.loadMemberInfo());
			} else {
				dispatch(statisticsSlice.actions.loadGoalCount());
			}
		} else {
			dispatch(goalSlice.actions.loadGoalList({ category: 'all', page: 1, status: 'ongoing' }));
		}
	}, [dispatch, memberinfo, goalCount]);

	return <HomeView member={memberinfo} goalCount={goalCount} goalList={goalList} />;
}

export default HomeContainer;
