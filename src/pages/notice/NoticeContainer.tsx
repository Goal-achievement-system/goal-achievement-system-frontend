import React, { useState } from 'react';
import { NoticeCategory } from 'types/notice';
import NoticeView from './NoticeView';

function NoticeContainer() {
	const [category, setCategory] = useState<NoticeCategory>('all');
	return <NoticeView member={null} category={category} setCategory={setCategory} />;
}

export default NoticeContainer;
