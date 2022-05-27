import React from 'react';
import PerformInput from 'components/Input/PerformInput';

export default function UserProfileModal() {
	return (
		<>
			<div className="input-wrap mb-[17px]">
				<PerformInput label="닉네임" type="text" placeholder="닉네임" buttonTitle="변경" onClick={() => {}} />
			</div>
			<div className="input-wrap">
				<PerformInput label="이메일" type="email" placeholder="email" buttonTitle="중복확인" onClick={() => {}} />
			</div>
		</>
	);
}
