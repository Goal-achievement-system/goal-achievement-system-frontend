import SubmitButton from 'components/Button/SubmitButton';
import { useDispatch } from 'react-redux';
import Main from 'components/Main';
import useModal from 'hooks/useModal';
import React, { useEffect } from 'react';
import { AppDispatch } from 'store';
import { modalName } from 'utils/importModal';
import useGetActionState from 'hooks/useGetActionState';
import authSlice from 'store/slices/authSlice';
import handleLogout from 'utils/handleLogout';

export default function WithdrawalModal() {
	const dispatch: AppDispatch = useDispatch();
	const [loading, result, initResult] = useGetActionState(authSlice.actions.withdrawal.type);
	// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
	const [_, closeModal] = useModal();
	const className = {
		size: 'pc:w-[890px] max-w-[90vw] pc:max-h-[80vh] w-[320px] max-h-[424px]',
		translate: '-translate-y-1/2 -translate-x-1/2',
	};
	const handleWithdrawal = () => {
		if (!loading) dispatch(authSlice.actions.withdrawal('password')); // 임시로 두기, 유저에게 비밀 번호 요청하는 로직 필요함
	};
	useEffect(() => {
		if (!result) return;
		if (result?.isSuccess) {
			alert('골키퍼를 떠나시다니 아쉽군요.. 탈퇴 처리 되었습니다.');
			handleLogout();
		} else {
			console.log(result, result?.errorMsg, result?.errorStatus);
			alert('알 수 없는 에러가 발생했습니다');
			// fail
		}

		initResult();
	}, [result, initResult]);
	// closeModal({ name: modalName.WithdrawalModal });
	return (
		<div
			className={`${className.size} ${className.translate} text-left pc:p-[72px] p-[24px] border-borderGray rounded-2xl relativ bg-modalGray overflow-auto`}
		>
			<Main title="서비스 탈퇴">
				<span className="text-primaryGray-200 block my-[20px]">정말로 탈퇴하시겠어요?</span>
				<div className="flex pc:space-x-[26px] space-x-[6px]">
					<SubmitButton
						label="취소"
						btnState="inactive"
						onClick={() => closeModal({ name: modalName.WithdrawalModal })}
					/>
					<SubmitButton label="탈퇴" btnState="active" onClick={handleWithdrawal} />
				</div>
			</Main>
		</div>
	);
}
