import React, { useEffect, useState } from 'react';
import PerformInput from 'components/Input/PerformInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import memberSlice from 'store/slices/memberSlice';
import { Member } from 'types/member';

interface Props {
	isOpen: boolean;
}
export default function UserProfileModal({ isOpen }: Props) {
	const currentMemberInfo = useSelector((state: RootState) => state.member.memberinfo);
	const currentNickName = useSelector((state: RootState) => state.member.memberinfo?.nickName);
	const currentEmail = useSelector((state: RootState) => state.member.memberinfo?.email);
	const [replaceNickName, setReplaceNickName] = useState<string | undefined>(undefined);
	const [replaceEmail, setReplaceEmail] = useState<string | undefined>(undefined);
	const dispatch = useDispatch();

	const onClick = (type: string, value: string) => {
		if (!currentMemberInfo) return;
		const MemberInfo: Member = { ...currentMemberInfo, [type]: value };
		dispatch(memberSlice.actions.replaceMemberInfo(MemberInfo));
	};

	useEffect(() => {
		setReplaceNickName(currentNickName);
		setReplaceEmail(currentEmail);
	}, [currentNickName, currentEmail, isOpen]);

	return (
		<>
			<div className="input-wrap mb-[17px]">
				<PerformInput
					label="닉네임"
					type="text"
					placeholder="닉네임"
					buttonTitle="변경"
					onClick={onClick}
					value={replaceNickName}
					onChange={setReplaceNickName}
				/>
			</div>
			<div className="input-wrap">
				<PerformInput
					label="이메일"
					type="email"
					placeholder="email"
					buttonTitle="중복확인"
					onClick={onClick}
					value={replaceEmail}
					onChange={setReplaceEmail}
				/>
			</div>
		</>
	);
}
