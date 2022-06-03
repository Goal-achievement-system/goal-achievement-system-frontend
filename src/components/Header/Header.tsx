/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import RouteModal from 'components/Modal/RouteModal';
import useDetectClose from 'hooks/useDetectClose';
import Path from 'utils/path';

type Menu = {
	id: string;
	title: string;
	path: string;
};

export default function Header() {
	const { isLoggedIn } = useSelector((state: RootState) => state.auth);
	const dropDownRef = useRef<HTMLImageElement>(null);
	const [isOpen, setIsOpen] = useDetectClose(dropDownRef, [false, false]);
	const menuList = [
		{
			id: 'notice',
			title: '공지사항',
			path: Path.notice,
		},
		{
			id: '등록',
			title: '목표등록',
			path: '',
		},
		{
			id: '인증',
			title: '목표인증',
			path: '',
		},
		{
			id: 'profile',
			title: '내 정보',
			path: '',
		},
	];
	const menus = menuList.map((menu: Menu): React.ReactElement => {
		return (
			<li key={menu.id} className="p-2">
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

	return (
		<header className="pc:max-w-[1200px] h-[86px] flex mx-auto justify-between items-center">
			<div className="pc:basis-[312px] h-full flex items-center">
				<Link className="" to="/">
					<img className="pc:max-w-[157px] max-w-[112px]" src="./image/icon/logo.svg" alt="" />
				</Link>
			</div>
			<nav className="hidden mr-auto pc:block">
				<ul className="flex">{menus}</ul>
			</nav>
			<div className="hidden header-sub-menus pc:flex z-[1]" aria-hidden ref={dropDownRef}>
				<div className="relative">
					<img
						className="min-w-[35px] object-cover cursor-pointer"
						onClick={(e) => handleClick(e, 0)}
						aria-hidden
						src="./image/icon/alarm.svg"
						alt="alarm-icon"
					/>
					<RouteModal title="알림" isLogin={isLoggedIn} isOpen={isOpen[0]} />
				</div>
				<div className="relative">
					<img
						className="ml-[35px] min-w-[35px] object-cover cursor-pointer"
						onClick={(e) => handleClick(e, 1)}
						aria-hidden
						src="./image/icon/my.svg"
						alt="user-icon"
					/>
					<RouteModal title="개인정보 수정" isLogin={isLoggedIn} isOpen={isOpen[1]} />
				</div>
			</div>
			<div className="block pc:hidden min-w-[16px] min-h-[12px]">
				<button type="button">
					<img className="w-full" src="image/icon/hamburger.svg" alt="hamburger" />
				</button>
			</div>
		</header>
	);
}
