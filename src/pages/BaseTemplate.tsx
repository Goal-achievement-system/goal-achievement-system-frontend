import React from 'react';
import Header from 'components/Header/Header';

interface TemplateProps {
	children: React.ReactElement;
	Modal: React.ReactElement;
}

export default function BaseTemplate({ children, Modal }: TemplateProps) {
	<div className="w-full h-full main">
		<Header />
		<section>{children}</section>
		{/* <Modal /> */}
	</div>;
}
