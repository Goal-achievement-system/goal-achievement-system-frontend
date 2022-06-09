import React from 'react';

enum BgColor {
	orange200 = 'bg-primaryOrange-200',
	white = 'bg-primaryWhite',
}
enum TextColor {
	orange200 = 'text-primaryOrange-200',
	white = 'text-primaryWhite',
}

export interface Props {
	label?: string;
	onClick: () => void;
	isSelected: boolean;
	size: 'large' | 'medium' | 'small';
	children?: React.ReactNode;
}

function ObtionButton({ label = '', onClick, isSelected, size, children }: Props) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex flex-row grow-0 justify-between items-center  rounded-[8px] border border-[1px] px-[16px] border-primaryOrange-200  ${
				size === 'small' ? '' : 'w-full'
			}  ${size === 'large' ? 'py-[24px]' : 'py-[16px]'}	${isSelected ? BgColor.orange200 : BgColor.white} `}
		>
			{children || (
				<span className={`glow-0  not-italic whitespace-nowrap ${isSelected ? TextColor.white : TextColor.orange200}`}>
					{label}
				</span>
			)}
		</button>
	);
}

export default React.memo(ObtionButton);
