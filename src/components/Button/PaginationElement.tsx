import React, { useCallback } from 'react';

interface ArrProps {
	direction?: ArrowDirections;

	arrColor: string;
}
function Arrow({ direction, arrColor }: ArrProps) {
	if (direction === 'left')
		return (
			<svg
				className={`w-5 h-5 ${arrColor}`}
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
			</svg>
		);
	return (
		<svg
			className={`w-5 h-5 ${arrColor}`}
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
		</svg>
	);
}

enum BgColor {
	orange = 'bg-primaryOrange-200',
	white = 'bg-primaryWhite',
	gray100 = 'bg-[#e6e6e6]',
}

enum TextColor {
	gray200 = 'text-[#898989]',
	black = 'text-primaryBlack-500',
	white = 'text-primaryWhite',
}

type ButtonTypes = 'number' | 'arrow';
type ArrowDirections = 'left' | 'right';
export interface Props {
	btnType: ButtonTypes;
	isActive: boolean;
	number?: number;
	arrDirection?: ArrowDirections;
	onClick: () => void;
}

function PaginationElement({ btnType, isActive, number, arrDirection, onClick }: Props) {
	const getBgColor = useCallback((type: ButtonTypes, active: boolean): BgColor => {
		if (type === 'number') {
			if (active) return BgColor.orange;
			return BgColor.white;
		}
		return BgColor.gray100;
	}, []);
	const getTextColor = useCallback((type: ButtonTypes, active: boolean): TextColor => {
		if (type === 'number') {
			if (active) return TextColor.white;
			return TextColor.black;
		}
		if (active) return TextColor.black;
		return TextColor.gray200;
	}, []);
	return (
		<button
			type="button"
			onClick={onClick}
			className={`flex flex-row grow-0 justify-center items-center rounded-[8px] text-[20px] font-[600]  w-[34px] h-[34px] ${getBgColor(
				btnType,
				isActive
			)}`}
		>
			<span className={`glow-0  not-italic whitespace-nowrap ${getTextColor('number', isActive)}`}>
				{btnType === 'number' ? number : <Arrow direction={arrDirection} arrColor={getTextColor('arrow', isActive)} />}
			</span>
		</button>
	);
}

export default React.memo(PaginationElement);
