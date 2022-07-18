import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';
import { VerificationResultEng } from 'types/goal';
import useModal from 'hooks/useModal';
import { sexTransKrToEng, validatePassword } from 'utils/common';
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
		const { passwordCheck, sex, age, ...replaceMemberForm } = formState;

		if (!memberInfo || !formState) return alert('재접속 후 다시 시도해주세요!');
		if (formState.password !== passwordCheck) return alert('비밀번호가 일치하지 않아요!');
		if (!formState.password.trim() || !passwordCheck.trim() || !formState.nickName.trim())
			return alert('비어있는 값이 존재해요!');
		if (!validatePassword(formState.password)) return alert('비밀번호는 8자리 이상이어야 해요!');
		// Eng Kr 변환
		// eslint-disable-next-line no-nested-ternary
		const sexTrans = sexTransKrToEng(sex as SexKr);
		const ageTrans = Number(age.substring(0, age.length - 1));
		dispatch(memberSlice.actions.replaceMemberInfo({ ...replaceMemberForm, sex: sexTrans, age: ageTrans }));
	};

	useEffect(() => {
		// 여기서 return 해줘야함
		if (!replaceMemberResult) return;
		if (replaceMemberResult?.isSuccess) {
			// success
			alert('회원정보 변경이 완료되었어요!');
		} else {
			console.log(replaceMemberResult?.errorMsg);
		}
		replaceMemberInitResult();
	}, [memberInfo, replaceMemberInitResult, replaceMemberLoading, replaceMemberResult]);

	// filter가 바뀔 때마다 페이지를 1로 변경
	useEffect(() => {
		setCurrentPage(1);
	}, [goalFilter]);

	useEffect(() => {
		if (memberInfo) formDispatch({ type: 'init', payload: memberInfo });
	}, [memberInfo]);

	// 필터와 페이지가 바뀔 때마다 API 요청을 보냄
	useEffect(() => {
		if (memberInfo) dispatch(memberSlice.actions.getMemberGoals({ state: goalFilter, page: currentPage }));
	}, [goalFilter, currentPage, dispatch, memberInfo]);

	return (
		<MyPageView
			goals={goals}
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
