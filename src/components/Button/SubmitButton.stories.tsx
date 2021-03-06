/* eslint-disable func-names */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import SubmitButton, { Props } from './SubmitButton';

export default {
	component: SubmitButton,
	title: 'Component/Button/SubmitButton',
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = function (args: Props) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <SubmitButton {...args} />;
};

export const Active = Template.bind({});
Active.args = {
	onClick: () => {},
	label: '이메일 인증',
	btnState: 'active',
};

export const InActive = Template.bind({});
InActive.args = {
	onClick: () => {},
	label: '이메일 인증',
	btnState: 'inactive',
};

export const Pressed = Template.bind({});
Pressed.args = {
	onClick: () => {},
	label: '이메일 인증',
	btnState: 'pressed',
};
