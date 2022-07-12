import React, { useEffect, useRef, useState } from 'react';
import useDetectClose from 'hooks/useDetectClose';
import Path from 'utils/path';
import HeaderView from './HeaderView';

interface Props {
	isAdmin?: string | null;
}

export default function Header({ isAdmin }: Props) {
	const dropDownRef = useRef<HTMLImageElement>(null);
	const [isOpen, setIsOpen] = useDetectClose(dropDownRef, [false, false]);
	const [isOpenSideMenu, setIsOpenSideMenu] = useState<boolean>(false);
	const menuList = isAdmin
		? [
				{
					id: 'inspection',
					title: '목표 검토',
					path: Path.inspection,
				},
				{
					id: 'adminAnnouncements',
					title: '공지사항',
					path: Path.adminAnnouncements,
				},
		  ]
		: [
				{
					id: 'notice',
					title: '공지사항',
					path: Path.announcements,
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

	useEffect(() => {
		if (isOpenSideMenu) {
			document.body.style.cssText = `
			  position: fixed;
			  overflow: hidden;
			  width: 100%;
			  height: 100%
			`;
			return;
		}
		document.body.style.cssText = '';
	}, [isOpenSideMenu]);

	return (
		<HeaderView
			isOpen={isOpen}
			isOpenSideMenu={isOpenSideMenu}
			menuList={menuList}
			dropDownRef={dropDownRef}
			setIsOpen={setIsOpen}
			handleClick={handleClick}
			handleClickOfSideMenu={handleClickOfSideMenu}
		/>
	);
}
