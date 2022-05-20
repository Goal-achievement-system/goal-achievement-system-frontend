import React, { useCallback } from 'react';

enum Color {
	orange = 'primaryOrange-200',
	gray = '[#f3f3f3]',
	black = 'primaryBlack-500',
}
type BgColorTypes = 'orange' | 'black' | 'gray';
export interface Props {
	label?: string;
	onClick: () => void;
	bgColor: BgColorTypes;
	children?: React.ReactNode;
}

function SideBarButton({ label = '', onClick, bgColor, children }: Props) {
	const getBgColor = useCallback((type: BgColorTypes): Color => {
		if (type === 'orange') return Color.orange;
		if (type === 'black') return Color.black;
		return Color.gray;
	}, []);
	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex flex-row grow-0 justify-center items-center rounded-[8px]  w-full p-[16px] bg-${getBgColor(
				bgColor
			)}`}
		>
			{children || <span className="glow-0  not-italic whitespace-nowrap ">{label}</span>}
		</button>
	);
}

export default React.memo(SideBarButton);
