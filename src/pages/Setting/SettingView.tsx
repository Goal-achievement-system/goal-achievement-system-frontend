import React from 'react';

import Main from 'components/Main';
import BaseTemplate from 'components/BaseTemplate';
import { useSelector } from 'react-redux';
import { RootState } from 'store/slices';
import useModal from 'hooks/useModal';
import { modalName } from 'utils/importModal';

const baseLiStyle = 'py-[20px] font-[800] text-[14px]';
export default function SettingView() {
	const { memberinfo } = useSelector((state: RootState) => state.member);
	const [openLogoutModal] = useModal();
	const [openWithdrawalModal] = useModal();

	return (
		<BaseTemplate>
			<Main hasGoBack title="설정">
				<ul className="divide-y-[1px] divide-[#E4E4E4] ">
					<li className="font-[800] text-[14px] py-[11.5px]  flex flex-col ">
						<span>연결된 이메일</span>
						<span className="text-primaryOrange-200">{memberinfo?.email}</span>
					</li>
					<li className={baseLiStyle}>내 정보 변경</li>
					<li className={baseLiStyle}>
						<button type="button" onClick={() => openLogoutModal({ name: modalName.LogoutModal })}>
							로그아웃
						</button>
					</li>
					<li className={`${baseLiStyle} text-primaryBlack-300`}>서비스 탈퇴</li>
				</ul>
			</Main>
		</BaseTemplate>
	);
}
