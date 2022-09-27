import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import modalSlice, { ModalComponentState } from 'store/slices/modalSlice';
import React, { useEffect, useRef, Suspense } from 'react';
import modalList from 'utils/importModal';
import { Router, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Path from 'utils/path';

export default function ModalSection() {
	const bodyRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);
	const { openList, isOpenModal } = useSelector((state: RootState) => state.modal);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [searchParams] = useSearchParams();

	useEffect(() => {
		if (isOpenModal) {
			document.body.style.cssText = `
			  position: fixed;
			  overflow: hidden;
			  width: 100%;
			  height: 100%
			`;
			return;
		}
		document.body.style.cssText = '';
	}, [isOpenModal]);

	const handleModalClick = (e: React.BaseSyntheticEvent | MouseEvent) => {
		const { target } = e;

		// if (current !== null && (!current.contains(target) || current === target)) {
		if (modalRef.current === target || bodyRef.current === target) {
			if (pathname === Path.myGoals) {
				dispatch(modalSlice.actions.close());
				navigate(Path.myGoals);
				document.body.style.cssText = '';
				return;
			}
			if (searchParams.get('goal')) {
				navigate(-1);
				dispatch(modalSlice.actions.close());
				document.body.style.cssText = '';
			}
		}

		// }
	};

	return (
		<Suspense fallback={<div>정보를 불러오는 중이에요.</div>}>
			<div
				className={`absolute top-0 left-0 z-50 w-full h-full ${isOpenModal ? '' : 'hidden'}`}
				onClick={handleModalClick}
				aria-hidden
			>
				<div className="absolute w-full h-full z-999 bg-primaryBlack-500 bg-opacity-20" ref={bodyRef} />
				<div className="relative top-1/2 left-1/2" ref={modalRef}>
					{openList.map(({ name, props }: ModalComponentState) => {
						const config = modalList.find((ele) => ele.name === name);
						if (!config || !config.component) return null;
						const ModalComponent = config.component;
						// eslint-disable-next-line react/jsx-props-no-spreading
						return <ModalComponent {...props} key={name} />;
					})}
				</div>
			</div>
		</Suspense>
	);
}

// export default React.memo(ModalSection);
