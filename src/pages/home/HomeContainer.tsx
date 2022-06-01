import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import goalSlice from 'store/slices/goalSlice';
import statisticsSlice from 'store/slices/statisticsSlice';
import HomeView from './HomeView';

function HomeContainer() {
	const dispatch: AppDispatch = useDispatch();
	const { goalCount } = useSelector((state: RootState) => state.statistics);

	useEffect(() => {
		// dispatch(goalSlice.actions.loadGoalList({ category, page, status }));
		if (!goalCount) {
			dispatch(statisticsSlice.actions.loadGoalCount());
		}
	}, [dispatch, goalCount]);

	return <HomeView member={null} goalCount={goalCount} />;
}

export default HomeContainer;
