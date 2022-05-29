import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface Props {
	placeholder: string;
	label?: string;
	value?: string;
	setState: Dispatch<SetStateAction<string>>;
}

export default function TextInput({ label, placeholder, value, setState }: Props) {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setState(event?.currentTarget.value);
	};

	return (
		<div className="w-full">
			{label && (
				<label htmlFor={label} className="w-full my-[8px] font-[600] inline-block">
					{label}
				</label>
			)}
			<input
				className="w-full p-6 my-2 border-2 rounded-xl focus:outline-none focus:border-primaryOrange-200"
				id={label}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}
