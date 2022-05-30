/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SubmitButton from 'components/Button/SubmitButton';
import PerformInput from 'components/Input/PerformInput';
import Select, { Option } from 'components/Select';
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
const GenderObtion = [
	{ id: 1, value: '남자' },
	{ id: 2, value: '여자' },
	{ id: 3, value: '없음' },
] as Option[];
const AgeObtion = [
	{ id: 10, value: '10대' },
	{ id: 20, value: '20대' },
	{ id: 30, value: '30대' },
	{ id: 40, value: '40대' },
	{ id: 50, value: '50대' },
	{ id: 60, value: '60대' },
] as Option[];
function SignUpView({ error, onSubmit, email, password, setEmail, setPassword }: Props) {
	return (
		<div className="pc:w-[1200px] my-0 mx-auto flex justify-between">
			<div className="bg-primaryOrange-200 rounded-[16px] p-[55px] w-[481px] flex flex-col items-start ">
				<img src="../image/banner/image1773.png" alt="banner" />
				<img className="my-[57px] w-[157px] h-[34px]" src="../image/logo/img--logo.png" alt="logo" />

				<img className="w-[310px] h-[96px]" src="../image/text/slogan.png" alt="slogan" />
			</div>

			<form onSubmit={onSubmit} className="w-[585px] flex flex-col items-start justify-end">
				<h1 className=" text-[36px] font-[800] mb-[50px]">회원가입</h1>

				<PerformInput label="이메일" type="email" placeholder="goalkeeper@gmail.com" />
				<div className=" mb-[30px]" />
				<PerformInput label="비밀번호" type="password" placeholder="비밀번호 (8자리 이상)" />
				<div className=" mb-[10px]" />
				<PerformInput type="password" placeholder="비밀번호 확인" />
				<div className=" mb-[20px]" />
				<PerformInput label="닉네임" type="nickName" placeholder="닉네임을 작성해 주세요" />
				<div className=" mb-[10px]" />
				<label htmlFor="nickName" className="mb-[16px] mt-[30px] font-semibold text-[20px]">
					선택사항
				</label>
				<div className="flex justify-between w-full">
					<Select options={GenderObtion} isFocus={false} value="남자" onMouseDown={() => {}} onFocus={() => {}} />
					<Select options={GenderObtion} isFocus={false} value="20대" onMouseDown={() => {}} onFocus={() => {}} />
				</div>
				<div className=" mb-[20px]" />
				<SubmitButton label="로그인" onClick={() => {}} btnState="inactive" />
			</form>
		</div>
	);
}

export default SignUpView;
