/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Header from 'components/Header/HeaderContainer';
import ModalSection from 'components/Modal/ModalSection';

interface TemplateProps {
	isAdmin?: string | null;
	children: React.ReactNode;
}

export default function BaseTemplate({ isAdmin, children }: TemplateProps) {
	return (
		<div className="main pc:max-w-[1200px] mx-auto px-[20px] pb-[20px] pc:px-[0]">
			<Header isAdmin={isAdmin} />
			{children}
			<ModalSection />
		</div>
	);
}
