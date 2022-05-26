/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SubmitButton from 'components/Button/SubmitButton';
import TextInput from 'components/Input/TextInput';

function LoginView() {
	return (
		<div className="pc:w-[1200px] my-0 mx-auto flex justify-between">
			<div className="bg-primaryOrange-200 rounded-[16px] p-[55px] w-[481px] flex flex-col items-start ">
				<img src="../image/banner/image1773.png" alt="banner" />
				<img className="my-[57px] w-[157px] h-[34px]" src="../image/logo/img--logo.png" alt="logo" />

				<img className="w-[310px] h-[96px]" src="../image/text/slogan.png" alt="slogan" />
			</div>
			<div className="w-[585px] ">
				<form>
					<h1 className="text-[22px] font-[800]">로그인</h1>

					<label htmlFor="email">
						이메일 <span className="text-primaryOrange-200">*</span>
					</label>
					<TextInput id="email" placeholder="이메일 주소" value="email" size="middle" focusColor="primaryOrange200" />
					<label htmlFor="password">
						비밀번호 <span className="text-primaryOrange-200">*</span>
					</label>
					<TextInput
						id="password"
						placeholder="비밀번호"
						value="password"
						size="middle"
						focusColor="primaryOrange200"
					/>
					<SubmitButton label="로그인" onClick={() => {}} btnState="inactive" />
				</form>
			</div>
		</div>
	);
}

export default LoginView;
