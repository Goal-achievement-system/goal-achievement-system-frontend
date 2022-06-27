import Main from 'components/Main';
import React, { useState } from 'react';
import { NoticeCategory } from 'types/notice';
import FilterButton from 'components/Button/FilterButton';
import BaseTemplate from 'components/BaseTemplate';
import AuthLayout from 'components/AuthLayout';

function AnnouncementsDetail() {
	return (
		<BaseTemplate>
			<div className="w-full mt-[40px] mb-[100px]">
				<img src="image/announcements/announcements_detail.png" alt="AnnouncementsDetail" />
			</div>
		</BaseTemplate>
	);
}

export default AnnouncementsDetail;
