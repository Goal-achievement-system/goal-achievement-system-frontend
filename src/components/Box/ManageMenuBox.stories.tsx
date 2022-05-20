import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ManageMenuBox from './ManageMenuBox';

export default {
	title: 'Component/Box/ManageMenuBox',
	component: ManageMenuBox,
	argTypes: {
		active: {
			options: ['회원관리', '목표 통계', '목표 검토', '공지사항', '팝업', '알림', '로그인'],
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof ManageMenuBox>;

/* eslint-disable-next-line react/jsx-props-no-spreading, react/function-component-definition */
const Template: ComponentStory<typeof ManageMenuBox> = (args) => <ManageMenuBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	member: {
		email: 'test01@gmail.com',
		password: '123456',
		nickName: 'test',
		sex: 'MALE',
		age: 25,
		money: 10000,
	},
	active: '회원관리',
};
