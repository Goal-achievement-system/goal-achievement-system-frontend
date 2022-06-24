import React from 'react';

import Main from 'components/Main';
import BaseTemplate from 'components/BaseTemplate';

export default function SettingView() {
	return (
		<BaseTemplate>
			<Main hasGoBack title="설정">
				<ul>
					<li className="py-[20px]">연결된 이메일</li>
					<li className="py-[20px]">내 정보 변경</li>
					<li className="py-[20px]">로그아웃</li>
					<li className="py-[20px]">서비스 탈퇴</li>
				</ul>
			</Main>
		</BaseTemplate>
	);
}
