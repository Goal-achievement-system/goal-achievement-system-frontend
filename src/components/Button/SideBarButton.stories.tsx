/* eslint-disable func-names */
import { Meta, Story } from '@storybook/react';
import React from 'react';
import SideBarButton, { Props } from './SideBarButton';

export default {
	component: SideBarButton,
	title: 'Component/Button/SideBarButton',
} as Meta;

const Template: Story<Props> = function (args: Props) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <SideBarButton {...args} />;
};

export const bgOrange = Template.bind({});
bgOrange.args = {
	onClick: () => {},
	bgColor: 'orange',
	children: (
		<div className="flex justify-between w-full">
			<span className="text-primaryWhite">목표인증텍스트</span>
			<span className="text-primaryWhite">4.1</span>
		</div>
	),
};

export const bgBlack = Template.bind({});
bgBlack.args = {
	onClick: () => {},
	bgColor: 'black',
	children: (
		<div className="flex justify-between w-full">
			<span className="text-primaryWhite">목표인증텍스트</span>
			<span className="text-primaryWhite">4.1</span>
		</div>
	),
};
export const bgGrag = Template.bind({});
bgGrag.args = {
	label: '충전',
	onClick: () => {},
	bgColor: 'gray',
};
