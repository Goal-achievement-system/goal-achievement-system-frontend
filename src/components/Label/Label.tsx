import React from 'react';

interface Props {
	target: string | undefined;
	value: string;
}

export default function Label({ target, value }: Props) {
	return (
		<label className="inline-block w-full mb-2" htmlFor={target}>
			{value}
		</label>
	);
}
