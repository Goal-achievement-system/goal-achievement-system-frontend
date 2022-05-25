/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'components/Popup/Popup';
import useDetectClose from 'utils/useDetectClose';

type Menu = {
	id: string;
	title: string;
};

export default function Header() {
	const dropDownRef = useRef<HTMLImageElement>(null);
	const [isOpen, setIsOpen] = useDetectClose(dropDownRef, [false, false]);
	const menuList = [
		{
			id: 'notice',
			title: '공지사항',
		},
		{
			id: '등록',
			title: '목표등록',
		},
		{
			id: '인증',
			title: '목표인증',
		},
		{
			id: 'profile',
			title: '내 정보',
		},
	];
	const menus = menuList.map((menu: Menu): React.ReactElement => {
		return (
			<li key={menu.id} className="p-2">
				<Link to={menu.id}>{menu.title}</Link>
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
		<header className="w-full h-[86px] p-2 flex justify-between items-center">
			<div className="basis-[312px] h-full flex items-center">
				<Link className="" to="/">
					<img className="" src="./img--logo.svg" alt="" />
				</Link>
			</div>
			<nav className="mr-auto ">
				<ul className="flex">{menus}</ul>
			</nav>
			<div className="header-sub-menus flex basis-[120px]" aria-hidden ref={dropDownRef}>
				<div className="relative">
					<img
						className="min-w-[35px] object-cover cursor-pointer"
						onClick={(e) => handleClick(e, 0)}
						aria-hidden
						src="./icon--alarm.svg"
						alt="alarm-icon"
					/>
					<div className="absolute right-0">
						<Popup title="알림" isLogin isOpen={isOpen[0]} />
					</div>
				</div>
				<div className="relative">
					<img
						className="ml-[35px] min-w-[35px] object-cover cursor-pointer"
						onClick={(e) => handleClick(e, 1)}
						aria-hidden
						src="./icon--my.svg"
						alt="user-icon"
					/>
					<div className="absolute right-0">
						<Popup title="개인정보 수정" isLogin isOpen={isOpen[1]} />
					</div>
				</div>
			</div>
		</header>
	);
}
