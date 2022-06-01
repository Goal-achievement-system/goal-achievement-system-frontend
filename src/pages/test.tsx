import React, { useState } from 'react';
import Select, { Option } from 'components/Select/Select';

export const test = 1;

/*
export default function Test() {
	const GenderOption = [
		{ id: 1, value: '남자' },
		{ id: 2, value: '여자' },
		{ id: 3, value: '없음' },
	] as Option[];
	const AgeOption = [
		{ id: 10, value: '10대' },
		{ id: 20, value: '20대' },
		{ id: 30, value: '30대' },
		{ id: 40, value: '40대' },
		{ id: 50, value: '50대' },
		{ id: 60, value: '60대' },
	] as Option[];

	const [option, setOption] = useState('성별');

	return (
		<div className="flex justify-between w-full">
			<Select options={GenderOption} label="성별" isRequired={false} onChange={setOption} value={option} />
			<Select options={AgeOption} label="연령" isRequired onChange={setOption} value={option} />
		</div>
	);
}
*/
