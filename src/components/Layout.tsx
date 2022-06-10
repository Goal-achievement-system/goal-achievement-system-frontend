import React, { useEffect } from 'react';
import BaseTemplate from 'components/BaseTemplate';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MenuBox from 'components/Box/MenuBox';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';
import isLoggedIn from 'utils/isLoggedIn';
import Path from 'utils/path';
import Notice from 'pages/notice/NoticeContainer';
import Certifications from 'pages/Certifications/CertificationsContainer';
import Home from 'pages/home/HomeContainer';
import MoneyCharge from 'pages/Money/MoneyChargeContainer';
import MoneyTransfer from 'pages/Money/MoneyTransferContainer';
import GoalRegister from 'pages/GoalRegister/GoalRegisterContainer';

function Layout() {
	const dispatch: AppDispatch = useDispatch();

	const { memberinfo } = useSelector((state: RootState) => state.member);

	useEffect(() => {
		if (!memberinfo && isLoggedIn()) dispatch(memberSlice.actions.loadMemberInfo());
	}, [dispatch, memberinfo]);

	return (
		<BaseTemplate>
			<div className=" pc:w-[1200px] pc:flex mt-[50px] pb-[50px] mx-auto pc:box-content">
				<div className="hidden pc:block mr-[30px]">
					<MenuBox member={memberinfo} />
				</div>
				<Routes>
					<Route path={Path.home} element={<Home />} />
					<Route path={Path.notice} element={<Notice />} />
					<Route path={Path.certifications} element={<Certifications />} />
					<Route path={Path.moneyCharge} element={<MoneyCharge />} />
					<Route path={Path.moneyTransfer} element={<MoneyTransfer />} />
					<Route path={Path.goalRegister} element={<GoalRegister />} />
				</Routes>
			</div>
		</BaseTemplate>
	);
}

export default Layout;
/*


	<div className="flex-1">
					<div className="mb-[16px] pc:mb-[30px] font-[800] text-[20px] leading-[24px] pc:font-[800] pc:text-[30px] pc:leading-[36px]">
						{title}
					</div>
</div>

          */
