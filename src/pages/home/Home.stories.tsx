import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Home from './HomeView';

export default {
	title: 'Pages/Home',
	component: Home,
} as ComponentMeta<typeof Home>;

/* eslint-disable-next-line react/jsx-props-no-spreading, react/function-component-definition */
const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

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
