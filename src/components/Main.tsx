import React from 'react';

interface Props {
	title: string;
	children: React.ReactNode;
}
function Main({ title, children }: Props) {
	return (
		<div className="flex-1">
			<div className="mb-[16px] pc:mb-[30px] font-[800] text-[20px] leading-[24px] pc:font-[800] pc:text-[30px] pc:leading-[36px]">
				{title}
			</div>
			{children}
		</div>
	);
}

export default Main;
