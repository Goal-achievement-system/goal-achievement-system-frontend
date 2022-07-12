import React, { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/slices';
import handleLogout, { handleAdminLogout } from 'utils/handleLogout';
import Path from 'utils/path';
import AlarmPopup from './PushNoticeModal';
import UserProfilePopUp from './UserProfileModal';

interface Props {
	title: '로그인 관리' | '알림';
	isOpen: boolean;
	setIsOpen?: Dispatch<SetStateAction<boolean[]>>;
}

export default function RouteModal({ title, isOpen, setIsOpen }: Props) {
	const { isAdmin } = useSelector((state: RootState) => state.admin);
	const { memberinfo } = useSelector((state: RootState) => state.member);
	// eslint-disable-next-line consistent-return
	const closePopUp = () => {
		if (!setIsOpen) return null;
		setIsOpen((current: boolean[]) => {
			const newIsOpen = current.map(() => false);
			return newIsOpen;
		});
	};

	if (isAdmin) {
		return (
			<div className="absolute right-0 z-50">
				<div
					className={`w-[380px] h-[286px] p-6 flex flex-col rounded-2xl border-2 text-left bg-white ${
						isOpen ? '' : 'hidden'
					}`}
				>
					<div className="font-[600]">{title}</div>
					<div className="pc:my-auto max-h-[270px] flex flex-col space-y-[40px] justify-center items-center">
						<div className=" text-primaryOrange-200">관리자 로그인 중입니다.</div>
					</div>
					<div className="w-full">
						<button
							type="button"
							className="w-full border-2 rounded-[8px] border-borderGray pc:px-[29px] pc:py-[15px] text-primaryBlack-300"
							onClick={handleAdminLogout}
						>
							로그아웃
						</button>
					</div>
				</div>
			</div>
		);
	}

	if (!memberinfo) {
		return (
			<div className="absolute right-0 z-50">
				<div
					className={`w-[380px] h-[286px] p-6 flex flex-col rounded-2xl border-2 text-left bg-white ${
						isOpen ? '' : 'hidden'
					}`}
				>
					<div className="font-[600]">{title}</div>
					<div className="pc:my-auto max-h-[270px] flex flex-col space-y-[40px] justify-center items-center">
						<div className=" text-primaryBlack-300">로그인 후 이용할 수 있습니다.</div>
					</div>
					<div className="w-full">
						<Link to="/login" className="block">
							<button
								type="button"
								className="w-full border-2 rounded-[8px] border-borderGray pc:px-[29px] pc:py-[15px] text-primaryBlack-300"
								onClick={() => closePopUp()}
							>
								로그인
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="absolute right-0 z-50 scroll">
			<div
				className={`w-[380px] ${
					title === '알림' ? 'h-[391px]' : 'h-[286px]'
				} p-6 rounded-2xl border-2 text-left bg-white ${isOpen ? '' : 'hidden'}`}
			>
				<div className="font-[600] flex justify-between">
					<div>{title}</div>
					<div className="text-primaryBlack-300">
						<Link to={Path.pushNotice}>더보기</Link>
					</div>
				</div>
				{title === '알림' ? (
					<div className="pc:my-auto overflow-auto pc:mt-[10px] pc:max-h-[290px] h-full justify-center pc:min-h-[290px]">
						<AlarmPopup />
					</div>
				) : (
					<div className="pc:mt-[50px]">
						<UserProfilePopUp handleLogout={handleLogout} closePopUp={closePopUp} />
					</div>
				)}
			</div>
		</div>
	);
}
