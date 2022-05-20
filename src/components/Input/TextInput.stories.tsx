/* eslint-disable func-names */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextInput from './TextInput';

export default {
	title: 'Component/Input/TextInput',
	component: TextInput,
	argTypes: {
		focusColor: {
			options: ['primaryOrange200', 'primaryOrange300'],
			control: { type: 'select' },
		},
		size: {
			options: ['small', 'middle', 'large'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = function (args) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <TextInput {...args} />;
};

export const BeforeTyping = Template.bind({});
BeforeTyping.args = {
	id: 'example',
	size: 'middle',
	value: '',
	placeholder: '입력 전',
	focusColor: 'primaryOrange200',
};

export const CompeleteTyping = Template.bind({});
CompeleteTyping.args = {
	...BeforeTyping.args,
	value: '내용 입력 완료',
};

//  Pseudo States (css 의사상태 전환)
// https://storybook.js.org/addons/storybook-addon-pseudo-states/
