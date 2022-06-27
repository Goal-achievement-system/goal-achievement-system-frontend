import React from 'react';
import SubmitButton, { BtnStates } from 'components/Button/SubmitButton';
import PerformInput from 'components/Input/PerformInput';
import Select, { Option } from 'components/Select/Select';
import BaseTemplate from 'components/BaseTemplate';
import AuthLayout from 'components/AuthLayout';
import { IForm, Action } from './FormStateMgt';

interface Props {
	onSubmit: (event: React.SyntheticEvent) => void;
	formState: IForm;
	formDispatch: React.Dispatch<Action>;
	error: string;
}

export const GenderOption = [
	{ id: 1, value: '남자' },
	{ id: 2, value: '여자' },
	{ id: 3, value: '없음' },
] as Option[];
export const AgeOption = [
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
		<BaseTemplate>
			<AuthLayout>
				<form onSubmit={onSubmit} className="pc:w-[585px] pc:h-full flex flex-col items-start justify-between  ">
					<h1 className="text-[20px] font-[800] mb-[30px] pc:text-[36px]  pc:mb-[36px] ">회원가입</h1>
					<PerformInput
						label="이메일"
						isRequired
						value={formState.email}
						type="email"
						placeholder="goalkeeper@gmail.com"
						onChange={(curVar: string) => formDispatch({ type: 'email', payload: curVar })}
					/>
					<div className="mb-[16px] pc:mb-[20px]" />
					<PerformInput
						label="비밀번호"
						isRequired
						value={formState.password}
						type="password"
						placeholder="비밀번호 (8자리 이상)"
						onChange={(curVar: string) => formDispatch({ type: 'password', payload: curVar })}
					/>
					<div className="mb-[10px]" />
					<PerformInput
						type="password"
						isRequired
						value={formState.passwordCheck}
						placeholder="비밀번호 확인"
						onChange={(curVar: string) => formDispatch({ type: 'passwordCheck', payload: curVar })}
					/>
					<div className="mb-[22px] pc:mb-[30px]" />
					<PerformInput
						label="닉네임"
						isRequired
						type="nickName"
						placeholder="닉네임을 작성해 주세요"
						onChange={(curVar: string) => formDispatch({ type: 'nickName', payload: curVar })}
					/>
					<div className="mb-[16px] pc:mb-[20px]" />
					<div className="flex pc:space-x-[8px] space-x-[4px] pc:mb-[10px] mb-[8px]">
						<span className="font-semibold text-[20px]">선택사항</span>
					</div>
					<div className="flex justify-between w-full space-x-[2%]">
						<Select
							options={GenderOption}
							value={formState.sex}
							// defaultValue="성별"
							onChange={(curVar: string) => formDispatch({ type: 'sex', payload: curVar })}
						/>
						<Select
							options={AgeOption}
							value={formState.age}
							// defaultValue="연령"
							onChange={(curVar: string) => formDispatch({ type: 'age', payload: curVar })}
						/>
					</div>
					<div className="mt-[7px]">
						<span className={` ${error ? 'text-red-400' : 'text-white'}`}>{error || 'errorZone'}</span>
					</div>
					<SubmitButton label="회원가입" btnState={getBtnState()} />
				</form>
			</AuthLayout>
		</BaseTemplate>
	);
}

export default SignUpView;
