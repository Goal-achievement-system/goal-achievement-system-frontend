import React, { useCallback } from 'react';

enum BgColor {
	orange = 'bg-primaryOrange-200',
	gray = 'bg-[#f3f3f3]',
	black = 'bg-primaryBlack-500',
}
type BgColorTypes = 'orange' | 'black' | 'gray';
export interface Props {
	label?: string;
	onClick: () => void;
	bgColor: BgColorTypes;
	children?: React.ReactNode;
}

function SideBarButton({ label = '', onClick, bgColor, children }: Props) {
	const getBgColor = useCallback((type: BgColorTypes): BgColor => {
		if (type === 'orange') return BgColor.orange;
		if (type === 'black') return BgColor.black;
		return BgColor.gray;
	}, []);
	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex flex-row grow-0 justify-center items-center rounded-[8px]  w-full p-[16px] ${getBgColor(
				bgColor
			)}`}
		>
			{children || <span className="glow-0  not-italic whitespace-nowrap ">{label}</span>}
		</button>
	);
}

export default React.memo(SideBarButton);
