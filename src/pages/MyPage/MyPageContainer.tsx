import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';
import { VerificationResultEng } from 'types/goal';
import useModal from 'hooks/useModal';
import { sexTransKrToEng } from 'utils/common';
import useGetActionState from 'hooks/useGetActionState';
import { SexKr } from 'types/member';
import { replaceMemberformReducer, replaceMemberInitialState } from './ReplaceMemberForm';
import MyPageView from './MyPageView';

export type SelectType = 'age' | 'sex';

export default function MyPage() {
	// 1. 받아온다.
	const memberInfo = useSelector((state: RootState) => state.member.memberinfo);
	const { maxPage } = useSelector((state: RootState) => state.member.memberGoals);
	const { goals } = useSelector((state: RootState) => state.member.memberGoals);
	const { pushNoticeList } = useSelector((state: RootState) => state.pushNotice);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [goalFilter, setGoalFilter] = useState<VerificationResultEng>('all');
	const [isSelected, setIsSelected] = useState<string>('전체');

	const [formState, formDispatch] = useReducer(replaceMemberformReducer, replaceMemberInitialState);
	const [openModalonClick] = useModal();

	const [replaceMemberLoading, replaceMemberResult, replaceMemberInitResult] = useGetActionState(
		memberSlice.actions.replaceMemberInfo.type
	);

	const dispatch: AppDispatch = useDispatch();
	// eslint-disable-next-line consistent-return
	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		const { sex, age, ...replaceMemberForm } = formState;

		if (!memberInfo || !formState) return alert('재접속 후 다시 시도해주세요!');
		if (!formState.password) return alert('회원 정보 변경 시 비밀번호를 입력해주세요!');
		// Eng Kr 변환
		// eslint-disable-next-line no-nested-ternary
		const sexTrans = sexTransKrToEng(sex as SexKr);
		const ageTrans = Number(age.substring(0, age.length - 1));
		dispatch(memberSlice.actions.replaceMemberInfo({ ...replaceMemberForm, sex: sexTrans, age: ageTrans }));
	};

	useEffect(() => {
		if (!replaceMemberResult) return;
		if (replaceMemberResult?.isSuccess) {
			// success
			alert('회원정보 변경이 완료되었어요!');
		} else {
			// 이 부분을 추가
			alert('비밀번호를 다시 한번 확인해주세요!');
		}
		replaceMemberInitResult();
	}, [memberInfo, replaceMemberInitResult, replaceMemberLoading, replaceMemberResult]);

	// filter가 바뀔 때마다 페이지를 1로 변경
	useEffect(() => {
		setCurrentPage(1);
	}, [goalFilter]);
	// 필터와 페이지가 바뀔 때마다 API 요청을 보냄
	useEffect(() => {
		if (memberInfo) dispatch(memberSlice.actions.getMemberGoals({ state: goalFilter, page: currentPage }));
	}, [goalFilter, currentPage, dispatch, memberInfo]);

	useEffect(() => {
		if (memberInfo) formDispatch({ type: 'init', payload: memberInfo });
	}, [memberInfo]);

	return (
		<MyPageView
			goals={goals}
			pushNoticeList={pushNoticeList}
			formState={formState}
			formDispatch={formDispatch}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
			goalFilter={goalFilter}
			setGoalFilter={setGoalFilter}
			isSelected={isSelected}
			setIsSelected={setIsSelected}
			maxPage={maxPage}
			handleSubmit={handleSubmit}
			openModalOnClick={openModalonClick}
		/>
	);
}
