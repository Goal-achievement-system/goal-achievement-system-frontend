/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SubmitButton, { BtnStates } from 'components/Button/SubmitButton';
import TextInput from 'components/Input/TextInput';
import { Link } from 'react-router-dom';
import Path from 'utils/path';
import { IFormState, Action } from 'pages/Login/LoginContainer';
import BaseTemplate from 'components/BaseTemplate';

interface Props {
	onSubmit: (event: React.SyntheticEvent) => void;
	formState: IFormState;
	formDispatch: React.Dispatch<Action>;
	error: string;
}

function LoginView({ error, onSubmit, formState, formDispatch }: Props) {
	const getBtnState = (): BtnStates => {
		const { email, password } = formState;
		if (!email.trim() || !password.trim()) return 'inactive';

		return 'active';
	};
	return (
		<BaseTemplate>
			<div className="pc:w-[1200px] h-[762px] my-0 mx-auto mt-[20px] flex justify-between">
				<div className="bg-primaryOrange-200 rounded-[16px] p-[55px] w-[481px] flex flex-col items-start ">
					<img src="../image/banner/image1773.png" alt="banner" />
					<img className="my-[57px] w-[157px] h-[34px]" src="../image/logo/img--logo.png" alt="logo" />

					<img className="w-[310px] h-[96px]" src="../image/text/slogan.png" alt="slogan" />
				</div>

				<form onSubmit={onSubmit} className="w-[585px] flex flex-col items-start justify-end">
					<h1 className=" text-[36px] font-[800] my-[76px]">로그인</h1>

					<TextInput
						label="이메일"
						isRequired={false}
						placeholder="이메일 주소"
						value={formState.email}
						onChange={(curVar: string) => formDispatch({ type: 'email', payload: curVar })}
					/>

					<TextInput
						isPassword
						label="비밀번호"
						isRequired={false}
						placeholder="비밀번호"
						value={formState.password}
						onChange={(curVar: string) => formDispatch({ type: 'password', payload: curVar })}
					/>
					<div className="flex justify-between w-full   mt-[100px]">
						<span className="text-[20px] font-semibold text-primaryGray-200">비밀번호를 잊으셨나요?</span>
						<span className="text-[20px] font-semibold text-primaryOrange-200">
							회원이 아직 아니신가요? <Link to={Path.signUp}>회원가입</Link>
						</span>
					</div>
					<div className="mt-[17px]">
						<span className={` ${error ? 'text-red-400' : 'text-white'}`}>{error || 'errorZone'}</span>
					</div>

					<SubmitButton label="로그인" btnState={getBtnState()} />
				</form>
			</div>
		</BaseTemplate>
	);
}

export default LoginView;
