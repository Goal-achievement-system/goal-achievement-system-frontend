/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import RouteModal from 'components/Modal/RouteModal';
import useDetectClose from 'hooks/useDetectClose';
import Path from 'utils/path';
import SideMenu from 'components/Sidemenu/Sidemenu';

type Menu = {
	id: string;
	title: string;
	path: string;
};

export default function Header() {
	const { isLoggedIn } = useSelector((state: RootState) => state.auth);
	const dropDownRef = useRef<HTMLImageElement>(null);
	const [isOpen, setIsOpen] = useDetectClose(dropDownRef, [false, false]);
	const [isOpenSideMenu, setIsOpenSideMenu] = useState<boolean>(false);
	const menuList = [
		{
			id: 'notice',
			title: '공지사항',
			path: Path.notice,
		},
		{
			id: 'registerGoal',
			title: '목표등록',
			path: Path.goalRegister,
		},
		{
			id: 'certifications',
			title: '목표인증',
			path: Path.certifications,
		},
		{
			id: 'profile',
			title: '내정보',
			path: Path.myGoals,
		},
	];
	const menus = menuList.map((menu: Menu): React.ReactElement => {
		return (
			<li key={menu.id} className="font-[600]">
				<Link to={menu.path}>{menu.title}</Link>
			</li>
		);
	});

	const handleClick = (e: React.MouseEvent<HTMLImageElement>, index: number) => {
		if (e.target === e.currentTarget) {
			setIsOpen((current: boolean[]) => {
				const newIsOpen = current.map(() => false);
				newIsOpen[index] = !isOpen[index];
				return newIsOpen;
			});
		}
	};

	const handleClickOfSideMenu = () => setIsOpenSideMenu(!isOpenSideMenu);

	return (
		<header className="pc:max-w-[1200px] h-[86px] flex mx-auto  justify-between items-center">
			<div className="pc:basis-[312px] h-full flex items-center">
				<Link className="" to="/">
					<img
						className="pc:max-w-[157px] max-w-[112px]"
						src={`${process.env.PUBLIC_URL}/image/icon/logo.svg`}
						alt="logo-icon"
					/>
				</Link>
			</div>
			<nav className="hidden mr-auto pc:block">
				<ul className="flex space-x-[39px]">{menus}</ul>
			</nav>
			<div className="hidden header-sub-menus pc:flex z-[1]" aria-hidden ref={dropDownRef}>
				<div className="relative">
					<img
						className="min-w-[35px] object-cover cursor-pointer"
						onClick={(e) => handleClick(e, 0)}
						aria-hidden
						src={`${process.env.PUBLIC_URL}/image/icon/alarm.svg`}
						alt="alarm-icon"
					/>
					<RouteModal title="알림" isOpen={isOpen[0]} setIsOpen={setIsOpen} />
				</div>
				<div className="relative">
					<img
						className="ml-[35px] min-w-[35px] object-cover cursor-pointer"
						onClick={(e) => handleClick(e, 1)}
						aria-hidden
						src={`${process.env.PUBLIC_URL}/image/icon/my.svg`}
						alt="user-icon"
					/>
					<RouteModal title="로그인 관리" isOpen={isOpen[1]} setIsOpen={setIsOpen} />
				</div>
			</div>
			<div className="block pc:hidden min-w-[16px] min-h-[12px] ">
				<button type="button" onClick={handleClickOfSideMenu}>
					<img className="w-full" src="../image/icon/hamburger.svg" alt="hamburger" />
				</button>
			</div>
			{isOpenSideMenu && <SideMenu handleClickOfSideMenu={handleClickOfSideMenu} />}
		</header>
	);
}
