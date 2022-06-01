/* eslint-disable func-names */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MenuBox, { Props } from './MenuBox';

export default {
	title: 'Component/Box/MenuBox',
	component: MenuBox,
} as ComponentMeta<typeof MenuBox>;

const Template: ComponentStory<typeof MenuBox> = function (args: Props) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <MenuBox {...args} />;
};

export const Logout = Template.bind({});
Logout.args = {
	member: null,
};

export const Login = Template.bind({});
Login.args = {
	member: {
		email: 'test01@gmail.com',
		password: '123456',
		nickName: 'test',
		sex: 'MALE',
		age: 25,
		money: 10000,
	},
};
