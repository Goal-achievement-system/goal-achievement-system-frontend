import React from 'react';
import { validateEmail } from '../../utils/common';

type SizeType = 'small' | 'middle';
type ColorType = 'primaryOrange200' | 'buttonOrange200';
type ConfirmType = 'inConfirm' | 'confirm';

enum Size {
	small = 'w-[300px]',
	middle = 'w-[585px]',
	large = 'w-[746px]',
}

enum Color {
	primaryOrange200 = 'focus:border-primaryOrange-200',
	buttonOrange200 = 'focus:border-buttonOrange-200',
}

interface Props {
	id: string;
	value: string;
	focusColor: ColorType;
	size: SizeType;
	confirmState: ConfirmType;
	onClick: () => void;
}

/* Goal
 - error message 를 알려주는 ui 추가
 - enum Color 를 Color만 받게 변경
*/

export default function EmailInput({ id, value, focusColor, size, confirmState, onClick }: Props) {
	const getWidth = (name: SizeType) => Size[name] || '';
	const getFocusColor = (name: ColorType) => Color[name] || '';
	const getButtonColor = (isConfirm: ConfirmType) => {
		if (isConfirm === 'confirm') return 'text-primaryOrange-200 bg-primaryOrange-100';
		return 'text-primaryBlack-400 bg-buttonBlack-100';
	};

	const getInputColor = (isCorrect: boolean, isConfirm: ConfirmType) => {
		if (isConfirm === 'confirm' || !value) return 'border-borderGray';
		if (isCorrect) return 'border-primaryOrange-200 text-primaryOrange-200';
		return 'border-buttonOrange-200 text-buttonOrange-200';
	};

	return (
		<div className={`${getWidth(size)} relative`}>
			<input
				id={id}
				type="email"
				placeholder="example@googole.com"
				value={value}
				className={`w-full p-6 border-2 rounded-xl focus:outline-none 
				${getInputColor(validateEmail(value), confirmState)} ${getFocusColor(focusColor)}`}
			/>
			<button
				type="button"
				className={`absolute p-2 rounded-xl right-6 top-1/2 -translate-y-1/2 ${getButtonColor(confirmState)}`}
				onClick={onClick}
			>
				{confirmState === 'confirm' ? '확인완료' : '중복확인'}
			</button>
		</div>
	);
}
