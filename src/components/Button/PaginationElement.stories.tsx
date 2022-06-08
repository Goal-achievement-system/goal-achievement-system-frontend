/* eslint-disable func-names */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import PaginationElement, { Props } from './PaginationElement';

export default {
	component: PaginationElement,
	title: 'Component/Button/PaginationElement',
} as ComponentMeta<typeof PaginationElement>;

const Template: ComponentStory<typeof PaginationElement> = function (args: Props) {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <PaginationElement {...args} />;
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
