/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import RouteModal from 'components/Modal/RouteModal';
import Path from 'utils/path';
import SideMenu from 'components/Sidemenu/Sidemenu';

type Menu = {
	id: string;
	title: string;
	path: string;
};

interface Props {
	isAdmin?: string | null;
	isOpen: any;
	isOpenSideMenu: boolean;
	menuList: Menu[];
	dropDownRef: React.RefObject<HTMLImageElement>;
	setIsOpen: Dispatch<SetStateAction<any>>;
	handleClick: (e: React.MouseEvent<HTMLImageElement>, index: number) => void;
	handleClickOfSideMenu: () => void;
}

export default function HeaderView({
	isAdmin,
	isOpen,
	isOpenSideMenu,
	menuList,
	dropDownRef,
	setIsOpen,
	handleClick,
	handleClickOfSideMenu,
}: Props) {
	const menus = menuList.map((menu: Menu): React.ReactElement => {
		return (
			<li key={menu.id} className="font-[600] pc:min-w-[65px]">
				<Link to={menu.path}>{menu.title}</Link>
			</li>
		);
	});

	return (
		<header className="pc:max-w-[1200px] h-[86px] flex mx-auto justify-between items-center">
			<div className="pc:basis-[312px] h-full flex items-center">
				<Link className="logo-link" to={isAdmin ? Path.inspection : Path.home}>
					<img
						className="pc:max-w-[157px] max-w-[112px]"
						src={`${process.env.PUBLIC_URL}/image/icon/logo.svg`}
						alt="logo-icon"
					/>
				</Link>
			</div>
			<nav className="hidden mr-auto pc:block">
				<ul className="flex space-x-[35px]">{menus}</ul>
			</nav>
			<div className="hidden header-sub-menus pc:flex z-[1]" aria-hidden ref={dropDownRef}>
				{!isAdmin && (
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
				)}
				{isAdmin ? (
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
				) : (
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
				)}
			</div>
			{!isAdmin && (
				<div className="block pc:hidden min-w-[16px] min-h-[12px] ">
					<button type="button" onClick={handleClickOfSideMenu}>
						<img className="w-full" src="../image/icon/hamburger.svg" alt="hamburger" />
					</button>
				</div>
			)}
			{isOpenSideMenu && <SideMenu handleClickOfSideMenu={handleClickOfSideMenu} />}
		</header>
	);
}
