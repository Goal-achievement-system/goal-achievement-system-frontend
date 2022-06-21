import React, { useState, useRef, Dispatch, SetStateAction, MouseEvent, useEffect, BaseSyntheticEvent } from 'react';

export interface Option {
	id: number;
	value: string;
}

interface SelectProps {
	options: Option[];
	value: string | null;
	onChange: (curVar: string) => void;
}
// label, isRequired = false,
export default function Select({ options, value, onChange }: SelectProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const optionRef = useRef<HTMLDivElement>(null);
	const optionList = options.map((option: Option) => (
		<li key={option.id} className="px-6 py-4 overflow-hidden text-left whitespace-nowrap text-ellipsis">
			{option.value}
		</li>
	));

	// 처음에 한번
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
		<div>
			<div className="dropdown w-[282px]" ref={optionRef}>
				<div className="select w-full h-[70px] border-2 border-primaryBlack-100 rounded-xl ">
					<button type="button" className="flex items-center justify-start w-full p-6" onClick={handleClick}>
						<div className="arrow">
							<img className="max-w-[13px] max-h-[13px]" src="/image/icon/polygon.svg" alt="arrow" />
						</div>
						<div className="selected max-w-[218px] pl-4 whitespace-nowrap text-ellipsis overflow-hidden">{value}</div>
					</button>
				</div>
				{options && (
					<div
						className={`options w-[282px] border-2 border-primaryBlack-100 bg-primaryWhite rounded-xl mt-1 ${
							isOpen ? '' : 'hidden'
						} z-50 absolute`}
					>
						<button
							type="button"
							className=" w-full max-h-[162px] overflow-y-auto scrollbar"
							data-id="wrap-button"
							onMouseDown={handleMouseDown}
						>
							<ul>{optionList}</ul>
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
