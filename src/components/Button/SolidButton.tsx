import React, { useCallback } from 'react';

type BtnStates = 'active' | 'inactive' | 'pressed';

enum BgColor {
	orange200 = 'bg-primaryOrange-200',
	orange300 = 'bg-primaryOrange-300',
	gray = 'bg-[#e6e6e6]',
}
enum TextColor {
	white = 'text-white',
	gray = 'text-[#898989]',
}
export interface Props {
	label: string;
	onClick: () => void;
	btnState: BtnStates;
}
function SolidButton({ label, onClick, btnState }: Props) {
	const getBgColor = useCallback((state: BtnStates): BgColor => {
		if (state === 'active') return BgColor.orange200;
		if (state === 'pressed') return BgColor.orange300;
		return BgColor.gray;
	}, []);
	const getTextColor = useCallback((state: BtnStates): TextColor => {
		if (state === 'inactive') return TextColor.gray;
		return TextColor.white;
	}, []);

	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex flex-row justify-center items-center gap-[10px] rounded-[8px]  w-[585px] h-[70px]  mb-[38px] ${getBgColor(
				btnState
			)}`}
		>
			<span className={`glow text-xl font-semibold not-italic whitespace-nowrap ${getTextColor(btnState)} `}>
				{label}
			</span>
		</button>
	);
}

export default React.memo(SolidButton);
