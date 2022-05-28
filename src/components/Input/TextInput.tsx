import React from 'react';

interface Props {
	placeholder: string;
	label?: string;
	setState?: () => void;
}

export default function TextInput({ label, placeholder, setState }: Props) {
	const handleBlur = () => {
		// setState();
	};

	return (
		<div className="w-full">
			<label htmlFor={label} className="w-full m-[8px] inline-block">
				{label}
			</label>
			<input
				className="w-full p-6 my-2 border-2 rounded-xl focus:outline-none focus:border-primaryOrange-200"
				id={label}
				placeholder={placeholder}
				onBlur={handleBlur}
			/>
		</div>
	);
}
