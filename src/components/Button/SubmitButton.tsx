import React, { useCallback } from 'react';

export type BtnStates = 'active' | 'inactive' | 'pressed';

enum BgColor {
	orange200 = 'bg-primaryOrange-200',
	orange300 = 'bg-primaryOrange-300',

	gray100 = 'bg-primaryGray-100',
}
enum TextColor {
	white = 'text-primaryWhite',

	gray200 = 'text-primaryGray-200',
}

export interface Props {
	label: string;
	onClick?: () => void;
	btnState: BtnStates;
}
function SubmitButton({ label, onClick, btnState }: Props) {
	const getBgColor = useCallback((state: BtnStates): BgColor => {
		if (state === 'active') return BgColor.orange200;
		if (state === 'pressed') return BgColor.orange300;
		return BgColor.gray100;
	}, []);
	const getTextColor = useCallback((state: BtnStates): TextColor => {
		if (state === 'inactive') return TextColor.gray200;
		return TextColor.white;
	}, []);

	return (
		<button
			type="submit"
			onClick={onClick}
			className={`flex flex-row grow-0 justify-center items-center rounded-[8px]  w-full py-[16px] pc:py-[22px]   ${getBgColor(
				btnState
			)}`}
		>
			<span className={`glow-0  not-italic text-[22px] whitespace-nowrap ${getTextColor(btnState)} `}>{label}</span>
		</button>
	);
}

export default React.memo(SubmitButton);
