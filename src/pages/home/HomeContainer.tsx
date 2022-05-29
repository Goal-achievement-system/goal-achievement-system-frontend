import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import goalSlice from 'store/slices/goalSlice';
import isLoggedIn from 'utils/isLoggedIn';
import Path from 'utils/path';
import HomeView from './HomeView';

function HomeContainer() {
	const dispatch: AppDispatch = useDispatch();
	const { isLoading, list, error } = useSelector((state: RootState) => state.goal);
	const category = '다이어트';
	const page = 1;
	const status = 'ongoing';
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoggedIn()) navigate(Path.login);

		dispatch(goalSlice.actions.loadGoalList({ category, page, status }));
	}, [dispatch, navigate]);

	return <HomeView member={null} />;
}

export default HomeContainer;
