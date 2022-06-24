import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
	title: string;
	children: React.ReactNode;
	hasGoBack?: boolean;
}
function Main({ title, children, hasGoBack }: Props) {
	const navigate = useNavigate();
	return (
		<div className="flex-1 overflow-auto">
			<div className=" flex items-center mb-[16px] pc:mb-[30px] font-[800] text-[20px] leading-[24px] pc:font-[800] pc:text-[30px] pc:leading-[36px]">
				{hasGoBack && (
					<button type="button" onClick={() => navigate(-1)} className=" mr-[4px]">
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
						</svg>
					</button>
				)}
				{title}
			</div>
			{children}
		</div>
	);
}

export default Main;
