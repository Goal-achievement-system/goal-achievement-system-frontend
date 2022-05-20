import React from 'react';

export interface Props {
	label: string;
	isSelected: boolean;
	onClick: () => void;
}

function FilterButton({ label, isSelected, onClick }: Props) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`p-[16px] rounded-[8px] ${isSelected ? 'bg-primaryBlack-500' : 'bg-[#f3f3f3]'}`}
		>
			<span
				className={`glow-0  not-italic whitespace-nowrap ${isSelected ? 'text-primaryWhite' : 'text-primaryBlack-500'}`}
			>
				{label}
			</span>
		</button>
	);
}

export default React.memo(FilterButton);
