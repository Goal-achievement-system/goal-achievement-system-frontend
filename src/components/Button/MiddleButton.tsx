import React from 'react';

export interface Props {
	label: string;
	onClick: () => void;
}

function OutlineButton({ label, onClick }: Props) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="flex flex-row grow-0 justify-center items-center rounded-[8px]  w-full py-[16px] bg-[#fafafa] hover:bg-[#f3f3f3]"
		>
			<span className="glow-0  not-italic whitespace-nowrap ">{label}</span>
		</button>
	);
}

export default React.memo(OutlineButton);
