/* eslint-disable func-names */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Select from '.';

export interface Option {
	id: number;
	value: string;
}

export default {
	title: 'Component/Select',
	component: Select,
	args: {
		onClick: () => {},
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = function (args) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <Select {...args} />;
};

const options = [
	{
		id: 1,
		value: '10대',
	},
	{
		id: 2,
		value: '20대',
	},
	{
		id: 3,
		value: '30대',
	},
	{
		id: 4,
		value: '40대',
	},
	{
		id: 5,
		value: '50대',
	},
];

export const Focus = Template.bind({});
Focus.args = {
	options,
	isFocus: true,
	value: '연 령',
	onFocus: () => {},
	onMouseDown: () => {},
};
export const Selected = Template.bind({});
Selected.args = {
	...Focus.args,
	isFocus: false,
	value: '20대',
};
