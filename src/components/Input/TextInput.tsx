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
				<div className="flex pc:space-x-[8px] space-x-[4px] pc:mb-[16px] mb-[4px] pc:mt-[30px] mt-[20px]">
					<label htmlFor={label} className="font-semibold pc:text-[20px] text-[14px]">
						{label}
					</label>
					{isRequired && <span className="font-semibold text-primaryOrange-200 ">*</span>}
				</div>
			)}
			<input
				className="w-full pc:p-[24px] p-[16px] pc:max-h-[95px] max-h-[46px] pc:my-2 my-1 pc:border-[2px] border-[1px] rounded-xl focus:outline-none focus:border-primaryOrange-200"
				id={label}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				type={isPassword ? 'password' : 'text'}
			/>
		</div>
	);
}
