import React, { useCallback } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

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
	isLoading?: boolean;
}
function SubmitButton({ label, onClick, btnState, isLoading }: Props) {
	const getBgColor = useCallback((state: BtnStates): BgColor => {
		if (state === 'active') return BgColor.orange200;
		if (state === 'pressed') return BgColor.orange300;
		return BgColor.gray100;
	}, []);
	const getTextColor = useCallback((state: BtnStates): TextColor => {
		if (state === 'inactive') return TextColor.gray200;
		return TextColor.white;
	}, []);

	if (isLoading) {
		return (
			<div className="flex justify-center py-[20px] pc:py-[24px]">
				<BeatLoader color="#FF8A00" size={15} speedMultiplier={0.5} />
			</div>
		);
	}

	return (
		<button
			type="submit"
			onClick={onClick}
			className={`flex flex-row grow-0 justify-center items-center rounded-[8px]  w-full py-[16px] pc:py-[22px]   ${getBgColor(
				btnState
			)}`}
		>
			<span className={`glow-0  not-italic text-[12px]  pc:text-[22px] whitespace-nowrap ${getTextColor(btnState)} `}>
				{label}
			</span>
		</button>
	);
}

export default React.memo(SubmitButton);
