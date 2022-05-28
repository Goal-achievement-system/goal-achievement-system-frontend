/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import Header from 'components/Header/Header';

interface TemplateProps {
	children: React.ReactElement;
	Modal: React.ReactElement;
}

export default function BaseTemplate({ children, Modal }: TemplateProps) {
	const modalRef = useRef<HTMLDivElement>(null);
	// store 에서 관리하면 될 듯하다.
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleModalClick = (e: React.BaseSyntheticEvent | MouseEvent) => {
		const { current } = modalRef;
		const { target } = e;

		if (current !== null && (!current.contains(target) || current === target)) {
			setIsOpen(false);
			document.body.style.cssText = '';
		}
	};

	const handleClick = () => {
		setIsOpen(true);
		// 모달을 제외한 스크롤 방지
		document.body.style.cssText = `
			position: fixed;
			overflow: hidden;
			width: 100%;
			height: 100%
		`;
	};

	const modalSection = (
		<div className="absolute top-0 left-0 w-full h-full qqqqqq z-1000" onClick={handleModalClick} aria-hidden>
			<div className="absolute w-full h-full z-999 bg-primaryBlack-500 bg-opacity-20" />
			<div className="relative top-1/2 left-1/2" ref={modalRef}>
				{Modal}
			</div>
		</div>
	);

	return (
		<div className="main pc:max-w-[1200px] m-auto">
			<Header />
			<div onClick={handleClick} aria-hidden>
				{children}
			</div>
			{Modal && isOpen && modalSection}
		</div>
	);
}
