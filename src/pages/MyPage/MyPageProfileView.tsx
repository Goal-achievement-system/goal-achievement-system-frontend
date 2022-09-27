import SubmitButton from 'components/Button/SubmitButton';
import PerformInput from 'components/Input/PerformInput';
import Select from 'components/Select/Select';
import { AgeOption, GenderOption } from 'pages/SignUp/SignUpView';
import React from 'react';
import { IReplaceMemeberForm, ReplaceMemberReducerAction } from './ReplaceMemberForm';

interface Props {
	formState: IReplaceMemeberForm | null;
	formDispatch: React.Dispatch<ReplaceMemberReducerAction>;
	handleSubmit: (event: React.SyntheticEvent) => void;
}

export default function MyPageProfileView({ formState, formDispatch, handleSubmit }: Props) {
	return (
		<form className="pc:mb-[70px]" onSubmit={handleSubmit}>
			<div className="flex flex-col space-y-[40px]">
				<div className="email-wrap">
					<PerformInput
						type="email"
						placeholder="이메일이 표시되지 않으면 재접속해주세요!"
						label="이메일"
						value={formState?.email}
						disabled
						onChange={() => {}}
					/>
				</div>
				<div className="password-wrap">
					<div className="my-[10px]">
						<PerformInput
							type="password"
							placeholder="기존 비밀번호를 입력하세요."
							label="비밀번호 확인"
							value={formState?.password}
							onChange={(curVal: string) => formDispatch({ type: 'password', payload: curVal })}
						/>
					</div>
				</div>
				<div>
					<PerformInput
						type="nickName"
						placeholder="닉네임"
						label="닉네임 변경"
						value={formState?.nickName}
						onChange={(curVal: string) => formDispatch({ type: 'nickName', payload: curVal })}
					/>
				</div>
				<div>
					<div className="flex pc:space-x-[8px] space-x-[4px] pc:mb-[10px] mb-[8px]">
						<span className="font-semibold text-[20px]">선택사항</span>
					</div>
					<div className="flex justify-between w-full space-x-[2%]">
						<Select
							options={GenderOption}
							value={formState ? formState.sex : null}
							onChange={(curVal: string) => formDispatch({ type: 'sex', payload: curVal })}
						/>
						<Select
							options={AgeOption}
							value={formState ? formState.age.toString() : null}
							onChange={(curVal: string) => formDispatch({ type: 'age', payload: curVal })}
						/>
					</div>
				</div>
				<div className="submitbutton-wrap pc:mt-[60px]">
					<SubmitButton label="변경하기" btnState="active" />
				</div>
			</div>
		</form>
	);
}
