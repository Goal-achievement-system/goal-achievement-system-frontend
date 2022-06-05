import React, { useEffect } from 'react';
import BaseTemplate from 'components/BaseTemplate';

import { useDispatch, useSelector } from 'react-redux';
import MenuBox from 'components/Box/MenuBox';
import { AppDispatch } from 'store';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';

interface Props {
	title?: string;
	children: React.ReactNode;
}

function Layout({ title, children }: Props) {
	const dispatch: AppDispatch = useDispatch();

	const { memberinfo } = useSelector((state: RootState) => state.member);

	useEffect(() => {
		if (!memberinfo && localStorage.getItem('goalKeeperToken')) dispatch(memberSlice.actions.loadMemberInfo());
	}, [dispatch, memberinfo]);

	return (
		<BaseTemplate>
			<div className=" pc:w-[1200px] pc:flex mt-[50px] mx-auto pc:box-content ">
				<div className="hidden pc:block mr-[30px]">
					<MenuBox member={memberinfo} />
				</div>
				<div className="flex-1">
					<div className="mb-[16px] pc:mb-[30px] font-[800] text-[20px] leading-[24px] pc:font-[800] pc:text-[30px] pc:leading-[36px]">
						{title}
					</div>
					{children}
				</div>
			</div>
		</BaseTemplate>
	);
}

export default Layout;
