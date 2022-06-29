import useModal from 'hooks/useModal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import adminSlice from 'store/slices/adminSlice';
import { Announcements } from 'types/announcements';
import { modalName } from 'utils/importModal';
import AnnouncementsView from './AnnouncementsView';

function AnnouncementsContainer() {
	const dispatch = useDispatch();
	const [openModal] = useModal();
	const [curPage, setCurPage] = useState<number>(1);
	const { announcementsList } = useSelector((state: RootState) => state.admin);
	const openAnnounceMentsAddModal = () => openModal({ name: modalName.AnnouncementsAddModal });
	const openAnnounceMentsDetailModal = (announcements: Announcements) => {
		dispatch(adminSlice.actions.loadAnnouncementsInfo(announcements));
		openModal({ name: modalName.AnnouncementsDetailModal });
	};
	useEffect(() => {
		dispatch(adminSlice.actions.loadAnnouncementsList({ page: curPage }));
	}, [dispatch, curPage]);

	return (
		<AnnouncementsView
			openAnnounceMentsAddModal={openAnnounceMentsAddModal}
			openAnnounceMentsDetailModal={openAnnounceMentsDetailModal}
			announcementsList={announcementsList}
			curPage={curPage}
			setCurPage={setCurPage}
		/>
	);
}

export default AnnouncementsContainer;
