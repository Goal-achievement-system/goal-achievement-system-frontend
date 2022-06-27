/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import BaseTemplate from 'components/BaseTemplate';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MenuBox from 'components/Box/MenuBox';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';
import isLoggedIn from 'utils/isLoggedIn';
import Path from 'utils/path';
import Announcements from 'pages/Announcements/AnnouncementsContainer';
import Certifications from 'pages/Certifications/CertificationsContainer';
import Home from 'pages/home/HomeContainer';
import MoneyCharge from 'pages/Money/MoneyChargeContainer';
import MoneyTransfer from 'pages/Money/MoneyTransferContainer';
// import MyPage from 'pages/MyGoal/MyGoalContainer';
import MyPage from 'pages/MyPage/MyPageContainer';
import Inspection from 'pages/Admin/InspectionContainer';
import AdminAnnouncements from 'pages/Admin/AnnouncementsContainer';
import PushNotice from 'pages/PushNotice/PushNoticeContainer';
import AnnouncementsDetail from 'pages/Announcements/AnnouncementsDetail';
import ManageMenuBox from './Box/ManageMenuBox';

function Layout() {
	const dispatch: AppDispatch = useDispatch();

	const adminToken = localStorage.getItem('adminToken');
	const goalKeeperToken = localStorage.getItem('goalKeeperToken');
	const { memberinfo } = useSelector((state: RootState) => state.member);

	useEffect(() => {
		if (!memberinfo && isLoggedIn()) dispatch(memberSlice.actions.loadMemberInfo());
	}, [dispatch, memberinfo]);

	return (
		<BaseTemplate>
			<div className=" pc:w-[1200px] pc:flex mt-[0] pc:mt-[40px] pb-[50px] mx-auto pc:box-content">
				<div className="hidden pc:block mr-[30px]">
					{adminToken ? <ManageMenuBox member={null} /> : <MenuBox member={memberinfo} />}
				</div>
				{adminToken ? (
					<Routes>
						<Route path={Path.inspection} element={<Inspection />} />
						<Route path={Path.announcements} element={<Announcements />} />
					</Routes>
				) : goalKeeperToken ? (
					<Routes>
						<Route path={Path.home} element={<Home />} />
						<Route path={Path.announcements} element={<Announcements />} />
						<Route path={Path.certifications} element={<Certifications />} />
						<Route path={Path.moneyCharge} element={<MoneyCharge />} />
						<Route path={Path.moneyTransfer} element={<MoneyTransfer />} />
						<Route path={Path.myGoals} element={<MyPage />} />
						<Route path={Path.inspection} element={<Inspection />} />
						<Route path={Path.announcements} element={<AdminAnnouncements />} />
						<Route path={Path.pushNotice} element={<PushNotice />} />
					</Routes>
				) : (
					<Routes>
						<Route path={Path.home} element={<Home />} />
						<Route path={Path.announcements} element={<Announcements />} />
						<Route path="*" element={<Navigate to="/login" replace />} />
					</Routes>
				)}
			</div>
		</BaseTemplate>
	);
}

export default Layout;
