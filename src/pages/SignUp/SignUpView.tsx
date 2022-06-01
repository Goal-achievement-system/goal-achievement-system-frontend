import React, { useState } from 'react';
import SubmitButton, { BtnStates } from 'components/Button/SubmitButton';
import PerformInput from 'components/Input/PerformInput';
import { IFormState, Action } from 'pages/SignUp/SignUpContainer';
import Select, { Option } from 'components/Select/Select';

interface Props {
	onSubmit: (event: React.SyntheticEvent) => void;
	formState: IFormState;
	formDispatch: React.Dispatch<Action>;
	error: string;
}
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

function SignUpView({ error, onSubmit, formState, formDispatch }: Props) {
	const getBtnState = (): BtnStates => {
		const { email, password, passwordCheck, nickName } = formState;
		if (!email.trim() || !password.trim() || !passwordCheck.trim() || !nickName.trim()) return 'inactive';

		return 'active';
	};
	return (
		<div className="pc:w-[1200px] my-0 mx-auto flex justify-between">
			<div className="bg-primaryOrange-200 rounded-[16px] p-[55px] w-[481px] flex flex-col items-start ">
				<img src="../image/banner/image1773.png" alt="banner" />
				<img className="my-[57px] w-[157px] h-[34px]" src="../image/logo/img--logo.png" alt="logo" />

				<img className="w-[310px] h-[96px]" src="../image/text/slogan.png" alt="slogan" />
			</div>

			<form onSubmit={onSubmit} className="w-[585px] flex flex-col items-start justify-end">
				<h1 className=" text-[36px] font-[800] mb-[36px]">회원가입</h1>

				<PerformInput
					label="이메일"
					isRequired
					value={formState.email}
					type="email"
					placeholder="goalkeeper@gmail.com"
					onChange={(curVar: string) => formDispatch({ type: 'email', payload: curVar })}
				/>
				<div className=" mb-[15px]" />
				<PerformInput
					label="비밀번호"
					isRequired
					type="password"
					placeholder="비밀번호 (8자리 이상)"
					onChange={(curVar: string) => formDispatch({ type: 'password', payload: curVar })}
				/>
				<div className=" mb-[10px]" />
				<PerformInput
					type="password"
					isRequired
					placeholder="비밀번호 확인"
					onChange={(curVar: string) => formDispatch({ type: 'passwordCheck', payload: curVar })}
				/>
				<div className=" mb-[15px]" />
				<PerformInput
					label="닉네임"
					isRequired
					type="nickName"
					placeholder="닉네임을 작성해 주세요"
					onChange={(curVar: string) => formDispatch({ type: 'nickName', payload: curVar })}
				/>
				<div className=" mb-[10px]" />
				<div className="flex pc:space-x-[8px] space-x-[4px] pc:mb-[16px] mb-[8px] mt-[30px]">
					<span className="font-semibold text-[20px]">선택사항</span>
				</div>
				<div className="flex justify-between w-full">
					<Select
						options={GenderOption}
						value={formState.sex}
						onChange={(curVar: string) => formDispatch({ type: 'sex', payload: curVar })}
					/>
					<Select
						options={AgeOption}
						value={formState.age}
						onChange={(curVar: string) => formDispatch({ type: 'age', payload: curVar })}
					/>
				</div>
				<div className=" mb-[15px]" />
				{error && <span>{error}</span>}
				<SubmitButton label="로그인" btnState={getBtnState()} />
			</form>
		</div>
	);
}

export default SignUpView;
