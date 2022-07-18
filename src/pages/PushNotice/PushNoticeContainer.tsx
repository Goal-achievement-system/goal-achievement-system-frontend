import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import PushNoticeView from './PushNoticeView';

export default function PushNotice() {
	const { pushNoticeList } = useSelector((state: RootState) => state.pushNotice);
	return <PushNoticeView pushNoticeList={pushNoticeList} />;
}
