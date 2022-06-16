/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface Props {
	children: React.ReactNode;
}
function AuthLayout({ children }: Props) {
	return (
		<div className="my-0 mx-auto h-[300px] pc:w-[1200px] pc:h-[762px]  pc:mt-[20px] pc:flex pc:justify-between">
			<div className="bg-primaryOrange-200  invisible  w-0 h-0  flex flex-col items-start pc:rounded-[16px] pc:h-full pc:p-[55px] pc:visible pc:w-[481px] ">
				<img src="../image/banner/image1773.png" alt="banner" />
				<img className="my-[57px] w-[157px] h-[34px]" src="../image/logo/img--logo.png" alt="logo" />

				<img className="w-[310px] h-[96px]" src="../image/text/slogan.png" alt="slogan" />
			</div>
			{children}
		</div>
	);
}

export default AuthLayout;
