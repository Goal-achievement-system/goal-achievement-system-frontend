import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import Path from 'utils/path';

interface Props {
	handleLogout: () => void;
	closePopUp: () => void;
}
export default function UserProfileModal({ handleLogout, closePopUp }: Props) {
	const MemberInfo = useSelector((state: RootState) => state.member.memberinfo);
	const nickName = useSelector((state: RootState) => state.member.memberinfo?.nickName);
	const email = useSelector((state: RootState) => state.member.memberinfo?.email);

	// eslint-disable-next-line consistent-return
	const handleClick = () => {
		handleLogout();
	};

	return (
		<>
			<div className="mb-[30px]">
				<div className="w-full user-email mb-[8px] ">
					<div className="font-[600]">{nickName}</div>
				</div>
				<div className="w-full user-email ">
					<div className="text-[16px] text-primaryOrange-200">{email}</div>
				</div>
			</div>
			<div>
				<div>
					<Link to={Path.myGoals} onClick={() => closePopUp()}>
						내 정보 수정
					</Link>
				</div>
			</div>
			<div className="absolute left-[27px] right-[27px] bottom-[27px]">
				<button
					type="button"
					className="w-full border-2 rounded-[8px] border-borderGray pc:px-[29px] pc:py-[15px] text-primaryBlack-300"
					onClick={handleClick}
				>
					{MemberInfo ? '로그아웃' : '로그인'}
				</button>
			</div>
		</>
	);
}
