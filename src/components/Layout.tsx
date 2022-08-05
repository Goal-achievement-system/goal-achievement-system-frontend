/* eslint-disable no-nested-ternary */
import React, { useEffect, Suspense, lazy } from 'react';
import BaseTemplate from 'components/BaseTemplate';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MenuBox from 'components/Box/MenuBox';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';
import isLoggedIn from 'utils/isLoggedIn';
import Path from 'utils/path';
import pushNoticeSlice from 'store/slices/pushNotice';
import ManageMenuBox from './Box/ManageMenuBox';

const Home = lazy(() => import('pages/home/HomeContainer'));
const Announcements = lazy(() => import('pages/Announcements/AnnouncementsContainer'));
const Certifications = lazy(() => import('pages/Certifications/CertificationsContainer'));
const MoneyCharge = lazy(() => import('pages/Money/MoneyChargeContainer'));
const MoneyTransfer = lazy(() => import('pages/Money/MoneyTransferContainer'));
const MyPage = lazy(() => import('pages/MyPage/MyPageContainer'));
const Inspection = lazy(() => import('pages/Admin/InspectionContainer'));
const AdminAnnouncements = lazy(() => import('pages/Admin/AnnouncementsContainer'));
const PushNotice = lazy(() => import('pages/PushNotice/PushNoticeContainer'));

function Layout() {
	const dispatch: AppDispatch = useDispatch();

	const adminToken = localStorage.getItem('adminToken');
	const goalKeeperToken = localStorage.getItem('goalKeeperToken');
	const { memberinfo } = useSelector((state: RootState) => state.member);
	const { isAdmin } = useSelector((state: RootState) => state.admin);

	useEffect(() => {
		if (!memberinfo && isLoggedIn()) {
			dispatch(memberSlice.actions.loadMemberInfo());
			dispatch(pushNoticeSlice.actions.loadNotification());
		}
	}, [dispatch, memberinfo]);
	return (
		<BaseTemplate isAdmin={isAdmin}>
			<div className=" pc:w-[1200px] pc:flex mt-[0] pc:mt-[40px] pb-[50px] mx-auto pc:box-content">
				<div className="hidden pc:block mr-[30px]">
					{adminToken ? <ManageMenuBox member={null} /> : <MenuBox member={memberinfo} />}
				</div>
				<Suspense fallback={<div>Loading...</div>}>
					{adminToken ? (
						<Routes>
							<Route path={Path.inspection} element={<Inspection />} />
							<Route path={Path.announcements} element={<Announcements />} />
							<Route path={Path.adminAnnouncements} element={<AdminAnnouncements />} />
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
				</Suspense>
			</div>
		</BaseTemplate>
	);
}

export default Layout;
