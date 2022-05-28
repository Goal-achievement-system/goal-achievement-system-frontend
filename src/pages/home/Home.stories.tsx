/* eslint-disable func-names */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Home, { Props } from './HomeView';

export default {
	title: 'Pages/Home',
	component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = function (args: Props) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <Home {...args} />;
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
