import React from 'react';

enum Color {
	white = 'primaryWhite',
	gray = '[#f3f3f3]',
	black = 'primaryBlack-500',
}

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
			className={`p-[16px] rounded-[8px] bg-${isSelected ? Color.black : Color.gray}`}
		>
			<span className={`glow-0  not-italic whitespace-nowrap text-${isSelected ? Color.white : Color.black}`}>
				{label}
			</span>
		</button>
	);
}

export default React.memo(FilterButton);
