import useModal from 'hooks/useModal';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import adminSlice from 'store/slices/adminSlice';
import { modalName } from 'utils/importModal';
import AnnouncementsView from './AnnouncementsView';

function AnnouncementsContainer() {
	const dispatch = useDispatch();
	const [openModal] = useModal();
	const openAnnounceMentsAddModal = () => openModal({ name: modalName.AnnouncementsAddModal });
	const openAnnounceMentsEditModal = (index: number) => openModal({ name: modalName.AnnouncementsEditModal, index });
	const announcementsList = useSelector((state: RootState) => state.admin.announcementsList);
	useEffect(() => {
		dispatch(adminSlice.actions.loadAnnouncementsList({ page: 1 }));
	}, [dispatch]);

	console.log(announcementsList);

	return (
		<AnnouncementsView
			openAnnounceMentsAddModal={openAnnounceMentsAddModal}
			openAnnounceMentsEditModal={openAnnounceMentsEditModal}
			announcementsList={announcementsList}
		/>
	);
}

export default AnnouncementsContainer;
