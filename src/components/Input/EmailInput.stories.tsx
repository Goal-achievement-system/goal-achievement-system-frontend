/* eslint-disable func-names */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import EmailInput from './EmailInput';

export default {
	component: EmailInput,
	title: 'Component/Input/EmailInput',
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = function (args) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <EmailInput {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
	id: 'email',
	value: '',
	size: 'middle',
	focusColor: 'primaryOrange200',
	confirmState: 'inConfirm',
	onClick: () => {},
};
export const Fail = Template.bind({});
Fail.args = {
	...Primary.args,
	value: 'badgmail.com',
	focusColor: 'buttonOrange200',
};

export const Success = Template.bind({});
Success.args = {
	...Primary.args,
	value: 'good@gmail.com',
	focusColor: 'primaryOrange200',
};

export const Complete = Template.bind({});
Complete.args = {
	...Primary.args,
	value: 'complete@gmail.com',
	focusColor: 'primaryOrange200',
	confirmState: 'confirm',
};
