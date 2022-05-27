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

	const handleClick = (e: React.BaseSyntheticEvent | MouseEvent) => {
		if (modalRef.current !== null && !modalRef.current.contains(e.target)) {
			setIsOpen(false);
			document.body.style.cssText = '';
		}
	};
	const modalSection = (
		<div className="absolute top-0 left-0 w-full h-full z-1000" onClick={handleClick} aria-hidden>
			<div className="absolute w-full h-full z-999 bg-primaryBlack-500 bg-opacity-20" />
			<div className="relative top-1/2 left-1/2" ref={modalRef}>
				{Modal}
			</div>
		</div>
	);

	return (
		<div className="fixed w-full h-full main">
			<Header />
			<section
				onClick={() => {
					setIsOpen(true);
					document.body.style.cssText = 'overflow : hidden';
				}}
				aria-hidden
			>
				{children}
			</section>
			{Modal && isOpen && modalSection}
		</div>
	);
}
