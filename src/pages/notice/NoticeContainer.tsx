import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';
import NoticeView from './NoticeView';

function NoticeContainer() {
	const dispatch: AppDispatch = useDispatch();
	const { memberinfo } = useSelector((state: RootState) => state.member);

	useEffect(() => {
		if (!memberinfo && localStorage.getItem('goalKeeperToken')) dispatch(memberSlice.actions.loadMemberInfo());
	}, [dispatch, memberinfo]);

	return <NoticeView member={memberinfo} />;
}

export default NoticeContainer;
