import React from 'react';

export interface Option {
	id: number;
	value: string;
}

interface SelectProps {
	options: Option[];
	isFocus: boolean;
	value: string;
	onMouseDown: () => void;
	onFocus: () => void;
}

export default function Select({ options, isFocus, value, onMouseDown, onFocus }: SelectProps) {
	const getHiddenStyle = () => (isFocus ? '' : 'hidden');
	const createOptions = (list: Option[]) => {
		const optionList = list.map((option: Option) => {
			return (
				<li key={option.id} className="px-6 py-4 text-left whitespace-nowrap text-ellipsis overflow-hidden">
					{option.value}
				</li>
			);
		});
		return <ul>{optionList}</ul>;
	};

	return (
		<div className="dropdown w-[282px]">
			<div className="select w-full h-[70px] border-2 border-primaryBlack-100 rounded-xl ">
				<button type="button" className="flex justify-start items-center p-6 w-full" onFocus={onFocus}>
					<div className="arrow">
						<img className="max-w-[13px] max-h-[13px]" src="/Polygon.svg" alt="arrow" />
					</div>
					<div className="selected max-w-[218px] pl-4 whitespace-nowrap text-ellipsis overflow-hidden">{value}</div>
				</button>
			</div>
			{options && (
				<div className={`options w-full border-2 border-primaryBlack-100 rounded-xl mt-1 ${getHiddenStyle()}`}>
					<button type="button" className=" w-full max-h-[162px] overflow-y-auto scrollbar" onMouseDown={onMouseDown}>
						{createOptions(options)}
					</button>
				</div>
			)}
		</div>
	);
}
