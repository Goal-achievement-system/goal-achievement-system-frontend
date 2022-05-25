import React from 'react';
import EmailInput from 'components/Input/EmailInput';
import Label from 'components/Label/Label';

export default function UserProfilePopUp() {
	return (
		<>
			<div className="mb-4 input-wrap">
				<Label target="name" value="닉네임" />
				<EmailInput
					id="name"
					size="small"
					confirmState="confirm"
					value=""
					focusColor="primaryOrange200"
					onClick={() => {}}
				/>
			</div>
			<div className="input-wrap">
				<Label target="email" value="이메일" />
				<EmailInput
					id="email"
					size="small"
					confirmState="inConfirm"
					value=""
					focusColor="primaryOrange200"
					onClick={() => {}}
				/>
			</div>
		</>
	);
}
