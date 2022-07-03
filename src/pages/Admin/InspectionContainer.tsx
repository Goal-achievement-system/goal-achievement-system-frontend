import useModal from 'hooks/useModal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import adminSlice from 'store/slices/adminSlice';
import { modalName } from 'utils/importModal';
import InspectionView from './InspectionView';

function InspectionContainer() {
	const dispatch = useDispatch();
	const [openModal, closeModal] = useModal();
	const [curPage, setCurPage] = useState<number>(1);
	const openCertAdminModal = (index: number) => openModal({ name: modalName.CertAdminModal, index });
	const inspectionList = useSelector((state: RootState) => state.admin.inspectionList);
	useEffect(() => {
		dispatch(adminSlice.actions.loadInspection({ page: curPage }));
	}, [dispatch, curPage]);
	return (
		<InspectionView
			inspectionList={inspectionList}
			openCertAdminModal={openCertAdminModal}
			curPage={curPage}
			setCurPage={setCurPage}
		/>
	);
}

export default InspectionContainer;
