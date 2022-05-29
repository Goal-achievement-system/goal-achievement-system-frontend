/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SubmitButton from 'components/Button/SubmitButton';
import PerformInput from 'components/Input/PerformInput';
import Select from 'components/Select';
import { Link } from 'react-router-dom';
import Path from 'utils/path';

interface Props {
	onSubmit: (event: React.SyntheticEvent) => void;
	email: string;
	password: string;
	error: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
}

function SignUpView({ error, onSubmit, email, password, setEmail, setPassword }: Props) {
	return (
		<div className="pc:w-[1200px] my-0 mx-auto flex justify-between">
			<div className="bg-primaryOrange-200 rounded-[16px] p-[55px] w-[481px] flex flex-col items-start ">
				<img src="../image/banner/image1773.png" alt="banner" />
				<img className="my-[57px] w-[157px] h-[34px]" src="../image/logo/img--logo.png" alt="logo" />

				<img className="w-[310px] h-[96px]" src="../image/text/slogan.png" alt="slogan" />
			</div>

			<form onSubmit={onSubmit} className="w-[585px] flex flex-col items-start justify-end">
				<h1 className=" text-[36px] font-[800] mb-[76px]">회원가입</h1>
				<label htmlFor="email" className="mb-[16px] font-semibold text-[20px]">
					이메일 <span className="text-primaryOrange-200 font-semibold">*</span>
				</label>
				<PerformInput type="email" placeholder="goalkeeper@gmail.com" />
				<label htmlFor="password" className="mb-[16px] mt-[30px] font-semibold text-[20px]">
					비밀번호 <span className="text-primaryOrange-200 font-semibold ">*</span>
				</label>
				<PerformInput type="password" placeholder="비밀번호 (8자리 이상)" />
				<PerformInput type="password" placeholder="비밀번호 확인" />
				<label htmlFor="nickName" className="mb-[16px] mt-[30px] font-semibold text-[20px]">
					닉네임 <span className="text-primaryOrange-200 font-semibold ">*</span>
				</label>
				<PerformInput type="nickName" placeholder="닉네임을 작성해 주세요" />
				<label htmlFor="nickName" className="mb-[16px] mt-[30px] font-semibold text-[20px]">
					선택사항
				</label>

				<SubmitButton label="로그인" onClick={() => {}} btnState="inactive" />
			</form>
		</div>
	);
}

export default SignUpView;
