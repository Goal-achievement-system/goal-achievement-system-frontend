import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './TextInput';

export default {
	title: 'Component/Input/TextInput',
	component: Input,
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = function Template(args) {
	const { id, placeholder, size, focusColor, value } = args;
	return <Input id={id} placeholder={placeholder} size={size} focusColor={focusColor} value={value} />;
};

export const BeforeTyping = Template.bind({});
BeforeTyping.args = {
	id: 'example',
	placeholder: '입력 전',
	size: 'middle',
	focusColor: 'primaryOrange200',
};

export const CompeleteTyping = Template.bind({});
CompeleteTyping.args = {
	id: 'example',
	size: 'middle',
	value: '내용 입력 완료',
};

//  Pseudo States (css 의사상태 전환)
// https://storybook.js.org/addons/storybook-addon-pseudo-states/
