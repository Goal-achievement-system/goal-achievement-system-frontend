import React from 'react';

export interface Props {
	label: string;
	onClick: () => void;
	state: 'active' | 'inactive' | 'pressed';
}
function SolidButton({ label, onClick, state }: Props) {
	return (
		<button type="button" onClick={onClick} className={state === 'active' ? 'text-red-400' : 'text-blue-400'}>
			<span>{label}</span>
		</button>
	);
}

export default React.memo(SolidButton);
