import useModal from 'hooks/useModal';
import React from 'react';
import AnnouncementsView from './AnnouncementsView';

function AnnouncementsContainer() {
	const [openModal, closeModal] = useModal();

	const openAnnounceMentsAddModal = () => openModal({ name: 'AnnounceMentsAddModal' });

	return <AnnouncementsView openAnnounceMentsAddModal={openAnnounceMentsAddModal} />;
}

export default AnnouncementsContainer;
