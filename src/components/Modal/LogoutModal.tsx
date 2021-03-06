import SubmitButton from 'components/Button/SubmitButton';
import Main from 'components/Main';
import useModal from 'hooks/useModal';
import React from 'react';
import handleLogout from 'utils/handleLogout';
import { modalName } from 'utils/importModal';

export default function LogoutModal() {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const [_, closeModal] = useModal();
	const className = {
		size: 'pc:w-[890px] max-w-[90vw] pc:max-h-[80vh] w-[320px] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};

	return (
		<div
			className={`${className.size} ${className.translate} text-left pc:p-[72px] p-[24px] border-borderGray rounded-2xl relativ bg-modalGray overflow-auto`}
		>
			<Main title="로그아웃">
				<span className="text-primaryGray-200 block my-[20px]">정말로 로그아웃 할까요?</span>
				<div className="flex pc:space-x-[26px] space-x-[6px]">
					<SubmitButton label="취소" btnState="inactive" onClick={() => closeModal({ name: modalName.LogoutModal })} />
					<SubmitButton
						label="로그아웃"
						btnState="active"
						onClick={() => {
							closeModal({ name: modalName.LogoutModal });
							handleLogout();
						}}
					/>
				</div>
			</Main>
		</div>
	);
}
