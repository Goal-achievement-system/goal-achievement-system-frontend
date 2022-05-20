import React from 'react';

enum BgColor {
	white = 'bg-primaryWhite',
	gray = 'bg-[#f3f3f3]',
	black = 'bg-primaryBlack-500',
}
enum TextColor {
	white = 'text-primaryWhite',

	black = 'text-primaryBlack-500',
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
			className={`p-[16px] rounded-[8px] ${isSelected ? BgColor.black : BgColor.gray} `}
		>
			<span className={`glow-0  not-italic whitespace-nowrap ${isSelected ? TextColor.white : TextColor.black} `}>
				{label}
			</span>
		</button>
	);
}

export default React.memo(FilterButton);
