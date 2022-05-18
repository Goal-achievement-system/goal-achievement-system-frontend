import React, { useCallback } from 'react';

type BtnStates = 'active' | 'pressed';

enum BgColor {
	orange100 = 'bg-primaryOrange-100',
	white = 'bg-primaryWhite',
}

export interface Props {
	label: string;
	onClick: () => void;
	btnState: BtnStates;
}

function OutlineButton({ label, onClick, btnState }: Props) {
	const getBgColor = useCallback((state: BtnStates): BgColor => {
		if (state === 'active') return BgColor.white;
		return BgColor.orange100;
	}, []);

	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex flex-row grow-0 justify-center items-center gap-[10px] rounded-[8px]  w-[585px] h-[70px]  mb-[38px] border border-[1px] border-primaryOrange-200 ${getBgColor(
				btnState
			)}`}
		>
			<span className="glow-0  not-italic whitespace-nowrap text-primaryOrange-200">{label}</span>
		</button>
	);
}

export default React.memo(OutlineButton);
