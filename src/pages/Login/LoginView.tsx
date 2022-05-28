/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SubmitButton from 'components/Button/SubmitButton';
import TextInput from 'components/Input/TextInput';
import Path from 'utils/path';
import { Link } from 'react-router-dom';

function LoginView() {
	return (
		<div className="pc:w-[1200px] my-0 mx-auto flex justify-between">
			<div className="bg-primaryOrange-200 rounded-[16px] p-[55px] w-[481px] flex flex-col items-start ">
				<img src="../image/banner/image1773.png" alt="banner" />
				<img className="my-[57px] w-[157px] h-[34px]" src="../image/logo/img--logo.png" alt="logo" />

				<img className="w-[310px] h-[96px]" src="../image/text/slogan.png" alt="slogan" />
			</div>

			<form className="w-[585px] flex flex-col items-start justify-end">
				<h1 className=" text-[36px] font-[800] mb-[76px]">로그인</h1>

				<label htmlFor="email" className="mb-[16px] font-semibold text-[20px]">
					이메일 <span className="text-primaryOrange-200 font-semibold">*</span>
				</label>
				<TextInput placeholder="이메일 주소" />
				<label htmlFor="password" className="mb-[16px] mt-[30px] font-semibold text-[20px]">
					비밀번호 <span className="text-primaryOrange-200 font-semibold ">*</span>
				</label>

				<TextInput placeholder="비밀번호" />
				<div className="flex justify-between w-full  mb-[27px] mt-[186px]">
					<span className="text-[20px] font-semibold text-primaryGray-200">비밀번호를 잊으셨나요?</span>
					<span className="text-[20px] font-semibold text-primaryOrange-200">
						회원이 아직 아니신가요? <Link to={Path.signUp}>회원가입</Link>
					</span>
				</div>
				<SubmitButton label="로그인" onClick={() => {}} btnState="inactive" />
			</form>
		</div>
	);
}

export default LoginView;
