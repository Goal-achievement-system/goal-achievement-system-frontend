/* eslint-disable func-names */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Pagination, { Props } from './Pagination';

export default {
	component: Pagination,
	title: 'Component/Button/Pagination',
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = function (args: Props) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <Pagination {...args} />;
};

export const ActiveNum = Template.bind({});
ActiveNum.args = {
	btnType: 'number',
	isActive: true,
	number: 1,
	onClick: () => {},
};

export const InActiveNum = Template.bind({});
InActiveNum.args = {
	btnType: 'number',
	isActive: false,
	number: 1,
	onClick: () => {},
};

export const ActiveArr = Template.bind({});
ActiveArr.args = {
	btnType: 'arrow',
	isActive: true,
	arrDirection: 'left',
	onClick: () => {},
};

export const InActiveArr = Template.bind({});
InActiveArr.args = {
	btnType: 'arrow',
	isActive: false,
	arrDirection: 'left',
	onClick: () => {},
};
