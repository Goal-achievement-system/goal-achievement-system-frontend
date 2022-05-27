/* eslint-disable func-names */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextInput from './TextInput';

export default {
	title: 'Component/Input/TextInput',
	component: TextInput,
	// argTypes: {
	// 	focusColor: {
	// 		options: ['primaryOrange200', 'primaryOrange300'],
	// 		control: { type: 'select' },
	// 	},
	// 	size: {
	// 		options: ['small', 'middle', 'large'],
	// 		control: { type: 'radio' },
	// 	},
	// },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = function (args) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <TextInput {...args} />;
};

export const NonLabel = Template.bind({});
NonLabel.args = {
	placeholder: '텍스트를 입력해주세요',
};

export const HaveLabel = Template.bind({});
HaveLabel.args = {
	...NonLabel.args,
	label: '아이디',
};

//  Pseudo States (css 의사상태 전환)
// https://storybook.js.org/addons/storybook-addon-pseudo-states/
