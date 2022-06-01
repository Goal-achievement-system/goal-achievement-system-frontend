import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface Props {
	placeholder: string;
	label?: string;
	isRequired?: boolean;
	value?: string;
	isPassword?: boolean;
	// 	onChange: Dispatch<SetStateAction<string>> | (curVar:string)=>void ;
	onChange: (curVar: string) => void;
}

export default function TextInput({ isPassword, placeholder, label, isRequired = false, value, onChange }: Props) {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event?.currentTarget.value);
	};

	return (
		<div className="w-full">
			{label && (
				<div className="flex pc:space-x-[8px] space-x-[4px] pc:mb-[16px] mb-[8px] mt-[30px]">
					<label htmlFor={label} className="font-semibold text-[20px]">
						{label}
					</label>
					{isRequired && <span className="font-semibold text-primaryOrange-200 ">*</span>}
				</div>
			)}
			<input
				className="w-full p-6 my-2 border-2 rounded-xl focus:outline-none focus:border-primaryOrange-200"
				id={label}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				type={isPassword ? 'password' : 'text'}
			/>
		</div>
	);
}
