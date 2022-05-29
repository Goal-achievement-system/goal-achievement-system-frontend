import React, { useState } from 'react';
import PerformInput from 'components/Input/PerformInput';

export default function UserProfileModal() {
	const [name, setName] = useState('김씨');
	const [email, setEmail] = useState('test@test.com');

	return (
		<>
			<div className="input-wrap mb-[17px]">
				<PerformInput
					label="닉네임"
					type="text"
					placeholder="닉네임"
					buttonTitle="변경"
					onClick={() => {}}
					value={name}
					setState={setName}
				/>
			</div>
			<div className="input-wrap">
				<PerformInput
					label="이메일"
					type="email"
					placeholder="email"
					buttonTitle="중복확인"
					onClick={() => {}}
					value={email}
					setState={setEmail}
				/>
			</div>
		</>
	);
}
