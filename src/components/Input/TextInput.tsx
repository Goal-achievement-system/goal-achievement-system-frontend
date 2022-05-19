import React from 'react';

type SizeType = 'small' | 'middle';
type ColorType = 'primaryOrange200' | 'primaryOrange300';

interface Props {
	id: string;
	placeholder: string;
	value: string;
	focusColor: ColorType;
	size: SizeType;
}

enum Color {
	primaryOrange200 = 'focus:border-primaryOrange-200',
	primaryOrange300 = 'focus:border-primaryOrange-300',
}

enum Size {
	small = 'w-[300px]',
	middle = 'w-[585px]',
	large = 'w-[746px]',
}

export default function TextInput({ id, placeholder, value, size, focusColor }: Props) {
	const getWidth = (name: SizeType) => Size[name] || '';
	const getFocusColor = (name: ColorType) => Color[name] || '';
	const handleOnBlur = () => {};

	return (
		<div className={`${getWidth(size)}`}>
			<input
				id={id}
				className={`w-full my-2 p-6 border-2 rounded-xl focus:outline-none 
				${getFocusColor(focusColor)}`}
				placeholder={placeholder}
				value={value}
				onBlur={handleOnBlur}
			/>
		</div>
	);
}
