import React, { useState, useRef, MouseEvent, useEffect, BaseSyntheticEvent, useMemo } from 'react';
import { ReactComponent as Polygon } from 'assets/icons/polygon.svg';

export interface Option {
	id: number;
	value: string;
}
export type DefaultValue = string | number | readonly string[] | undefined;

interface SelectProps {
	options: Option[];
	value: string | null;
	defaultValue: DefaultValue;
	onChange: (curVar: string) => void;
}
export default function Select({ options, value, defaultValue, onChange }: SelectProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const optionRef = useRef<HTMLDivElement>(null);

	const optionListPC = useMemo(
		() =>
			options.map((option: Option) => (
				<li key={option.id} className="px-6 py-4 overflow-hidden text-left whitespace-nowrap text-ellipsis">
					{option.value}
				</li>
			)),
		[options]
	);

	const optionListMobile = useMemo(
		() =>
			options.map((option: Option) => (
				<option
					key={option.id}
					value={option.value}
					onChange={(e: React.BaseSyntheticEvent | MouseEvent) => onChange(e.target.innerText)}
				>
					{option.value}
				</option>
			)),
		[onChange, options]
	);

	// isOpen 이 변경이 되면 return 된 함수가 실행이 된다.
	useEffect(() => {
		const onClick = (e: Event | BaseSyntheticEvent) => {
			if (optionRef !== null && !optionRef.current?.contains(e.target)) {
				setIsOpen(false);
			}
		};

		if (isOpen) window.addEventListener('click', onClick);
		return () => window.removeEventListener('click', onClick);
	}, [isOpen]);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleMouseDown = (e: React.BaseSyntheticEvent | MouseEvent) => {
		const { id } = e.target.dataset;
		if (id === 'wrap-button') return;

		setIsOpen(false);
		onChange(e.target.innerText);
	};

	return (
		<>
			<div className="pc:block hidden w-full">
				<div className="dropdown relative pc:w-[100%]" ref={optionRef}>
					<div className="select w-full h-[70px] border-2 border-primaryBlack-100 rounded-xl ">
						<button
							type="button"
							className="flex items-center justify-start w-full p-6 text-center flex-grow"
							onClick={handleClick}
						>
							<div className="arrow">
								<Polygon className="max-w-[13px] max-h-[13px]" />
							</div>
							<div className="selected w-full pl-4 whitespace-nowrap text-ellipsis overflow-hidden text-left">
								{!value ? defaultValue : value}
							</div>
						</button>
					</div>
					{options && (
						<div
							className={`absolute options w-[100%] border-2 border-primaryBlack-100 bg-primaryWhite rounded-xl mt-1 ${
								isOpen ? '' : 'hidden'
							} z-50`}
						>
							<button
								type="button"
								className=" w-full max-h-[162px] overflow-y-auto scrollbar"
								data-id="wrap-button"
								onMouseDown={handleMouseDown}
							>
								<ul>{optionListPC}</ul>
							</button>
						</div>
					)}
				</div>
			</div>
			<div className="relative w-[48%] flex items-center pc:hidden">
				<Polygon className="absolute left-[16px]" />
				<select
					className="scrollbar appearance-none profile-option w-full pc:h-[70px] h-[46px] pc:border-2 border-primaryBlack-100 rounded-xl cursor-pointer text-center"
					name="profile-option"
					defaultValue={defaultValue}
				>
					<option className="hidden" defaultValue={defaultValue} disabled>
						{defaultValue}
					</option>
					{optionListMobile}
				</select>
			</div>
		</>
	);
}
