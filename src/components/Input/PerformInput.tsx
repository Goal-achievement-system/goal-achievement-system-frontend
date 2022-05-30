import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../../utils/common';

interface Props {
	type: string;
	placeholder: string;
	value: string;
	label?: string;
	buttonTitle?: string;
	subButtonTitle?: string;
	width?: string;
	onClick?: () => void;
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

export default function PerformInput({
	label,
	type,
	value,
	placeholder,
	buttonTitle,
	subButtonTitle,
	width = 'full',
	onClick,
}: Props) {
	const [isConfirm, setIsConfirm] = useState<boolean>(false);
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const [isOpenGuide, setIsOpenGuide] = useState<boolean>(false);

	const getFocusColor = () => {
		if (type !== 'email' && type !== 'password') {
			return 'focus:border-primaryOrange-200';
		}
		return isCorrect === null || isCorrect
			? 'focus:border-primaryOrange-200 focus:text-primaryOrange-200'
			: 'focus:border-buttonOrange-200 focus:text-buttonOrange-200';
	};

	const getButtonColor = (): string => {
		return isConfirm
			? `text-${Color.primaryOrange200} bg-${Color.primaryOrange100}`
			: `text-${Color.primaryBlack400} bg-${Color.buttonBlack100}`;
	};

	// const getInputColor = () => {
	// 	// if (isCorrect === null) return `border-${Color.borderGray}`;
	// 	// if (isConfirm && isCorrect) return `border-${Color.borderGray}`;
	// 	// if (isCorrect) return `border-${Color.primaryOrange200} text-${Color.primaryOrange200}`;
	// 	if (isCorrect) return `focus:text-${Color.primaryOrange200}`;
	// 	// return `border-${Color.buttonOrange200} text-${Color.buttonOrange200}`;
	// 	return `focus:text-${Color.buttonOrange200}`;
	// };

	const getGuideColor = () => {
		return isCorrect ? 'text-primaryOrange-200' : 'text-buttonOrange-200';
	};

	const renderGuideMessage = () => {
		if (isCorrect === null) return '';
		if (type === 'email') {
			if (isCorrect) return '사용 가능한 이메일입니다.';
			return '잘못된 형식의 이메일입니다.';
		}
		if (type === 'password') {
			if (isCorrect) return '사용 가능한 비밀번호 입니다.';
			return '사용 불가능한 비밀번호 입니다.';
		}
		return '';
	};

	const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
		// onClick();
		if (isConfirm || !isCorrect) return;
		setIsConfirm(!isConfirm);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (type === 'email') {
			setIsCorrect(validateEmail(e.currentTarget.value));
		}
		if (type === 'password') {
			setIsCorrect(validatePassword(e.currentTarget.value));
		}

		setIsConfirm(false);
	};

	const handleFocus = () => {
		setIsOpenGuide(true);
	};

	const handleBlur = () => {
		setIsOpenGuide(false);
	};

	return (
		<div className={`email-input-wrap w-${width}`}>
			{label && (
				<label htmlFor={label} className="block mb-[10px] font-semibold text-[20px]">
					{label} <span className="text-primaryOrange-200 font-semibold">*</span>
				</label>
			)}
			<div className="relative w-full">
				<input
					id={label}
					type={type}
					placeholder={placeholder}
					className={`w-full p-6 border-2 rounded-xl focus:outline-none ${getFocusColor()}
					`}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={value}
				/>
				{buttonTitle && (
					<button
						type="button"
						className={`absolute pc:min-w-[86px] pc:min-h-[42px] p-2 rounded-xl right-6 top-1/2 -translate-y-1/2 ${getButtonColor()}`}
						onMouseDown={handleMouseDown}
					>
						{isConfirm ? `${subButtonTitle || buttonTitle}` : `${buttonTitle}`}
					</button>
				)}
			</div>
			{isOpenGuide && <p className={`p-3 ${getGuideColor()}`}>{renderGuideMessage()}</p>}
		</div>
	);
}
