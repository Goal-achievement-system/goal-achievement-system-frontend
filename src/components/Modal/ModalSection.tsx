import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import modalSlice, { ModalComponentState } from 'store/slices/modalSlice';
import React, { useEffect, useRef } from 'react';
import modalList from 'utils/importModal';
import useModal from 'hooks/useModal';

export default function ModalSection() {
	// const [openModal, closeModal] = useModal();
	const modalRef = useRef<HTMLDivElement>(null);
	const { openList, isOpenModal } = useSelector((state: RootState) => state.modal);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isOpenModal) {
			document.body.style.cssText = `
			  position: fixed;
			  overflow: hidden;
			  width: 100%;
			  height: 100%
			`;
		}
	}, [isOpenModal]);

	const handleModalClick = (e: React.BaseSyntheticEvent | MouseEvent) => {
		const { current } = modalRef;
		const { target } = e;

		if (current !== null && (!current.contains(target) || current === target)) {
			// closeModal();
			dispatch(modalSlice.actions.close());
			document.body.style.cssText = '';
		}
	};

	return (
		<div className="absolute top-0 left-0 z-50 w-full h-full" onClick={handleModalClick} aria-hidden>
			<div className="absolute w-full h-full z-999 bg-primaryBlack-500 bg-opacity-20" />
			<div className="relative top-1/2 left-1/2" ref={modalRef}>
				{openList.map(({ name, props }: ModalComponentState) => {
					const config = modalList.find((ele) => {
						return ele.name === name;
					});
					if (!config || !config.component) return null;
					const ModalComponent = config.component;
					// eslint-disable-next-line react/jsx-props-no-spreading
					return <ModalComponent {...props} />;
				})}
			</div>
		</div>
	);
}
