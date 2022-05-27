/* eslint-disable func-names */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PerformInput from './PerformInput';

export default {
	component: PerformInput,
	title: 'Component/Input/PerformInput',
} as ComponentMeta<typeof PerformInput>;

const Template: ComponentStory<typeof PerformInput> = function (args) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <PerformInput {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
	label: '이메일',
	type: 'email',
	placeholder: 'email 을 입력해주세요',
	onClick: () => {},
};
export const Password = Template.bind({});
Password.args = {
	...Primary.args,
	label: '비밀번호',
	type: 'password',
	placeholder: 'password를 입력해주세요',
};

export const NonLabel = Template.bind({});
NonLabel.args = {
	type: 'email',
	placeholder: 'email 을 입력해주세요',
};
