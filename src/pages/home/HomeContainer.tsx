import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import goalSlice from 'store/slices/goalSlice';
import memberSlice from 'store/slices/memberSlice';
import statisticsSlice from 'store/slices/statisticsSlice';

import useModal from 'hooks/useModal';

import useGetActionState from 'hooks/useGetActionState';
import HomeView from './HomeView';

function HomeContainer() {
	const dispatch: AppDispatch = useDispatch();
	const { goalCount } = useSelector((state: RootState) => state.statistics);
	const { memberinfo } = useSelector((state: RootState) => state.member);
	const { goalList } = useSelector((state: RootState) => state.goal);
	const [loading] = useGetActionState(memberSlice.actions.loadMemberInfo.type);
	const [openModalOnClick, cloasModal] = useModal();
	// const openGoalModal = (index: number) => openModal({ name: 'GoalModal', props: { index } });

	useEffect(() => {
		if (!memberinfo) {
			dispatch(statisticsSlice.actions.loadGoalCount());
		} else {
			dispatch(goalSlice.actions.loadGoalList({ category: 'all', page: 1, status: 'oncertification' }));
		}
	}, [dispatch, memberinfo, goalCount]);

	if (loading) return null;
	return <HomeView member={memberinfo} goalCount={goalCount} goalList={goalList} openModalOnClick={openModalOnClick} />;
}

export default HomeContainer;
