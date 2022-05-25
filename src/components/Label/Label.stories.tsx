/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label from './Label';

export default {
	title: 'Component/Label',
	component: Label,
} as ComponentMeta<typeof Label>;

// eslint-disable-next-line func-names
export const Template: ComponentStory<typeof Label> = function (args: any) {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Label {...args} />
	);
};

export const BeforeLogin = Template.bind({});
BeforeLogin.args = {
	value: '이메일',
	target: '유저',
};

// export const AfterLogin = Template.bind({});
// AfterLogin.args = {};
