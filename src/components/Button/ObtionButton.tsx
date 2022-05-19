import React from 'react';

enum Color {
	orange200 = 'primaryOrange-200',
	white = 'primaryWhite',
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
			}  ${size === 'large' ? 'py-[22px]' : 'py-[16px]'}	bg-${isSelected ? Color.orange200 : Color.white} `}
		>
			{children || (
				<span className={`glow-0  not-italic whitespace-nowrap text-${isSelected ? Color.white : Color.orange200}`}>
					{label}
				</span>
			)}
		</button>
	);
}

export default React.memo(ObtionButton);
