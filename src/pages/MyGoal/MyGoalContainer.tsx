import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';
import { VerificationResult } from 'types/goal';
import useModal from 'hooks/useModal';
import MyGoalView from './MyGoalView';

export default function MyGoal() {
	const dispatch: AppDispatch = useDispatch();
	const { maxPage } = useSelector((state: RootState) => state.member.memberGoals);
	const { goals } = useSelector((state: RootState) => state.member.memberGoals);
	const { memberinfo } = useSelector((state: RootState) => state.member);
	const { notificationList } = useSelector((state: RootState) => state.notifications);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [goalFilter, setGoalFilter] = useState<VerificationResult>('all');
	const [isSelected, setIsSelected] = useState<string>('전체');
	const [openModal, closeModal] = useModal();

	const openGoalModal = (index: number) => openModal({ name: 'GoalModal', props: { index } });

	// filter가 바뀔 때마다 페이지를 1로 변경
	useEffect(() => {
		setCurrentPage(1);
	}, [goalFilter]);

	// 필터와 페이지가 바뀔 때마다 API 요청을 보냄
	useEffect(() => {
		if (memberinfo) dispatch(memberSlice.actions.getMemberGoals({ state: goalFilter, page: currentPage }));
	}, [goalFilter, currentPage, dispatch, memberinfo]);

	return (
		<MyGoalView
			goals={goals}
			notificationList={notificationList}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
			goalFilter={goalFilter}
			setGoalFilter={setGoalFilter}
			isSelected={isSelected}
			setIsSelected={setIsSelected}
			maxPage={maxPage}
			openGoalModal={openGoalModal}
		/>
	);
}
