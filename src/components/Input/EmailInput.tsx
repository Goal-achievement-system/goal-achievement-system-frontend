import React from 'react';
import { validateEmail } from '../../utils/common';

type SizeType = 'small' | 'middle';
type ColorType = 'primaryOrange200' | 'buttonOrange200';
type ConfirmType = 'inConfirm' | 'confirm';

interface Props {
	id: string;
	value: string;
	focusColor: ColorType;
	size: SizeType;
	confirmState: ConfirmType;
	onClick: () => void;
}

enum Size {
	small = 'w-[300px]',
	middle = 'w-[585px]',
	large = 'w-[746px]',
}

enum Color {
	primaryBlack100 = 'primaryBlack-100',
	primaryBlack400 = 'primaryBlack-400',
	primaryOrange100 = 'primaryOrange-100',
	primaryOrange200 = 'primaryOrange-200',
	buttonOrange200 = 'buttonOrange-200',
	buttonBlack100 = 'buttonBlack-100',
	borderGray = 'borderGray',
}

export default function EmailInput({ id, value, focusColor, size, confirmState, onClick }: Props) {
	const getWidth = (name: SizeType) => Size[name] || '';
	const getFocusColor = (name: ColorType) => Color[name] || '';

	const getButtonColor = (state: ConfirmType): string => {
		return state === 'confirm'
			? `text-${Color.primaryOrange200} bg-${Color.primaryOrange100}`
			: `text-${Color.primaryBlack400} bg-${Color.buttonBlack100}`;
	};

	const getInputColor = (state: ConfirmType, text: string): string => {
		// 텍스트가 없거나 텍스트가 있더라도 중복확인 버튼을 누르기 전이라면
		if (!text || state === 'confirm') return `border-${Color.borderGray}`;
		if (validateEmail(text)) return `border-${Color.primaryOrange200} text-${Color.primaryOrange200}`;
		return `border-${Color.buttonOrange200} text-${Color.buttonOrange200}`;
	};

	const getGuideColor = (text: string) => {
		return validateEmail(text) ? `text-${Color.primaryOrange200}` : `text-${Color.buttonOrange200}`;
	};

	const renderGuideMessage = (text: string) => {
		if (text) {
			if (validateEmail(text)) return '사용가능한 이메일입니다.';
			return '잘못된 형식의 이메일입니다.';
		}

		return '';
	};

	return (
		<div className="email-input-wrap">
			<div className={`${getWidth(size)} relative`}>
				<input
					id={id}
					type="email"
					placeholder="example@googole.com"
					value={value}
					className={`w-full p-6 border-2 rounded-xl focus:outline-none 
					${getInputColor(confirmState, value)} ${getFocusColor(focusColor)}`}
				/>
				<button
					type="button"
					className={`absolute p-2 rounded-xl right-6 top-1/2 -translate-y-1/2 ${getButtonColor(confirmState)}`}
					onClick={onClick}
				>
					{confirmState === 'confirm' ? '확인완료' : '중복확인'}
				</button>
			</div>
			{confirmState === 'inConfirm' && (
				<p className={`p-3 ${getGuideColor(value)}`}>{confirmState === 'inConfirm' && renderGuideMessage(value)}</p>
			)}
		</div>
	);
}
