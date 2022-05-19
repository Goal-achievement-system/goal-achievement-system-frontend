import React from 'react';

export interface Props {
	label: string;
	onClick: () => void;
}

function FilterButton({ label, onClick }: Props) {
	return (
		<button type="button" onClick={onClick} className="px-[16px] py-[16px] rounded-[8px] bg-[#f3f3f3]">
			<span className="glow-0  not-italic whitespace-nowrap ">{label}</span>
		</button>
	);
}

export default React.memo(FilterButton);
