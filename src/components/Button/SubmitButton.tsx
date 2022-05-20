import React, { useCallback } from 'react';

type BtnStates = 'active' | 'inactive' | 'pressed';

enum Color {
	orange200 = 'primaryOrange-200',
	orange300 = 'primaryOrange-300',
	white = 'primaryWhite',
	gray100 = '[#e6e6e6]',
	gray200 = '[#898989]',
}

export interface Props {
	label: string;
	onClick: () => void;
	btnState: BtnStates;
}
function SubmitButton({ label, onClick, btnState }: Props) {
	const getBgColor = useCallback((state: BtnStates): Color => {
		if (state === 'active') return Color.orange200;
		if (state === 'pressed') return Color.orange300;
		return Color.gray100;
	}, []);
	const getTextColor = useCallback((state: BtnStates): Color => {
		if (state === 'inactive') return Color.gray200;
		return Color.white;
	}, []);

	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex flex-row grow-0 justify-center items-center  rounded-[8px]  w-full py-[22px]  bg-${getBgColor(
				btnState
			)}`}
		>
			<span className={`glow-0  not-italic  whitespace-nowrap text-${getTextColor(btnState)} `}>{label}</span>
		</button>
	);
}

export default React.memo(SubmitButton);
