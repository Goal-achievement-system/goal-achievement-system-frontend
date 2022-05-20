/* eslint-disable func-names */
import { Meta, Story } from '@storybook/react';
import React from 'react';
import FilterButton, { Props } from './FilterButton';

export default {
	component: FilterButton,
	title: 'Component/Button/FilterButton',
} as Meta;

const Template: Story<Props> = function (args: Props) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <FilterButton {...args} />;
};

export const selected = Template.bind({});
selected.args = {
	onClick: () => {},
	label: '#기타',
	isSelected: true,
};
export const notSelected = Template.bind({});
notSelected.args = {
	onClick: () => {},
	label: '#기타',
	isSelected: false,
};
